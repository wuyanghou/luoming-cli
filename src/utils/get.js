import { getAll } from './rc';
import downloadGit from 'download-git-repo';

// export const downloadLocal = async (templateName, projectName) => {
export const downloadLocal = async (projectName) => {
  let config = await getAll();
  // let api = `${config.registry}/${templateName}`;
  let api = `wuyanghou/koa-react`;
  return new Promise((resolve, reject) => {
    console.log(api, 22222);
    //projectName 为下载到的本地目录
    downloadGit(api, projectName, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}