export default {
  SubmitonClick: async function () {
    try {
      // คำนวณ newId ใหม่
      const maxId = await get_AllParcel.run(); // ดึงข้อมูลทั้งหมดมาก่อน
      const maxIdNumber = maxId.reduce((max, item) => {
        const idNumber = parseInt(item._id.replace('P', ''), 10);
        return Math.max(max, idNumber);
      }, 0);

      const newId = 'P' + (maxIdNumber + 1).toString().padStart(3, '0');
      
      // เก็บ newId ไปที่ store
      await storeValue('newId', newId);
      
      // ตรวจสอบการเก็บค่า
      //console.log("Stored newId:", appsmith.store.newId);
      
      // ทำการ Insert ข้อมูลใหม่
      await insert_parcel.run();
			
			await get_AllParcel.run();
      showAlert("Insert Successful", "success");
      
    } catch (error) {
      showAlert("Insert Failed: " + error.message, "error");
    }
  }
};
