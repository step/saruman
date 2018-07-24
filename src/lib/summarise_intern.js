import _ from "lodash"

const pushes = (jobDetails)=> {
  return _.groupBy(jobDetails,({node:{commit:{id}}})=>id);
}

const projects = (jobDetails)=> {
  return _.groupBy(jobDetails,({node:{project:{name}}})=>name);
}

const summariseSingleIntern = (jobDetails,intern) => {
  let result={};
  result.intern=intern;
  result.avatar="https://avatars3.githubusercontent.com/u/131062?v=4";
  result.numberOfPushes=_.keys(pushes(jobDetails)).length;

  const byProjects=projects(jobDetails);
  result.numberOfProjects=_.keys(byProjects).length;
  result.lastCommitPerProject=_.map(byProjects,(projectDetails,project)=>{
    const {node: {commit: {timestamp}}} = projectDetails[0];
    return {project, timestamp};
  });
  return result;
}

export default (data) => {
  const filteredData=data.filter(({node})=>{
    return node.author && node.project && node.commit;
  });
  const grouped=_.groupBy(filteredData,({node:{author:{username}}})=>username);
  return _.map(grouped,summariseSingleIntern);
}
