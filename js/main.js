//после загрузки DOM
$(function () {

  /*
  Параметры указываются в виде:
  {
  ключ: значение;
  ключ: значение;
  ...
  }
  Основные параметры
  selector - селектор формы (по умолчанию '#feedback-form')
  maxSizeFile - максимальный размер файла в мегабайтах (по умолчанию 20.0)
  validFileExtensions - допустимые расширения файлов для загрузки (по умолчанию 'jpg', 'jpeg', 'bmp', 'gif', 'png', 'pdf', 'doc', 'docx', 'txt', 'rtf')
  */

  var form1 = new ProcessForm();
  form1.init();

});