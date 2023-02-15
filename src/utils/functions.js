import { getTranform } from "../api/tranformRequest";
import { API_FIELDS } from "./fields";

export async function getTransform(data) {
  const { mapping, structure } = data;
  //Twroznie jsona potrzebengo do API

  let finalMapping = API_FIELDS;

  mapping.forEach((item) => {
    switch (item.name) {
      case "EXTERNAL_ID":
        finalMapping.Fields["id"] = item.value;
        break;
      case "NAME":
        finalMapping.Fields["name"] = item.value;
        break;
      case "NEW_PRODUCT":
        finalMapping.Fields["newProductKey"] = item.value;
        finalMapping.Fields["newProductValue"] = item.options.trueValue;
        break;
      case "AVABILITY":
        finalMapping.Fields["availableKey"] = item.value;
        finalMapping.Fields["availableValue"] = item.options.trueValue;
        break;
      case "BESTSELLER":
        finalMapping.Fields["bestsellerKey"] = item.value;
        finalMapping.Fields["bestsellerValue"] = item.options.trueValue;
        break;
      case "BRAND":
        finalMapping.Fields["brand"] = item.value;
        break;
      case "CATEGORIES":
        finalMapping.Fields["categories"] = item.value;
        break;
      case "CATEGORY_MAIN":
        finalMapping.Fields["categoryMain"] = item.value;
        break;
      case "DESCRIPTION":
        finalMapping.Fields["description"] = item.value;
        break;
      case "DETAIL1":
        finalMapping.Fields["detail1"] = item.value;
        break;
      case "DETAIL2":
        finalMapping.Fields["detail2"] = item.value;
        break;
      case "DETAIL3":
        finalMapping.Fields["detail3"] = item.value;
        break;
      case "DETAIL4":
        finalMapping.Fields["detail4"] = item.value;
        break;
      case "DETAIL5":
        finalMapping.Fields["detail5"] = item.value;
        break;
      case "MANUFACTURER":
        finalMapping.Fields["manufacturer"] = item.value;
        break;
      case "PRICE":
        finalMapping.Fields["price"] = item.value;
        finalMapping.Fields["currency"] = item.options.currency;
        break;
      case "PRICE_PROMO":
        finalMapping.Fields["pricePromo"] = item.value;
        // finalMapping.Fields["pricePromoCurrency"] = item.options.currency;
        break;
      case "QUANTITY":
        finalMapping.Fields["quantity"] = item.value;
        break;
      case "URL_PRODUCT":
        finalMapping.Fields["urlProduct"] = item.value;
        // finalMapping.Fields[""] = item.options.removeUTM;
        break;
      case "URL_IMAGE":
        finalMapping.Fields["urlImg"] = item.value;
        break;
      case "GENDER":
        finalMapping.Fields["genderKey"] = item.value;
        finalMapping.Fields["genderValue"] = item.options.trueValue;
        break;
      case "URL_CATEGORY":
        finalMapping.Fields["urlCategory"] = item.value;
        break;
      case "URL_CATEGORY_MARK":
        finalMapping.Fields["urlCategoryMark"] = item.value;
        break;
      case "POPULARITY":
        finalMapping.Fields["popularity"] = item.value;
        break;
      case "SEASON":
        finalMapping.Fields["season"] = item.value;
        break;
      case "COLOR":
        finalMapping.Fields["color"] = item.value;
        break;
      case "ADDITIONAL_IMAGE":
        finalMapping.Fields["addidtionalImage"] = item.value;
        break;
      case "INT_DETAIL1":
        finalMapping.Fields["intDetail1"] = item.value;
        break;
      case "INT_DETAIL2":
        finalMapping.Fields["intDetail2"] = item.value;
        break;
      case "INT_DETAIL3":
        finalMapping.Fields["intDetail3"] = item.value;
        break;
      default:
        console.warn("Wrong field type");
        break;
    }
  });

  finalMapping.Mapping.mapping = structure;
  finalMapping.MatchFields.customMatchLine = "";
  finalMapping.CutFields.customCutLine = "";

  console.log(finalMapping);

  //Wysłanie requste i zwórcenie statusu i informacji czy jest git
  return getTranform(finalMapping);
}
