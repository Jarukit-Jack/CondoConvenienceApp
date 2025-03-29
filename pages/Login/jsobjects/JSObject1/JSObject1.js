export default {
	Button1CopyonClick () {
		{{ 
  check_user_login.run((data) => {
    if (data.length > 0) {
			storeValue("user_id", data[0]._id);
// Fetch full user info after login
      get_user_info.run(() => {
        storeValue("user_info", get_user_info.data); // Store all user info globally
        navigateTo("Home");
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