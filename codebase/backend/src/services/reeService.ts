import axios from "axios";
import REEResponse from "./reeTypes";

export const fetchAndSaveBalance = async (
  startDate: string,
  endDate: string,
  timeTrunc: "hour" | "day" | "month" | "year"
): Promise<void> => {
  const url = [
    "https://apidatos.ree.es/es/datos/balance/balance-electrico",
    `?start_date=${encodeURIComponent(startDate)}`,
    `&end_date=${encodeURIComponent(endDate)}`,
    `&time_trunc=${timeTrunc}`,
    // si necesitas geo:
    // `&geo_limit=ccaa&geo_ids=8&geo_trunc=electric_system`
  ].join("");

  let reeResponse: REEResponse;
  try {
    const resp = await axios.get<REEResponse>(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    reeResponse = resp.data;
  } catch (err: any) {
    // 500 → API caída, no abortamos todo el pipeline
    if (err.response?.status === 500) {
      console.warn(`⚠️ REE API devolvió 500 para ${startDate}→${endDate}`);
      return;
    }
    console.error("❌ Error fetching REE API:", err);
    throw err;
  }

  for (const energyType of reeResponse.included) {
    const type = energyType.type;
    const id = energyType.id;
    const attributes = energyType.attributes;
    console.log(type, id, attributes);
  }
};
