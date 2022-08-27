export default interface LeadExternal {
    sendMsg({message, phone}:{message:string, phone:string, type_msg:string, media_urls:string[] }):Promise<any>
}