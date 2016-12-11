$(function() {
    var resume = {
        name: 'John Rezig',
        photo: {
            src: 'img/photo.jpg',
            alt: 'Jonh'
        },
        job: 'Web-developer',
        reasons: ['Write less, do more'],
        number: '+380667206635',
        vkId: 'john_r',
        feedback: "Read more!"
    };

    var resumeTemplate = $('#resumeTemplate').html();
    var content = tmpl(resumeTemplate, resume);
    $('.template').append(content);
});