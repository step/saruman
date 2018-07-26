import _ from "lodash"

const pushes = (jobDetails)=> {
  return _.groupBy(jobDetails,({node:{commit:{id}}})=>id);
}

const projects = (jobDetails)=> {
  return _.groupBy(jobDetails,({node:{project:{name}}})=>name);
}

const summariseSingleIntern = (jobDetails,intern) => {
  console.log(intern,jobDetails);
  let result={};
  result.intern=intern;
  result.avatar=jobDetails[0].node.author.username.image;
  result.numberOfPushes=_.keys(pushes(jobDetails)).length;

  const byProjects=projects(jobDetails);
  result.numberOfProjects=_.keys(byProjects).length;
  result.lastCommitPerProject=_.map(byProjects,(projectDetails,project)=>{
    const {node: {commit: {timestamp}}} = projectDetails[0];
    return {name:project, timestamp};
  });
  return result;
}

export default (data) => {
  const filteredData=data.filter(({node})=>{
    return node.author && node.author.username && node.project && node.commit;
  });
  const grouped=_.groupBy(filteredData,({node:{author:{username:{id}}}})=>id);
  return _.map(grouped,summariseSingleIntern);
}
