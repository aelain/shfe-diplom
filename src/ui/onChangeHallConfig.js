import createRequest from '../api/createRequest';
import getFormData from '../api/getFormData';
import getHallConfigArr from './getHallConfigArr';
import showMessageSaved from './showMessageSaved';

export default function onChangeHallConfig(event, onDataHallChange, setHallConfig) {
  event.preventDefault();
  const { currentTarget } = event;
  const data = getFormData(currentTarget);
  const hallId = data.hallId;
  delete data.hallId;
  data.config = JSON.stringify(getHallConfigArr());

  createRequest({
    url: 'hall/' + hallId,
    method: 'POST',
    headers: {
      'Content-Type': 'applicaton/json'
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.success) {
      onDataHallChange(response.result);
      setHallConfig(response.result.hall_config);
      showMessageSaved(currentTarget);
    } else {
      alert(response.error);
    }
  });
};