export default {
  SubmitonClick: async function () {


    try {
      // Step 1: Cancel the existing booking
      await update_cancel_book.run();
      console.log("Booking canceled successfully");

      // Step 2: Reopen the time slot
      await insert_book.run();
      console.log("New available slot inserted");

      // Show success message
      showAlert("Successfully Updated", "success");

      // Step 3: Refresh the booking list
      pool_get_future_book.run();
			pool_get_history.run();
    } catch (error) {
      console.error("Error updating booking:", error);
      // Show error message
      showAlert("Update Failed: " + (error.message || "Please check the console for details"), "error");
    }
  }
};