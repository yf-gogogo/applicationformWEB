$(document).ready(function() {
    $('#login').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:{
            username: {
                validators: {
                    notEmpty: {
                        message: '名字是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: '用户名过长'
                    }
                }
            },
            password:{
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    }
                }
            }
        }
    })
        .on('success.form.bv', function(e,data) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Use Ajax to submit form data
        $.get('/login', $form.serialize(), function(result) {
            console.log(result);
            if(result.errcode == 0){
                alert('登陆成功');
                $(location).attr('href', '/form/'+result.md5);
            }else{
                alert('账号或密码错误，登陆失败');
            }

        }, 'json');

    });
    $('#register').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:{
            username:{
                validators: {
                    notEmpty: {
                        message: '名字是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: '用户名过长'
                    }
                }
            },
            email: {
                message: 'The email is not valid',
                validators: {
                    notEmpty: {
                        message: '邮箱是必需的，不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮箱地址'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'confirmPassword',
                        message: '两次密码输入不一致'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '两次密码输入不一致'
                    }
                }
            },
        }
    })
        .on('success.form.bv', function(e,data) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);
        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post('/adduser', $form.serialize(), function(result) {
            console.log(result);
            alert('注册成功');
            $('#myTabs a:first').tab('show') // Select first tab
        }, 'json');
    });
    $('#btnvertifycode').on("click",function () {

        $("#getcode").bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                verifyemail: {
                    validators: {
                        notEmpty: {
                            message: '名字是必需的，不能为空'
                        },
                        emailAddress: {
                            message: '请输入正确的邮箱地址'
                        }
                    }
                }
            }
        });
        $("#getcode").data('bootstrapValidator').validate();
        console.log($("#getcode").data('bootstrapValidator').isValid())
        if($("#getcode").data('bootstrapValidator').isValid()){
            $.get('/getvertifycode', {'verifyemail':$("#verifyemail").val()}, function(result) {
                if(result.msg == 0){
                    alert('邮箱未注册');
                }else{
                    alert('已发送验证码到邮箱');
                    sendMessage();
                }
            });
        }

    })
    $('#btnpwd').on("click",function () {

        $("#getpwd").bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                vertifycode: {
                    message: 'The email is not valid',
                    validators: {
                        notEmpty: {
                            message: '验证码是必需的，不能为空'
                        },
                    }
                }
            }
        });
        $("#getpwd").data('bootstrapValidator').validate();
        if($("#getpwd").data('bootstrapValidator').isValid()){
            $.get('/getpwd', {'verifyemail':$("#verifyemail").val(),'verifycode':$("#verifycode").val()}, function(result) {
                if(result.errcode == 0){
                    alert('已发送密码到邮箱')
                }else{
                    alert('验证码错误')
                }
            });
        }
    })

})