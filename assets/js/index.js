$(function(){
    // getUserInfo()
    var layer=layui.layer
    $('#btnoLgout').on('click',function(){
        layer.confirm('确定退出登录', {icon: 3, title:'提示'}, function(index){
            //do something
            localStorage.removeItem('token')
            location.href='login.html'
            layer.close(index);
          });
    })
})
function getUserInfo(){
    $.ajax({
        method: 'GET',
        url:'http://ajax.frontend.itheima.net/my/userinfo',
        headers:{
            Authorization:localStorage.getItem('token')||'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI'
        },
        success: function(res){
            console.log(res)
        }
    })
}