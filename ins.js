$('input').mouseup(function(){
    $(this).css('transform','scale(1)')
})
$('input').mousedown(function(){
    $(this).css('transform','scale(0.91)')
})

var doc = new jsPDF()




let tempraments = [
    {ISTJ:'People with this personality generally appear serious and formal. They usually love traditions and believe in values like honor, hard work and social responsibility. They are typically reserved, quiet, calm and upright. At work, they are known for being responsible and reliable. They thrive in an organized workplace and prefer to have rules laid out for them. They like to use analytical and critical thought and are highly detail-oriented. If you are an ISTJ, you may want to consider the following roles:',jobs:[`Dentist`,`Certified Public Accountant`,`Supply Chain Manager`,`Business Analyst`]},
    {INFJ:'INFJs are usually idealists who have a profound way of looking at the world. They usually don’t take things at the surface level or accept things as they are. They are often overflowing with ideas and creative imagination. When it comes to careers, they appreciate peaceful work environments and are deep thinkers who appreciate challenges at work. They are empathetic and caring, helpful and insightful. If you are an INFJ, some jobs you may want to consider are:',jobs:[`Counselor`,`Writer`,`Scientist`,`Librarian`,`Psychologist`]},
    {INTJ:'INTJs are usually quiet, reserved and comfortable being alone. Socializing often drains their energy and they need alone time to recharge. They are interested in ideas and theories and enjoy questioning why things happen the way they do. They excel at planning and strategizing and don’t like uncertainty. They have a talent for recognizing connections that makes them natural problem-solvers and they are skilled at both intuitive and practical thinking. If you an INTJ, some careers you may want to consider are:',jobs:[`Musical Performer`,`Managing Editor`,`Photographer`,`Financial Advisor`,`Marketing Manager`,`Teacher`,`Physical Therapist`]},
    {ENFJ:'ENFJs are people-focused. They are extroverted, idealistic, highly principled and ethical. They know how to connect with others and rely on intuition and feelings, living in their imagination rather than the real world. ENFJs are natural leaders and are extremely driven but still empathetic to the needs of those around them. They generally feel compelled to make the world a better place. If you are an ENFJ, you may want to consider careers such as:',jobs:[`Guidance Counselor`,`Sales Manager`,`HR Director`,`Art Director`,`Public Relations Manager`]},
    {ISTP:'ISTPs are generally mysterious people who are typically rational and logical but can also be spontaneous and enthusiastic. Their personality traits are less easily recognizable and it can be hard to anticipate their reactions. They are often unpredictable, spontaneous people but hide those traits from others. In their work, they are great at troubleshooting problems. They are often quiet and observant although they collaborate well with others when necessary. Many ISTPs prefer analytical or technical tasks and they are quick to find a solution when problems arise. If you are an ISTP, possible careers you may want to consider are:',jobs:[`Technician`,`Construction Worker`,`Engineer`,`Forensic Scientist`,`Inspector`]},
    {ESFJ:'ESFJs are highly sociable and need to interact with others and make people happy. They usually revel in the spotlight their entire lives and enjoy organizing social events for friends and family. Because ESFJs look for cooperation and harmony in the workplace, they generally look for careers that allow them to enforce social order. They are typically sensitive to the needs of others and skilled at reading social cues. If you are an ESFJ, some careers you may want to consider are:',jobs:[`Office Manager`,`Technical Support Specialist`,`Museum Curator`,`Psychologist`,`Medical Researcher`]},
    {INFP:'INFPs are quiet and prefer not to talk about themselves. They enjoy spending time alone in quiet places. They love analyzing signs and symbols and enjoy getting lost in their imagination and daydreams. In professional environments, INFPs seek to learn new things and change the world. While they usually bring intensity and enthusiasm to projects, they often find it challenging to sustain their excitement for long periods of time. If you are an INFP, some careers you may want to consider are:',jobs:[`Copywriter`,`HR Manager`,`Physical Therapist`,`Mental Health Professional`,`Artist`,`Photographer`]},
    {ESFP:'ESFPs are generally born to be in front of others. They love having the spotlight and enjoy learning and sharing what they learn with others. They are warm, generous, friendly, lively and fun. They are also sympathetic and concerned with the well-being of others. While ESFPs are at home on stage, they also enjoy any job with excitement and diversity. They are particularly happy when they’re socializing. Examples of careers that are ideal for ESFPs are:',jobs:[`Event Planner`,`Professional Entertainer`,`Sales Representative`,`Cosmetologist`,`Flight Attendant`,`Tour Guide`]},
    {ENFP:'The ENFP personality type is highly individualistic. These people strive towards creating their own looks, methods, actions, habits and ideas. They dislike being forced to live inside a box. They have a strong intuitive nature and like being around others. They are highly perceptive and operate from their feelings most of the time. ENFPs are drawn to more casual work environments. They are motivated more by goals that they are passionate about rather than money. Careers that are ideal for ENFPs include:',jobs:[`Reporter or News Anchor`,`Editor`,`Musician`,`Product Manager`,`Elementary School Teacher`,`Personal Trainer`,`Social Worker`]},
    {ESTP:'ESTPs have a strong need for social interaction, logical processes and reasoning, feelings and emotions and freedom. ESTPs are logical thinkers and enjoy using data and patterns to make decisions. They naturally seek out new opportunities and are passionate about their pursuits. This often leads them towards success and new opportunities. They have the diligence and innovation needed to keep up with challenges but a routine can quickly become tiresome. Careers that are ideal for ESTPs include:',jobs:[`Firefighter`,`Paramedic`,`Creative Director`,`Project Coordinator`,`Construction Manager`]},
    {ESTJ:'ESTJs are organized, dedicated, honest, dignified, traditional and believers in doing what they believe is right and socially acceptable. They often take the role of leader and people look to them for guidance and counsel. ESTJs are methodical, organized, dedicated, reliable and direct. They excel at following set procedures closely and adhering to guidelines. They’re dedicated and hardworking. Guiding others is something they feel strongly about. Careers that are ideal for ESTJs include:',jobs:[`Judge`,`Coach`,`Financial Officer`,`Hotel Manager`,`Real Estate Agent`]},
    {ENTJ:'ENTJs focus on external aspects and deal with things rationally and logically. They are natural leaders and enjoy being in charge. They see challenges as opportunities to push themselves. They are naturally gifted for leadership, making decisions and considering options quickly but carefully. They are quick to identify inefficiencies and develop solutions for problems. They value goal-setting, planning and organization and use their drive and rational thinking to achieve goals by whatever means necessary. They are generally charismatic and confident and can motivate others behind a common goal. Some careers ideal for this personality type are:',jobs:[`Business Administrator`,`Public Relations Specialist`,`Mechanical Engineer`,`Judge`,`Construction Manager`,`Astronomer`]},
    {INTP:'INTPs are generally the most logical-minded of the personality types. They love patterns, are quick to notice discrepancies and have a strong ability to read people. They aren’t typically interested in practical daily activities but instead enjoy environments where they can express creativity. They love coming up with insightful and unbiased solutions to problems. In the workplace, INTPs are great problem-solvers and are extremely helpful when business issues arise. They are often highly creative and intelligent and desire local answers to questions or problems that arise. Careers ideal for INTPs include:',jobs:[`Composer`,`Professor`,`Writer`,`Producer`,`Biomedical Engineer`,`Marketing Consultant`,`Web Developer`]},
    {ISFJ:'ISFJs are philanthropists who enjoy giving back and returning generosity with even more generosity. They value harmony and cooperation, are sensitive to others’ feelings and are warm and kind-hearted. ISFJs have a strong work ethic and are dedicated to their duties. They are conscientious and methodical workers and strive to create and maintain orderly environments. Ideal careers for this personality type are:',jobs:[`Accountant`,`Financial Clerk`,`Bank Teller`,`Research Analyst`,`Accountant`,`Administrative Manager`,`Photographer`,`Elementary Teacher`]},
    {ENTP:'ENTPs don’t usually enjoy small talk or thrive in social situations. They are intelligent and knowledgeable and have a need to be constantly stimulated mentally. They are logical, rational and objective. ENTPs prefer to focus on big ideas and resist repetitive tasks and routines. They prefer conceptual work and problem-solving. ENTPs are ideal for entrepreneurial thinking and find working within hierarchies difficult. Ideal careers for ENTP personalities include:',jobs:[`Attorney`,`Copywriter`,`Financial Planner`,`Psychologist`,`Systems Analyst`,`Creative Director`,`Operations Specialist`]},
    {ISFP:'ISFPs are introverts who don’t actually appear to be introverts. They are warm, approachable and friendly, fun to be with and spontaneous. They want to live life to the fullest and embrace the present. They see the value of meeting people who enjoy exploring things and discovering new experiences. In the workplace, they prefer autonomy and completing tasks on their own schedules. Harmony is important to them and they prefer to avoid confrontation and keep their opinions to themselves. Potential careers for ISFP personalities include:',jobs:[`Bookkeeper`,`Social Media Manager`,`Optician`,`Veterinarian`,`Archeologist`,`Social Worker`,`Occupational Therapist`]}
];


function writePdf(){
    doc.setFontSize(40);
    doc.text(`${document.querySelector('#student-name').value} - ${document.querySelector('select').value}`, 10, 20)
    /*doc.setFontSize(14);
    doc.text(``, 10, 30);
    doc.save(`${document.querySelector('#student-name').value}.pdf`)*/
    detectTemp();
}

function detectTemp(){
    let temp = document.querySelector('select').value;
    for(var i=0; i<tempraments.length;i++){
        var allKeys = Object.keys(tempraments[i]);
        let words = '';
        if(allKeys[0] == temp){
            switch(temp){
                case 'ISTJ':
                    words = tempraments[i].ISTJ;
                break;
                case 'INFJ':
                    words = tempraments[i].INFJ;
                break;
                case 'INTJ':
                    words = tempraments[i].INTJ;
                break;
                case 'ENFJ':
                    words = tempraments[i].ENFJ;
                break;
                case 'ISTP':
                    words = tempraments[i].ISTP;
                break;
                case 'ESFJ':
                    words = tempraments[i].ESFJ;
                break;
                case 'INFP':
                    words = tempraments[i].INFP;
                break;
                case 'ESFP':
                    words = tempraments[i].ESFP;
                break;
                case 'ENFP':
                    words = tempraments[i].ENFP;
                break;
                case 'ESTP':
                    words = tempraments[i].ESTP;
                break;
                case 'ESTJ':
                    words = tempraments[i].ESTJ;
                break;
                case 'ENTJ':
                    words = tempraments[i].ENTJ;
                break;
                case 'INTP':
                    words = tempraments[i].INTP;
                break;
                case 'ISFJ':
                    words = tempraments[i].ISFJ;
                break;
                case 'ENTP':
                    words = tempraments[i].ENTP;
                break;
                case 'ISFP':
                    words = tempraments[i].ISFP;
                break;
            }
            doc.setFontSize(16);
            var lMargin=10;
            var rMargin=10;
            var pdfInMM=210;
            var lines =doc.splitTextToSize(words, (pdfInMM-lMargin-rMargin));
            doc.text(lMargin,30,lines);
            let nums = 130;
            let nums1 = 1;
            doc.setFontSize(27);
            doc.text('Job Oppourtunities...',10, 100)
            doc.setFontSize(20);
            tempraments[i].jobs.forEach((e)=>{
                doc.text(`${nums1}.${e}\n` , 10, nums);
                nums1++;
                nums+=10;
            })
	    doc.autoPrint()
            doc.save(`${document.querySelector('#student-name').value}.pdf`)
        }
        window.open();
    }
}

$('#submit').click(function(){
    writePdf();
})

