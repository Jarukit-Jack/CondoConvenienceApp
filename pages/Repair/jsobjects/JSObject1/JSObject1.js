export default {
  SubmitonClick: function () {
    //console.log("Selected Time Slot:", Select1.selectedOptionValue); // ตรวจสอบค่า
    
    if (!Select2.selectedOptionValue && !bookdate1.formattedDate) {  
      showAlert("Please select a valid time slot.", "error");
      return;
    }

    insert_repair.run().then(() => {
      /*storeValue('poolbook', {
        "id": appsmith.store.user_id,
        "date": bookdate1.formattedDate,
        "time_slot": Select1.selectedOptionValue,
        "status": "booked"
      });*/
			get_future_repair.run();
			Query1.run();

      showAlert("Successfully Updated", "success");
    }).catch((error) => {
      showAlert("Update Failed: " + error.message, "error");
    });
  }
};