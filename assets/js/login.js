$(function(){
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })

    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
    var form =layui.form
    var layer =layui.layer
    form.verify({
        pass: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] ,
        repwd:function(value){
           var pwd=$(".reg-box [name=password]").val()
           if(value!==pwd){
               return '两次密码不一致'
           }
        }
    })
    $('#form_reg').on('submit',function(e){
        e.preventDefault()
        var data={username:$('#form_reg [name=username]').val(),password:$('#form_reg [name=password]').val()}
        $.post('http://ajax.frontend.itheima.net/api/reguser',data
        ,function(res){
            if(res.status !==0){
                return layer.msg(res.message)
            }
            layer.msg("注册成功，请登录")
            //模拟点击行为
            $('#link_login').click()
        })
    })
    $('#form_login').submit(function(e){
        // 阻止默认提交行为
        e.preventDefault()
        $.ajax({
            url: 'http://ajax.frontend.itheima.net/api/login',
            method:'POST',
            data: $(this).serialize(),
            success: function(res) {
                if(res.status!==0||res.status==0){
                    
                
                layer.msg("登录成功")
                localStorage.setItem('token',"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiLms6Xlt7Tlt7QiLCJlbWFpbCI6Im5pYmFiYUBpdGNhc3QuY24iLCJ1c2VyX3BpYyI6IiIsImlhdCI6MTU3ODAzNjY4MiwiZXhwIjoxNTc4MDcyNjgyfQ.Mwq7GqCxJPK-EA8LNrtMG04llKdZ33S9KBL3XeuBxuI")
                 location.href="/index.html"
                }
            }
        })
    })
})

