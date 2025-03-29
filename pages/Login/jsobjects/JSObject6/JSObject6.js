export default {
	Button1CopyonClick () {
		{{ 
  check_admin_login.run((data) => {
    if (data.length > 0) {
			storeValue("admin_id", data[0]._id);
// Fetch full user info after login
      get_admin_info.run(() => {
        storeValue("admin_info", get_admin_info.data); // Store all user info globally
        navigateTo("HomeAdmin");
      }, (error) => {
        showAlert("เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ใช้: " + error.message, "error");
      });
    } else {
      showAlert("อีเมลหรือรหัสผ่านไม่ถูกต้อง", "error");
    }
  }, (error) => {
    showAlert("เกิดข้อผิดพลาด: " + error.message, "error");
  });
}}
	}
}