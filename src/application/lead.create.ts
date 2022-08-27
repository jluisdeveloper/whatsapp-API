import LeadExternal from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
  private leadRepository: LeadRepository;
  private leadExternal: LeadExternal;
  constructor(respositories: [LeadRepository, LeadExternal]) {
    const [leadRepository, leadExternal] = respositories;
    this.leadRepository = leadRepository;
    this.leadExternal = leadExternal;
  }

  public async sendMessageAndSave({
    message,
    phone,
    type_msg,
    media_urls,
  }: {
    message: string;
    phone: string;
    type_msg: string;
    media_urls: string[];
  }) {
    const responseDbSave = await this.leadRepository.save({ message, phone, type_msg, media_urls });//TODO DB
    const responseExSave = await this.leadExternal.sendMsg({ message, phone, type_msg, media_urls });//TODO enviar a ws
    return {responseDbSave, responseExSave};
  }
}
