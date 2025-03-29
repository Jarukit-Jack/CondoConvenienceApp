export default {
  onRecieveClick: function (parcelId) {
    // เรียกใช้ Query เพื่ออัปเดตสถานะพัสดุ
    update_status.run()
      .then(() => {
        // รีเฟรชข้อมูลให้แสดงผลอัปเดตล่าสุด
        receive.run();
        notreceive.run();
      })
      .catch((error) => {
        showAlert("Failed to update parcel status: " + error.message, "error");
      });
  }
};
