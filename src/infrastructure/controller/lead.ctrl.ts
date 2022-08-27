import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone, type_msg, media_urls } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone, type_msg, media_urls })
    res.send(response);
  };
}

export default LeadCtrl;


