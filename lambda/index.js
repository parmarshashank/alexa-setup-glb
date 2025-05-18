/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'स्वागत है! मैं GL बजाज एडमिशन डेस्क हूं। आप मुझसे कॉलेज के बारे में कोई भी जानकारी पूछ सकते हैं।' :
            'Welcome! I am GL Bajaj Admission Desk. You can ask me any information about the college.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ? 
            'नमस्ते! मैं GL बजाज एडमिशन डेस्क हूं। मैं आपकी कैसे मदद कर सकती हूं?' :
            'Hello! I am GL Bajaj Admission Desk. How can I help you?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CoursesOfferedIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CoursesOfferedIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे कॉलेज में बी.टेक, एमबीए, एमसीए और अन्य पाठ्यक्रम उपलब्ध हैं। आप हमारी वेबसाइट पर सभी पाठ्यक्रमों की जानकारी प्राप्त कर सकते हैं।' :
            'We offer B.Tech, MBA, MCA and other courses. You can find detailed information about all courses on our website.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const FeesStructureIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FeesStructureIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास विभिन्न पाठ्यक्रमों के लिए अलग-अलग फीस संरचना है। कृपया हम https://www.glbitm.orgारी वेबसाइट पर जाएं या एडमिशन ऑफिस से संपर्क करें।' :
            'We have different fee structures for different courses. Please visit our website https://www.glbitm.org or contact the admission office.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ScholarshipsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ScholarshipsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास AKTU छात्र वृत्ति योजना के अलावा सभी के लिए मेरिट आधारित योजना और एमबीए के लिए लड़कियों की छात्रवृत्ति है। एमबीए की लड़कियों के लिए 25% की छात्रवृत्ति उपलब्ध है।' :
            'Apart from AKTU Chhatra vritti scheme, we have merit-based scheme for all and Girl scholarship for MBA. A scholarship of 25% of the tuition fee is there for MBA aspirant girl candidates.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HostelFacilitiesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HostelFacilitiesIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास कैंपस में हॉस्टल सुविधा है जिसमें एसी और नॉन-एसी कमरे ट्विन शेयरिंग बेसिस पर उपलब्ध हैं। इसमें लॉन्ड्री, जिम, वाईफाई, सीसीटीवी, ठंडा/गर्म पानी की सुविधा आदि शामिल हैं।' :
            'Yes, we have in Campus Hostel facility with AC and Non-AC Rooms on Twin Sharing Basis, supported with Laundry, Gym, Wi-Fi, CCTV, Cold/Hot water facility, etc.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const TransportationIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TransportationIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास अपनी खुद की बसों का अच्छा बेड़ा Delhi-NCR के सभी प्रमुख स्थानों को कवर करता है।' :
            'Yes, we have a good fleet of our own Buses which covers all prominent places of Delhi-NCR.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PlacementsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlacementsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'इस वर्ष 300 से अधिक कंपनियों ने कैंपस प्लेसमेंट किया है। प्लेसमेंट 70% से अधिक रहा है। औसत पैकेज 5.75 लाख रुपये है। अधिकतम पैकेज भारतीय स्थान पर 67 लाख रुपये प्रति वर्ष है।' :
            'More than 300 companies had their campus this year. The placement has been more than 70% so far. The average package is Rs. 5.75 L. The maximum package is Rs. 67 Lakhs per annum in Indian location.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const FacultyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FacultyIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास प्रतिष्ठित संस्थानों के अनुभवी संकाय सदस्य हैं जिनके पास अपने-अपने विशेषज्ञता क्षेत्रों में विशेषज्ञता है।' :
            'We have experienced faculty members from renowned Institutions having expertise in their respective specializations.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const LabsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LabsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास आधुनिक लैब्स हैं जिनमें कंप्यूटर लैब, रोबोटिक्स लैब और अन्य विशेष लैब शामिल हैं। GL बजाज के पास NVidia ADX100 सर्वर है और सभी छात्र इसका उपयोग करने के हकदार हैं।' :
            'Yes, we have modern labs including computer labs, robotics labs, and other specialized labs. GL Bajaj has NVidia ADX100 server and all students are entitled for its use.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const LibraryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LibraryIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारी लाइब्रेरी में 30,000 से अधिक पुस्तकें हैं और डिजिटल लाइब्रेरी, समाचार पत्र, नॉन-फिक्शन पुस्तकें, ई-जर्नल/प्रिंट जर्नल्स उपलब्ध हैं। प्लेजरिज्म चेकर (टर्निटिन) भी उपलब्ध है।' :
            'We have more than 30,000 books supported with Digital Library, Newspapers, Non-fiction books, E-Journals/Print Journals. We also have a plagiarism checker (Turnitin).';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SportsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SportsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास इंडोर सुविधाएं जैसे कैरम, टेबल टेनिस, शतरंज आदि हैं। आउटडोर के लिए फुटबॉल, वॉलीबॉल, बास्केटबॉल, क्रिकेट आदि की सुविधा है।' :
            'We have indoor facilities like carrom, Table Tennis, chess etc. For outdoor we have Football, volleyball, basketball, cricket etc.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ClubsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ClubsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास सांस्कृतिक क्लब, तकनीकी क्लब, खेल क्लब, सामाजिक क्लब और कई अन्य छात्र क्लब हैं। CSI और IEEE प्रमुख पेशेवर सोसायटी हैं।' :
            'We have students clubs for Cultural Club, Technical Clubs, Sports Club, Social Clubs, and many more. CSI and IEEE are the major professional societies.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const EventsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EventsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे कॉलेज में विभिन्न प्रकार के इवेंट्स होते हैं। हमने सुखविंदर सिंह, ट्रैपैक्स, माधवस जैसे सेलिब्रिटीज को भी बुलाया है।' :
            'We have various events in our college. We have had celebrities like Sukhwinder Singh, Trapax, Shreya Ghoshal, Madhvas etc.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CampusLifeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CampusLifeIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे कैंपस में छात्रों को शैक्षणिक गतिविधियों के अलावा भी देखभाल की जाती है। एक-से-एक मेंटरिंग सत्र, प्रतियोगिताएं, हैकाथॉन, इंटर्नशिप, ग्रीष्मकालीन परियोजनाएं आदि आयोजित की जाती हैं।' :
            'Students are taken care of beyond academics through one-to-one mentoring sessions, competitions, hackathons, internships, summer projects, and more.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const LocationIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LocationIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारा कॉलेज ग्रेटर नोएडा में स्थित है, नॉलेज पार्क 3 में। यह परी चौक के पास है।' :
            'Our college is located in Greater Noida, at Knowledge Park III. It is near Pari Chowk.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const ContactDetailsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ContactDetailsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'आप हमारी वेबसाइट https://www.glbitm.org/ पर जा सकते हैं या एडमिशन ऑफिस से संपर्क कर सकते हैं।' :
            'You can visit our website  https://www.glbitm.org/ or contact the admission office.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CafeteriaMenuIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CafeteriaMenuIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, कैफे कैंपस में एक मजेदार जगह है। यहां विभिन्न प्रकार के भोजन विकल्प उपलब्ध हैं।' :
            'Yes, the cafe is a fun place at campus. Various food options are available here.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ScholarshipDetailsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ScholarshipDetailsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास AKTU छात्र वृत्ति योजना के अलावा सभी के लिए मेरिट आधारित योजना और एमबीए के लिए लड़कियों की छात्रवृत्ति है। एमबीए की लड़कियों के लिए 25% की छात्रवृत्ति उपलब्ध है।' :
            'Apart from AKTU Chhatra vritti scheme, we have merit-based scheme for all and Girl scholarship for MBA. A scholarship of 25% of the tuition fee is there for MBA aspirant girl candidates.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const EducationLoanIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EducationLoanIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, आप अपनी पसंद के किसी भी बैंक से लोन ले सकते हैं।' :
            'Yes, You can have a loan from any bank of your choice.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PlacementStatsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlacementStatsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'इस वर्ष 300 से अधिक कंपनियों ने कैंपस प्लेसमेंट किया है। प्लेसमेंट 70% से अधिक रहा है। औसत पैकेज 5.75 लाख रुपये है। अधिकतम पैकेज भारतीय स्थान पर 67 लाख रुपये प्रति वर्ष है।' :
            'More than 300 companies had their campus this year. The placement has been more than 70% so far. The average package is Rs. 5.75 L. The maximum package is Rs. 67 Lakhs per annum in Indian location.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ClassroomFacilitiesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ClassroomFacilitiesIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, हमारे पास एसी क्लासरूम्स हैं और सभी क्लासरूम्स आईसीटी से सुसज्जित हैं।' :
            'Yes, we have AC classrooms and all classrooms are ICT enabled.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const StudentSupportIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StudentSupportIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हम छात्रों को शैक्षणिक गतिविधियों के अलावा भी देखभाल करते हैं। एक-से-एक मेंटरिंग सत्र, प्रतियोगिताएं, हैकाथॉन, इंटर्नशिप, ग्रीष्मकालीन परियोजनाएं आदि आयोजित की जाती हैं। हमारे पास एक मनोवैज्ञानिक काउंसलर भी है।' :
            'We take care of students beyond academics through one-to-one mentoring sessions, competitions, hackathons, internships, summer projects, and more. We also have a psychological counselor on board.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const InnovationIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InnovationIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'इंस्टिट्यूट इनोवेशन काउंसिल कॉलेज की गतिविधियों का एक प्रमुख हिस्सा है। सभी सरकारी योजनाओं के अलावा, GL बजाज प्रबंधन द्वारा उद्यमिता के लिए 2 करोड़ रुपये का सीड फंडिंग आवंटित किया गया है।' :
            'Institute Innovation Council is a major part of college activities. Apart from all government schemes, A seed funding of Rs.2 crore is earmarked for entrepreneurship by the GL Bajaj management.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ComputingFacilitiesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComputingFacilitiesIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, GL बजाज के पास NVidia ADX100 सर्वर है और सभी छात्र इसका उपयोग करने के हकदार हैं।' :
            'Yes, GL Bajaj has NVidia ADX100 server and all students are entitled for its use.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CommunicationLabIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CommunicationLabIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हमारे पास छात्रों की संचार कौशल में सुधार के लिए एक समर्पित संचार प्रयोगशाला है।' :
            'We have a dedicated communication lab to help students improve their communication skills.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PlagiarismIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlagiarismIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, लाइब्रेरी में एक प्लेजरिज्म चेकर (टर्निटिन) उपलब्ध है।' :
            'Yes, the library has a plagiarism checker (Turnitin).';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'आप मुझसे कॉलेज के बारे में कोई भी जानकारी पूछ सकते हैं, जैसे पाठ्यक्रम, फीस, छात्रवृत्ति, हॉस्टल, प्लेसमेंट आदि।' :
            'You can ask me any information about the college, such as courses, fees, scholarships, hostel, placements, etc.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'अलविदा! आपका दिन शुभ हो।' :
            'Goodbye! Have a nice day.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'क्षमा करें, मैं आपकी बात नहीं समझ पाई। कृपया दोबारा पूछें।' :
            'Sorry, I don\'t understand that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'क्षमा करें, कुछ त्रुटि हुई। कृपया दोबारा प्रयास करें।' :
            'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const TeachingPedagogyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TeachingPedagogyIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'कक्षा शिक्षण, प्रयोगशालाएं, ट्यूटोरियल, असाइनमेंट, औद्योगिक यात्राएं, सेमिनार, वेबिनार, प्रोजेक्ट्स, आइडिएशन, हैकाथॉन और कई और तरीके हैं।' :
            'Classrooms teaching, labs, tutorials, assignments, industrial visits, seminars, webinars, projects, ideation, hackathon and many more ways';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const NEPComplianceIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NEPComplianceIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, कॉलेज NEP और AICTE और संबद्ध विश्वविद्यालय (AKTU) के सभी दिशानिर्देशों का पालन करता है।' :
            'Yes, the college conforms to NEP and all the guidelines of AICTE and the affiliating university (AKTU)';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const AttendanceRequirementIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AttendanceRequirementIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'AKTU के अनुसार, विश्वविद्यालय परीक्षाओं में बैठने के लिए न्यूनतम 75% उपस्थिति आवश्यक है।' :
            'As per AKTU, a minimum of 75% attendance is required to write the university exams';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const WomenSafetyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'WomenSafetyIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'कैंपस में महिलाओं की सुरक्षा और संवेदनशीलता का ध्यान रखने के लिए एक मजबूत महिला प्रकोष्ठ है।' :
            'A strong women cell is there to take care of the safety and sensitivity of women in campus.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HandicappedFriendlyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HandicappedFriendlyIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, विशेष देखभाल के लिए लिफ्ट और रैंप मौजूद हैं।' :
            'Yes, the lift and ramps are in place to take special care';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const ParentCommunicationIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ParentCommunicationIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'ईमेल और पत्रों के माध्यम से माता-पिता के साथ नियमित संचार बनाए रखा जाता है।' :
            'Regular communication with parents is maintained by email and letters';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const UniformPolicyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'UniformPolicyIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां, यूनिफॉर्म कैंपस में अनुशासन का हिस्सा है।' :
            'Yes, The Uniform is part of discipline in campus.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CompetitionsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CompetitionsIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'चाहे वह खेल/सांस्कृतिक/अनुसंधान या नवाचार हो, हम छात्रों को प्रमुख राष्ट्रीय कार्यक्रमों में भेजते हैं।' :
            'Let it be sports/ cultural/ research or innovation, we send the students to major national events';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PlacementPreparationIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlacementPreparationIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'हां। दूसरे, तीसरे और अंतिम वर्ष के दौरान एप्टीट्यूड, लॉजिकल रीजनिंग और वर्बल एनालिसिस पर कड़ा प्रशिक्षण। इसके बाद रिज्यूमे राइटिंग, मॉक इंटरव्यू और इंटरव्यू की तैयारी होती है।' :
            'Yes. Rigorous training during 2nd, 3rd and final year on aptitude, logical reasoning, and verbal analysis. Followed by Resume writing, mock interviews, and interview preparation is there.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CorporateReadinessIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CorporateReadinessIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'गेस्ट एक्सपर्ट टॉक, एक्सपर्ट लेक्चर्स, एलुमनी कनेक्ट, इंडस्ट्री विजिट्स, MOOCs आदि का आयोजन करके।' :
            'By Conducting Guest Expert Talk, Expert Lectures, Alumni Connect, Industry Visits, MOOCs, etc.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const PlacementCompaniesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PlacementCompaniesIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'प्रमुख कंपनियां हैं: टाटा कंसल्टेंसी सर्विसेज, विप्रो, कैपजेमिनी, एक्सेंचर, कॉग्निजेंट, इन्फोसिस, एचसीएल टेक, आईबीएम।' :
            'Major companies include: Tata Consultancy Services, Wipro, Capgemini, Accenture, Cognizant, Infosys, HCLTech, IBM.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HostelCompulsoryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HostelCompulsoryIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'नहीं, छात्र स्थानीय रूप से अपने घर पर रह सकते हैं और आ-जा सकते हैं या हॉस्टल में रह सकते हैं या कैंपस के आसपास पीजी ले सकते हैं।' :
            'No, the students can stay at their home locally and commute or stay at hostels or take a PG around the campus';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MedicalFacilitiesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MedicalFacilitiesIntent';
    },
    handle(handlerInput) {
        const locale = Alexa.getLocale(handlerInput.requestEnvelope);
        const speakOutput = locale.startsWith('hi') ?
            'केडी मेडिकल कॉलेज उन्हीं प्रमोटर्स से बगल में है।' :
            'KD Medical College is next door from the same promoters';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        CoursesOfferedIntentHandler,
        FeesStructureIntentHandler,
        ScholarshipsIntentHandler,
        HostelFacilitiesIntentHandler,
        TransportationIntentHandler,
        PlacementsIntentHandler,
        FacultyIntentHandler,
        LabsIntentHandler,
        LibraryIntentHandler,
        SportsIntentHandler,
        ClubsIntentHandler,
        EventsIntentHandler,
        CampusLifeIntentHandler,
        LocationIntentHandler,
        ContactDetailsIntentHandler,
        CafeteriaMenuIntentHandler,
        ScholarshipDetailsIntentHandler,
        EducationLoanIntentHandler,
        PlacementStatsIntentHandler,
        ClassroomFacilitiesIntentHandler,
        StudentSupportIntentHandler,
        InnovationIntentHandler,
        ComputingFacilitiesIntentHandler,
        CommunicationLabIntentHandler,
        PlagiarismIntentHandler,
        TeachingPedagogyIntentHandler,
        NEPComplianceIntentHandler,
        AttendanceRequirementIntentHandler,
        WomenSafetyIntentHandler,
        HandicappedFriendlyIntentHandler,
        ParentCommunicationIntentHandler,
        UniformPolicyIntentHandler,
        CompetitionsIntentHandler,
        PlacementPreparationIntentHandler,
        CorporateReadinessIntentHandler,
        PlacementCompaniesIntentHandler,
        HostelCompulsoryIntentHandler,
        MedicalFacilitiesIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();