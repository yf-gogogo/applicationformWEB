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
                    },
                    stringLength: {
                        min: 1,
                        max: 40,
                        message: '邮箱过长'
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
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '地址过长'
                    }
                }
            },
            school:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '学校名过长'
                    }
                }
            },
            major:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '专业名过长'
                    }
                }
            },
            politics:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '该字段过长'
                    }
                }
            },
            plan_major:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '专业名过长'
                    }
                }
            },
            nation:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '该字段过长'
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
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '该字段过长'
                    }
                }
            },
            cet:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '该字段过长'
                    }
                }
            },
            class_rank:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '该字段过长'
                    }
                }
            },
            major_rank:{
                validators: {
                    notEmpty: {
                        message: '该选项是必需的，不能为空'
                    },
                    stringLength: {
                        min: 1,
                        max: 100,
                        message: '该字段过长'
                    }
                }
            },
            file:{
                validators: {
                    container: '#filetip',
                    file: {
                        // extension: 'pdf,zip',
                        // type: 'application/pdf,application/zip',
                        maxSize: 10*1024*1024,
                        message: '请选择上传小于10M的文件'
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
            //为表单中的userid赋值
            $('#userid').val(userid);

            $('.progress').css('display','block');

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
                xhr:function(){
                    myXhr = $.ajaxSettings.xhr();
                    if(myXhr.upload){ //检查upload属性是否存在
                        //绑定progress事件的回调函数
                        myXhr.upload.addEventListener('progress',progressHandlingFunction, false);
                    }
                    return myXhr; //xhr对象返回给jQuery使用
                },
                success:function (data) {
                    console.log(data);
                    $('#tabsubmitinfo').attr("href","#message");
                    // $('#myTabs a[href="#message"]').tab('hide');
                    // $('#myTabs a[href="#message"]').tab('show');
                    // $(location).attr('href', './success.html?data='+data);
                    //弹出模态框
                    $("#modalinput").text("报名成功");
                    $('.bs-example-modal-sm').modal('show');
                    $('.bs-example-modal-sm').on('hide.bs.modal',function (e) {
                        location.reload();
                    });

                },
                error:function (err) {

                    alert('提交失败')

                    // Enable the submit buttons
                    // bv.disableSubmitButtons(true);
                }
            });
            function progressHandlingFunction(e){
                if(e.lengthComputable){
                    let value = (e.loaded / e.total * 100 | 0);
                    $('.progress-bar').css('width',value+'%')
                    // process=curr/total*100;
                    console.log("已经上传：" + value);
                }

            }
        })

});