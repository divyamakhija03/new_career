export interface easyques{
    quesID: number,
    ques: string,
    images: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    answer: string,
    categoryID: number,
    levelID: number,
    Cname: string,
    Levelname: string


}

export interface cat{
    CategoryID: number,
    Cname: string,
    ActiveYN: number
}

export interface profile{
  FirstName: string,
  LastName: string,
  email: string,
  bio: string,
  phone: string,
  token: string,
  std:string
  
}