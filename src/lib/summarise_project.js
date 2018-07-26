import _ from "lodash"

const pushes = (jobDetails)=> {
  return _.groupBy(jobDetails,({node:{commit:{id}}})=>id);
}

const interns = (jobDetails)=> {
  return _.groupBy(jobDetails,({node:{author:{username:{id}}}})=>id);
}

const summariseSingleProject = (jobDetails,project) => {
  let result={};
  result.project=project;
  result.avatar="https://avatars3.githubusercontent.com/u/131062?v=4";
  result.numberOfPushes=_.keys(pushes(jobDetails)).length;

  const byInterns=interns(jobDetails);
  result.numberOfInterns=_.keys(byInterns).length;
  result.lastCommitPerIntern=_.map(byInterns,(projectDetails,intern)=>{
    const {node: {commit: {timestamp}}} = projectDetails[0];
    return {name:intern, timestamp};
  });
  return result;
}

export default (data) => {
  const filteredData=data.filter(({node})=>{
    return node.author && node.author.username && node.project && node.commit;
  });
  const grouped=_.groupBy(filteredData,({node:{project:{name}}})=>name);
  return _.map(grouped,summariseSingleProject);
}
