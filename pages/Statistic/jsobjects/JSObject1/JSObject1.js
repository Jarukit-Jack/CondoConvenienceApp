export default {
  groupParcelsByMonth: () => {
    let data = get_parcel.data; // ดึงข้อมูลจาก Query
    if (!data || !Array.isArray(data)) {
      return []; // ถ้าไม่มีข้อมูล ให้คืนค่าเป็นอาร์เรย์ว่าง
    }

    // เปลี่ยนเป็นชื่อเดือนแบบย่อ
    let monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let monthCounts = {};

    data.forEach(p => {
      if (!p.received_date) return; // ข้ามข้อมูลที่ไม่มีวันที่
      
      let date = new Date(p.received_date);
      if (isNaN(date)) return; // ข้ามถ้าวันที่ไม่ถูกต้อง
      
      let monthIndex = date.getMonth(); // ดัชนีของเดือน (0-11)
      let monthName = monthNames[monthIndex]; // แปลงเป็นชื่อเดือนแบบย่อ

      if (!monthCounts[monthName]) {
        monthCounts[monthName] = 0;
      }
      monthCounts[monthName]++;
    });

    // แปลงข้อมูลเป็นอาร์เรย์ที่เรียงลำดับตามเดือน
    return monthNames
      .filter(month => monthCounts[month]) // กรองเฉพาะเดือนที่มีข้อมูล
      .map(month => ({
        month: month, // ใช้ชื่อเดือนย่อ
        parcelCount: monthCounts[month]
      }));
  }
};
