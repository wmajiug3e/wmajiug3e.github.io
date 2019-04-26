//== Class definition
var SweetAlert2Demo = function() {

    //== Demos
    var initDemos = function() {

      $('#new-order').click(function(e) {
          swal("Заказ принят!", "Ищем Вам машину, ожидайте.", "success");
      });

      //== Sweetalert Demo 5
      $('#cancel_driver').click(function(e) {
          swal({
              title: "Водитель отказался от заказа",
              text: "Прислать другого водителя?",
              icon: "success",

              confirmButtonText: "<span><i class='flaticon-profile-1'></i><span>Найти водителя</span></span>",
              confirmButtonClass: "btn m-btn m-btn--gradient-from-success m-btn--gradient-to-accent m-btn--icon",

              showCancelButton: true,
              cancelButtonText: "<span><i class='flaticon-close'></i><span>Отменить заказ</span></span>",
              cancelButtonClass: "btn btn-secondary m-btn--icon"
          });
      });

      //== Sweetalert Demo 5
      $('#cancel_user').click(function(e) {
          swal({
              title: "Пассажир отказался от заказа",
              text: "Ожидайте заказ вне очереди",
              icon: "success",

              confirmButtonText: "<span><i class='flaticon-profile-1'></i><span>Хорошо</span></span>",
              confirmButtonClass: "btn m-btn m-btn--gradient-from-success m-btn--gradient-to-accent m-btn--icon",
          });
      });

      //== Sweetalert Demo 5
      $('#false').click(function(e) {
          swal({
              title: "Водитель отметил заказ как ложный",
              text: "Если ложные заказы будут повторятся мы будем вынуждены Вас заблокировать",
              icon: "success",

              confirmButtonText: "<span><i class='flaticon-exclamation-2'></i><span>Понятно</span></span>",
              confirmButtonClass: "btn m-btn m-btn--gradient-from-info m-btn--gradient-to-accent m-btn--icon",
          });
      });
      //== Sweetalert Demo 5
      $('#reviews').click(function(e) {
          swal({
              title: "Ваш отзыв успешно добавлен!",
              text: "Если Вам понравился водитель и хотите чтобы мы всегда присылали его, то нажмите кнопку ниже.",
              icon: "success",

              confirmButtonText: "<span><i class='flaticon-user-add'></i><span>Запомнить водителя</span></span>",
              confirmButtonClass: "btn m-btn m-btn--gradient-from-success m-btn--gradient-to-accent m-btn--icon",

              showCancelButton: true,
              cancelButtonText: "<span><i class='flaticon-close'></i><span>Закрыть</span></span>",
              cancelButtonClass: "btn btn-secondary m-btn--icon"
          });
      });
      //== Sweetalert Demo 5
      $('#reviews2').click(function(e) {
          swal({
              title: "Ваш отзыв успешно добавлен!",
              text: "Если Вам не понравился водитель и Вы не хотите больше с ним ездить, то нажмите кнопку ниже.",
              icon: "success",

              confirmButtonText: "<span><i class='flaticon-user-ok'></i><span>Заблокировать водителя</span></span>",
              confirmButtonClass: "btn m-btn m-btn--gradient-from-danger m-btn--gradient-to-warning m-btn--icon",

              showCancelButton: true,
              cancelButtonText: "<span><i class='flaticon-close'></i><span>Закрыть</span></span>",
              cancelButtonClass: "btn btn-secondary m-btn--icon"
          });
      });
      //== Sweetalert Demo 5
      $('#reviews3').click(function(e) {
          swal({
              title: "Ваш отзыв успешно добавлен!",
              text: "Если Вам не понравился пассажир и Вы не хотите больше его возить, то нажмите кнопку ниже.",
              icon: "success",

              confirmButtonText: "<span><i class='flaticon-user-ok'></i><span>Заблокировать пассажира</span></span>",
              confirmButtonClass: "btn m-btn m-btn--gradient-from-danger m-btn--gradient-to-warning m-btn--icon",

              showCancelButton: true,
              cancelButtonText: "<span><i class='flaticon-close'></i><span>Закрыть</span></span>",
              cancelButtonClass: "btn btn-secondary m-btn--icon"
          });
      });
      //== Sweetalert Demo 5
      $('#reviews4').click(function(e) {
          swal({
              title: "Ваш отзыв успешно добавлен!",
              icon: "success",

          });
      });
        //== Sweetalert Demo 1
        $('#m_sweetalert_demo_1').click(function(e) {
            swal('Good job!');
        });

        //== Sweetalert Demo 2
        $('#m_sweetalert_demo_2').click(function(e) {
            swal("Here's the title!", "...and here's the text!");
        });

        //== Sweetalert Demo 3
        $('#m_sweetalert_demo_3_1').click(function(e) {
            swal("Good job!", "You clicked the button!", "warning");
        });

        $('#m_sweetalert_demo_3_2').click(function(e) {
            swal("Good job!", "You clicked the button!", "error");
        });

        $('#m_sweetalert_demo_3_3').click(function(e) {
            swal("Good job!", "You clicked the button!", "success");
        });

        $('#m_sweetalert_demo_3_4').click(function(e) {
            swal("Good job!", "You clicked the button!", "info");
        });

        $('#m_sweetalert_demo_3_5').click(function(e) {
            swal("Good job!", "You clicked the button!", "question");
        });

        //== Sweetalert Demo 4
        $('#m_sweetalert_demo_4').click(function(e) {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                confirmButtonText: "Confirm me!",
                confirmButtonClass: "btn btn-focus m-btn m-btn--pill m-btn--air"
            });
        });

        //== Sweetalert Demo 5
        $('#m_sweetalert_demo_5').click(function(e) {
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",

                confirmButtonText: "<span><i class='la la-headphones'></i><span>I am game!</span></span>",
                confirmButtonClass: "btn btn-danger m-btn m-btn--pill m-btn--air m-btn--icon",

                showCancelButton: true,
                cancelButtonText: "<span><i class='la la-thumbs-down'></i><span>No, thanks</span></span>",
                cancelButtonClass: "btn btn-secondary m-btn m-btn--pill m-btn--icon"
            });
        });

        $('#m_sweetalert_demo_6').click(function(e) {
            swal({
                position: 'top-right',
                type: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        });

        $('#m_sweetalert_demo_7').click(function(e) {
            swal({
                title: 'jQuery HTML example',
                html: $('<div>')
                    .addClass('some-class')
                    .text('jQuery is everywhere.'),
                animation: false,
                customClass: 'animated tada'
            })
        });

        $('#m_sweetalert_demo_8').click(function(e) {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then(function(result) {
                if (result.value) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            });
        });

        $('#m_sweetalert_demo_9').click(function(e) {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then(function(result){
                if (result.value) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    // result.dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                } else if (result.dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            });
        });

        $('#m_sweetalert_demo_10').click(function(e) {
            swal({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                animation: false
            });
        });

        $('#m_sweetalert_demo_11').click(function(e) {
            swal({
                title: 'Auto close alert!',
                text: 'I will close in 5 seconds.',
                timer: 5000,
                onOpen: function() {
                    swal.showLoading()
                }
            }).then(function(result) {
                if (result.dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            })
        });
    };

    return {
        //== Init
        init: function() {
            initDemos();
        },
    };
}();

//== Class Initialization
jQuery(document).ready(function() {
    SweetAlert2Demo.init();
});
