let customer =
    [
        {
            name: "Nguyen Huu Vinh",
            pass: "vinh123"
        },
        {
            name: "Le Su Kieu My",
            pass: "my123"
        },
        {
            name: "Ngo Tu Duy",
            pass: "duy123"
        }
    ];
//hàm hiển thị khung đăng ký
function show_register() {
    document.getElementById("register-box").style.display = "block";
}
//hàm đăng ký
function register() {
    let userName_register = document.getElementById("userName-register").value;
    let password_register = document.getElementById("password-register").value;
    let password_again = document.getElementById("password-again").value;
    if (password_register == "" || userName_register == "") {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu!")
    }
    else if (password_register !== password_again) {
        alert("Mật khẩu xác nhận sai!");
    }
    else {
        alert("Đăng ký thành công");
        let temp = {};
        temp.name = userName_register;
        temp.pass = password_register;
        customer.push(temp);
        localStorage.setItem("customer", customer);
    }
}
//hàm đăng nhập
function login() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let check = 0;
    for (let i = 0; i < customer.length; i++) {
        if ((customer[i].name === userName) && (customer[i].pass === password)) {
            check++;
        }
    }
    return check >= 1 ? alert("Đăng nhập thành công") : alert("Tên đăng nhập hoặc mật khẩu sai!");
}