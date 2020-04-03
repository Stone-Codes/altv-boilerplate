export const generateViewLink = (link:string):string => {
  return `${process.env.VIEWS_URL}${link}`
}