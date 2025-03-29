export default {
  SubmitonClick: function () {

    
    if (!Select1.selectedOptionValue) {  
      showAlert("Please select a valid time slot.", "error");
      return;
    }

    update_book_pool.run().then(() => {
      storeValue('poolbook', {
        "id": appsmith.store.user_id,
        "date": bookdate1.formattedDate,
        "time_slot": Select1.selectedOptionValue,
        "status": "booked"
      });
			pool_get_future_book.run();

      showAlert("Successfully Updated", "success");
    }).catch((error) => {
      showAlert("Update Failed: " + error.message, "error");
    });
  }
};