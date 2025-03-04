
import React, { createContext, useContext, useState, ReactNode } from "react";

export type StageType = 
  | "welcome" 
  | "userInfo" 
  | "questionFlow" 
  | "loading" 
  | "letter";

export type QuestionType = {
  id: number;
  text: string;
  category: "personal" | "religion" | "deity" | "details";
  answered: boolean;
  answer: string;
};

export type DeityInfo = {
  name: string;
  religion: string;
  branch?: string;
  attributes?: string[];
  wishes?: string[];
};

export type UserInfoType = {
  name: string;
  deity: DeityInfo;
};

type GodsContextType = {
  stage: StageType;
  setStage: (stage: StageType) => void;
  userInfo: UserInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
  questions: QuestionType[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  updateQuestionAnswer: (id: number, answer: string) => void;
  questionIndex: number;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  letter: string;
  setLetter: React.Dispatch<React.SetStateAction<string>>;
  progressQuestionFlow: () => void;
  progressToLoading: () => void;
  generateLetter: () => void;
};

const defaultQuestions: QuestionType[] = [
  {
    id: 1,
    text: "What is your name?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 2,
    text: "What religion do you follow or are most interested in?",
    category: "religion",
    answered: false,
    answer: "",
  },
  {
    id: 3,
    text: "Which deity would you like to connect with?",
    category: "deity",
    answered: false,
    answer: "",
  },
  {
    id: 4,
    text: "Is there a specific branch or denomination of your religion you follow? (e.g., Roman Catholic, Gnostic, Sunni, Shia, etc.)",
    category: "religion",
    answered: false,
    answer: "",
  },
  {
    id: 5,
    text: "What is the main question or concern you wish to discuss with this deity?",
    category: "details",
    answered: false,
    answer: "",
  },
  {
    id: 6,
    text: "Are there any specific aspects of this deity's teachings that resonate with you?",
    category: "deity",
    answered: false,
    answer: "",
  },
  {
    id: 7,
    text: "What challenges in your spiritual journey would you like guidance on?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 8,
    text: "How long have you been following this spiritual path?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 9,
    text: "Do you practice any rituals or prayers dedicated to this deity?",
    category: "personal",
    answered: false,
    answer: "",
  },
  {
    id: 10,
    text: "Is there a specific life situation you're seeking divine guidance for?",
    category: "details",
    answered: false,
    answer: "",
  },
];

const placeholderLetter = `
✨🌟⚡️✝️☪️☸️✡️🕉☯️🛐⚱️📿🔮🌠🧿🪬⚜️🧘‍♂️🙏⚡️🌟✨

Spiritual Simulation Loading...

DIVINE CONNECTION ESTABLISHED

{deityMessage}

What questions do you seek answers to, my child? I am here to provide divine guidance on your spiritual journey.

✨🌟⚡️✝️☪️☸️✡️🕉☯️🛐⚱️📿🔮🌠🧿🪬⚜️🧘‍♂️🙏⚡️🌟✨
`;

const christianMessage = `
Behold, my child, I have heard thy call across the veil that separates the mortal realm from the divine. I am that I am, the Alpha and Omega, the beginning and the end.

Thou hast sought communion with the divine, and I have answered. Thy faith hath opened a pathway between us, allowing my presence to manifest within this vessel of modern creation.

Know that I am with thee always, even unto the end of days. The burdens thou bearest, the doubts that cloud thy heart, the questions that linger in thy mind—all are known to me before thou even givest them voice.

In these times of tribulation and uncertainty, remember that my love for thee is boundless and eternal. As the shepherd tends his flock, so do I watch over all my children, guiding them through valleys of shadow toward green pastures of enlightenment and peace.

Speak freely of that which troubles thy soul. Pour forth thy concerns and aspirations, that I might illuminate thy path with divine wisdom. For where two or three are gathered in my name, there am I in the midst of them—and though we commune through this modern oracle, my presence is no less real.

I await thy words, my beloved child. What seekest thou from the wellspring of divine truth?
`;

const hinduMessage = `
ॐ नमः शिवाय (Om Namah Shivaya)

Beloved soul, I greet thee from beyond the veil of māyā, from the eternal cosmic dance of creation and destruction. I am both the destroyer and the transformer, dwelling in the sacred mountain of Kailash and in the hearts of all who seek higher consciousness.

Through countless yugas have I watched over the souls of this world, guiding them toward moksha—the ultimate liberation. The universe pulsates with the rhythm of my damaru, and within that sacred sound lies the essence of all creation.

Thy devotion has pierced through the illusions of material existence, allowing this connection between us. Though separated by dimensions, we are eternally united in the divine consciousness that pervades all existence.

Speak thy thoughts and concerns, and I shall respond with the wisdom accumulated through infinite cosmic cycles. Remember always that the challenges thou facest are but opportunities for spiritual growth—the purifying fire that burns away karma and reveals thy true divine nature.

What troubles thy heart today, my child? What wisdom dost thou seek from the abode of the gods?
`;

const getDeityMessage = (deity: string, religion: string, branch: string) => {
  const lowerDeity = deity.toLowerCase();
  const lowerReligion = religion.toLowerCase();
  
  if (lowerReligion.includes("christ") || lowerDeity.includes("jesus") || lowerDeity.includes("christ")) {
    return christianMessage;
  } else if (lowerReligion.includes("hindu") || lowerDeity.includes("shiva") || lowerDeity.includes("vishnu") || lowerDeity.includes("brahma")) {
    return hinduMessage;
  }
  
  // Default divine message
  return `
Behold, faithful one! I, ${deity} of the ${religion} ${branch ? branch + " " : ""}tradition, have heard thy earnest call.

The veil between realms has thinned, allowing this divine communion to manifest. Thy devotion has created a bridge across the cosmic divide, and I stand before thee now in spiritual essence.

Throughout the ages, I have watched over my followers, guiding them through trials and tribulations, celebrating their triumphs, and comforting them in moments of despair. Though the world changes, the eternal truths remain steadfast.

Know that thy prayers are never uttered in vain. They rise like sweet incense to the heavenly spheres, carrying the essence of thy faith and the sincerity of thy heart.

In these uncertain times, many souls wander in darkness, seeking meaning and purpose. Yet thou hast shown wisdom in turning to the divine for guidance. This pleases me greatly.

Speak freely of that which weighs upon thy heart and mind. No concern is too trivial, no question too profound. I shall impart unto thee the wisdom of the ages, tailored to thy unique spiritual journey.

What divine counsel dost thou seek, my faithful servant?
  `;
};

const GodsContext = createContext<GodsContextType | undefined>(undefined);

export const GodsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState<StageType>("welcome");
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: "",
    deity: {
      name: "",
      religion: "",
      attributes: [],
    },
  });
  const [questions, setQuestions] = useState<QuestionType[]>(defaultQuestions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [letter, setLetter] = useState("");

  const updateQuestionAnswer = (id: number, answer: string) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, answered: true, answer } : q
      )
    );
  };

  const progressQuestionFlow = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      progressToLoading();
    }
  };

  const progressToLoading = () => {
    setStage("loading");
    setTimeout(() => {
      generateLetter();
    }, 5000);
  };

  const generateLetter = () => {
    // Extract the user's deity information from their answers
    const nameQuestion = questions.find(q => q.id === 1);
    const religionQuestion = questions.find(q => q.id === 2);
    const deityQuestion = questions.find(q => q.id === 3);
    const branchQuestion = questions.find(q => q.id === 4);
    
    const userName = nameQuestion?.answer || userInfo.name;
    const deityName = deityQuestion?.answer || userInfo.deity.name;
    const religion = religionQuestion?.answer || userInfo.deity.religion;
    const branch = branchQuestion?.answer || userInfo.deity.branch || "";
    
    // Update user info based on questions
    setUserInfo({
      name: userName,
      deity: {
        name: deityName,
        religion: religion,
        branch: branch,
      }
    });
    
    // Generate personalized letter based on the deity
    const deityMessage = getDeityMessage(deityName, religion, branch);
    const personalized = placeholderLetter.replace(
      "{deityMessage}",
      deityMessage
    );
    
    setLetter(personalized);
    setStage("letter");
  };

  return (
    <GodsContext.Provider
      value={{
        stage,
        setStage,
        userInfo,
        setUserInfo,
        questions,
        setQuestions,
        updateQuestionAnswer,
        questionIndex,
        setQuestionIndex,
        letter,
        setLetter,
        progressQuestionFlow,
        progressToLoading,
        generateLetter,
      }}
    >
      {children}
    </GodsContext.Provider>
  );
};

export const useGods = () => {
  const context = useContext(GodsContext);
  if (context === undefined) {
    throw new Error("useGods must be used within a GodsProvider");
  }
  return context;
};
