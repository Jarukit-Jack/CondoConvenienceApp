export default {
  refresher: async function () {
    try {
      await Admin_get_pool.run();
      await Admin_get_time_slot.run();
 
    } catch (error) {
      showAlert("Update Failed: " + error.message, "error");
    }
  }
};
