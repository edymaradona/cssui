﻿define(['View', getViewTemplatePath('select'), 'UISelect'], function (View, viewhtml, UISelect) {

  return _.inherit(View, {
    onCreate: function () {
      this.$el.html(viewhtml);

    },

    events: {

    },

    onPreShow: function () {


      var data1 = [];

      for (var i = 0; i < 100; i++) {
        var obj = { id: 'q_' + i, name: '项目_' + i };

        if (i % 3 == 0) obj.disabled = true;

        data1.push(obj);

      }

      if (!this.demo) {
        this.demo = new UISelect({
          wrapper: $('.cui-citys-bd'),
          datamodel: {
            data: data1
          }
        });
      }


      this.demo.show();

      this.turning();

      window.s = this.demo;



    },

    onShow: function () {

    },

    onHide: function () {

    }

  });
});
