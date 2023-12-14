var login = false
var username = ""
function myScript() {
    while (login == false) {
        var existname = ["abc18203", "abc17526", "abc19085"]
        var existpsw = ["18203", "17526", "19085"]
        username = window.prompt("請先登入學生賬戶,請輸入用戶名")
        var userver = false
        for (var i = 0; i < 3; i++) {
            if (username == existname[i]) {
                var userpsw = window.prompt("請輸入密碼")
                userver = true
                if (userpsw == existpsw[i]) {
                    login = true;
                    document.getElementById("welcome").innerHTML= "歡迎，" + username + ", 請點選下方按鈕以進行投票。"
                }
                else {
                    alert("密碼錯誤！請重新輸入用戶名和密碼！");
                }
                break
            }
            else {
                userver = false
            }
        }
        if (userver == false) {
            alert("錯誤或無效的用戶名，請重新輸入！")
        }
    }
}
function vote(house) {
    var choice = window.confirm("你確定要投票給内閣 " + house + " 嗎？")
    if (choice == true)
    {
        window.alert("感謝您的投票！")
        window.location.replace("index.html")
    }
}