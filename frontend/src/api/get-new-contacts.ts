import apiFetch from "@/utils/fetch";
import { getJWT } from "@/utils/get-jwt";

export const getNewContacts = async () => {
   return await apiFetch<Array<{ id: string; username: string }>>(
      "/user/new-contacts",
      {},
      getJWT()
   );
};
