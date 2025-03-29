import createRequest from '../api/createRequest';
import getFormData from '../api/getFormData';
import showMessageSaved from './showMessageSaved';

export default function onChangeHallPrice(event, onDataHallChange, setHallPriceStandart, setHallPriceVip) {
  event.preventDefault();
  const { currentTarget } = event;
  const data = getFormData(currentTarget);
  const hallId = data.hallId;
  delete data.hallId;

  createRequest({
    url: 'price/' + hallId,
    method: 'POST',
    headers: {
      'Content-Type': 'applicaton/json'
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.success) {
      onDataHallChange(response.result);
      setHallPriceStandart(response.result.hall_price_standart);
      setHallPriceVip(response.result.hall_price_vip);
      showMessageSaved(currentTarget);
    } else {
      alert(response.error);
    }
  });
};