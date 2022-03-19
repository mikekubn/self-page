interface IJob {
  id: string,
  companyName: string,
  date: string,
  where: string,
  position: string,
  description: string,
}

const jobs_lan_en: IJob[] = [
  {
    id: '1', companyName: 'Company Name', date: 'from: 23.1 to: 15.2', where: 'where: Czech', position: 'Job description', description: 'n publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such',
  },
  {
    id: '2', companyName: 'Company Name', date: 'from: 23.1 to: 15.2', where: 'where: Czech', position: 'Job description', description: 'n publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such',
  },
  {
    id: '3', companyName: 'Company Name', date: 'from: 23.1 to: 15.2', where: 'where: Czech', position: 'Job description', description: 'n publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such',
  },
  {
    id: '4', companyName: 'Company Name', date: 'from: 23.1 to: 15.2', where: 'where: Czech', position: 'Job description', description: 'n publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such',
  },
];

export { jobs_lan_en };
export type { IJob };
