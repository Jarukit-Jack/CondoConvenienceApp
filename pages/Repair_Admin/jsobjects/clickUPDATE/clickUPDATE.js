export default {
  onRecieveClick: function (repairId) {
    console.log("Parcel ID in store:", appsmith.store.user_info[0]._id); // พิมพ์ค่า _id ใน console
    console.log("Recieving Parcel ID:", repairId);

    // เรียกใช้ Query เพื่ออัปเดต
    update_status.run()
      .then(() => {
        // รีเฟรชข้อมูลให้แสดงผลอัปเดตล่าสุด
        Complete.run();
        Incomplete.run();
      })
      .catch((error) => {
        showAlert("Failed to update parcel status: " + error.message, "error");
      });
  }
};
