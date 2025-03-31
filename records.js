// 初始化数字记录
let numberList = JSON.parse(localStorage.getItem("numberList")) || [];

// 显示所有记录
function displayNumbers() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // 清空现有表格

    numberList.forEach((num, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${num}</td>
                <td><button onclick="removeNumber(${index})">删除</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// 添加数字记录
function addNumber() {
    const input = document.getElementById("numberInput").value.trim();
    if (!/^\d{3}$/.test(input)) {
        alert("请输入一个有效的三位数字！");
        return;
    }

    if (numberList.length >= 50) {
        alert("最多只能记录 50 个数字！");
        return;
    }

    numberList.unshift(input);  // 将新的数字添加到最前面
    localStorage.setItem("numberList", JSON.stringify(numberList));  // 保存到 localStorage
    displayNumbers();  // 更新显示
    document.getElementById("numberInput").value = "";  // 清空输入框
}

// 删除数字记录
function removeNumber(index) {
    numberList.splice(index, 1);  // 删除指定索引的数字
    localStorage.setItem("numberList", JSON.stringify(numberList));  // 更新 localStorage
    displayNumbers();  // 更新显示
}

// 页面加载时显示现有记录
window.onload = displayNumbers;

const PASSWORD = "ty112113"; // 设置一个固定的密码

function verifyPassword() {
    const password = prompt("请输入密码：");
    return password === PASSWORD;

}

function addNumber() {
    if (!verifyPassword()) {
        alert("密码错误！你不能修改记录");
        return;
    }
    // 继续执行添加记录的代码...
}

function removeNumber(index) {
    if (!verifyPassword()) {
        alert("密码错误！你不能删除记录");
        return;
    }
    // 继续执行删除记录的代码...
}