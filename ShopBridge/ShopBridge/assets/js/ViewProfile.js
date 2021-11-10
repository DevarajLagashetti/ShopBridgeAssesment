function ViewClick() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "../EmployeeMasterAp/EmpViewDash",
        dataType: 'json',
        success: function () {
            window.location.href = "../EmployeeMasterAp/EmployeeMasterAp";
        }
    });
}

