  // window.alert('Hello World！');
    if (history.length < 2) {
      document.write("<a href='javaScript:self.close()'>閉じる</a>");
    } else {
      document.write("<a href='javaScript:history.back()'>戻る</a>");
    }