$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        var messageCount = parseInt($('#messageCount').val()); // Az üzenetek számának lekérése és számmá alakítása

        if (link == null || link === "" || content == null || content === "") {
            return false;
        }

        for (var i = 0; i < messageCount; i++) { // Ciklus az üzenetek számára
            $.post(link, {"content": content, "username": username, "avatar_url": avatar});
        }
    });
});
