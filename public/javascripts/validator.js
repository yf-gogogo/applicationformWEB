$(document).ready(function() {
    $('#defaultForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
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
            gender:{
                validators: {
                    notEmpty: {
                        message: '性别是必需的，不能为空'
                    }
                }
            },
            phonenum: {
                validators: {
                    notEmpty: {
                        message: '手机号是必需的，不能为空'
                    },
                    stringLength:{
                        min:11,
                        max:11,
                        message:'请输入11位手机号'
                    },
                    digits: {
                        message: '只能填数字'
                    }
                }
            },
            cardid:{
                validators: {
                    notEmpty: {
                        message: '身份证是必需的，不能为空'
                    },
                    stringLength:{
                        min:18,
                        max:18,
                        message:'请输入18位身份证号'
                    },
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
            input_province: {
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            detailaddress:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            school:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            major:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            politics:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            plan_major:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            nation:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            birthday:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            duty:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            cet:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            class_rank:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            major_rank:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    }
                }
            },
            file:{
                validators: {
                    container: '#filetip',
                    file: {
                        extension: 'pdf,zip',
                        type: 'application/pdf,application/zip',
                        maxSize: 10*1024*1024,
                        message: '请选择上传小于10M的pdf、zip文件'
                    },
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                }
            },
        }
    })
        .on('success.form.bv', function(e,data) {
            // Prevent form submission
            e.preventDefault();

            // data.bv.disableSubmitButtons(false);
            $('#userid').val(userid);

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            var formData = new FormData(document.getElementById("defaultForm"))
            $.ajax({
                url:'/formsubmit',
                type:'POST',
                data:formData,
                processData:false,
                contentType:false,
                success:function (data) {
                    console.log(data)
                    $(location).attr('href', './success.html?data='+data);
                },
                error:function (err) {

                    alert('提交失败')

                    // Enable the submit buttons
                    // bv.disableSubmitButtons(true);
                }
            })
        })

});