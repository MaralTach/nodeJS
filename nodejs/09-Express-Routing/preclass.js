const { request } = require("express")

hata işlemeyi kullanmanın yararları şunlardır:

İşlenmeyen hatalar uygulamanın çökmesine neden olabilir. Bu durum, zayıf kullanıcı deneyimine ve olası veri kaybına neden olur. Hata işleme, hataları yakalayıp yanıtlamanıza olanak tanıyarak bunların bir çökmeye neden olmasını önler.

Hata işleme, kullanıcılara anlamlı ve kullanıcı dostu hata mesajları sunmanıza olanak tanır. Bu, genel kullanıcı deneyiminin iyileştirilmesine yardımcı olabilir.

Günlük kaydı sayesinde uygulamanızda hata ayıklamayı ve sorunların temel nedenini belirlemeyi kolaylaştırır. Bu, uygulamanızdaki sorunları giderirken zamandan ve emekten tasarruf etmenizi sağlayabilir.


Hata işleme ara yazılımı

Yerleşik hata işleme ara yazılımı, next() işlevine atılan veya iletilen hataları işlemek için kullanılabilir.

Hata ara yazılımı 4 parametre alır. Bunlar;
error
request
response
next

Hata mesajıyla birlikte durum kodunu da göndermemizi sağlar.
app.use(function(hata, istek, yanıt, sonraki) {
Response.status(500).send('Dahili Sunucu Hatası');
});

Hataların konsol dışındaki ortamlara kaydedilmesi gelecek derslerde gösterilecektir (günlüğe kaydetme ve dokümantasyon).