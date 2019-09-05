const mockTeam = [
	{
		name: "Mary Idomo",
		userName: "@Mary",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/marylyne/image/upload/v1566564607/Mary%20Idomo.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Ikechukwu Onu",
		userName: "@infokid",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/maxkdave/image/upload/v1566601511/ikechukwu_iz51mj.jpg", 
		contrib: "Handled UI design for donation page, provided SEO tags", 
		more: "https://maxkdave.github.io",
	},
	{
		name: "Muritala Muideen",
		userName: "@Muideen MURITALA",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/muideenam/image/upload/v1566579124/IMG_20171118_131857_wmq8gf.jpg", 
		contrib: "Handled about page's markup and styling",
		more: "https://muideenam.github.io/hng",
	},
	{
		name: "Ayobami Oguntolu",
		userName: "@Spark",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/amosspark/image/upload/c_scale,h_150,w_105/v1566521695/IMG_20180801_181800_chbhdg.png", 
		contrib: "Wrote article for landing page", 
		more: "",
	},
	{
		name: "Adedolapo Olayinka",
		userName: "@Adedolapo Olayinka",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Adetohun Ogunbowale",
		userName: "@Adetohun",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/adetohun/image/upload/v1566572879/ppmini.jpg", 
		contrib: "Created trello board for project management", 
		more: "https://adetohun.github.io/starthng/",
	},
	{
		name: "Abdulsalam Shuaib",
		userName: "@absallam",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/absallam/image/upload/c_scale,h_304,q_40/v1567512682/IMG_19vqhl_zvshp9.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Mbetobong Obot",
		userName: "@mbetobong",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/mbetobong/image/upload/v1567516251/Mbetobong_ysux0y.jpg", 
		contrib: "Provided content for mission and vision statement", 
		more: "https://adetohun.github.io/",
	},
	{
		name: "Oyelami Temidayo",
		userName: "@Temidayo Oyelami",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/temidayomary/image/upload/v1567524090/Temmy1_hi2q3v.jpg", 
		contrib: "Wrote review for getBarter app on PlayStore", 
		more: "",
	},
	{
		name: "Oluwatimilehin Idowu",
		userName: "@Timmix95",
		dept: "FRONT END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Chisom Mbama",
		userName: "@Chisom Mbama",
		dept: "FRONT END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Roland Decker",
		userName: "@roland",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/trill2b/image/upload/v1567439250/My%20Face/RolandDecker.jpg", 
		contrib: "Added donation page progress bar", 
		more: "https://rolanddecker.github.io/Roland-Decker/",
	},
	{
		name: "Onyeme Michael",
		userName: "@Mykel",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/dy18y8k1e/image/upload/v1567516703/cool-1_yrfcm5.jpg", 
		contrib: "", 
		more: "http://mykel7.github.io/",
	},
	{
		name: "Adeyemo Oyinade",
		userName: "@N",
		dept: "CONTENT",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Fabian Uzukwu",
		userName: "@Fabian",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/fabianuzukwu/image/upload/c_scale,h_160,w_160/v1566555460/l4oa3l4xh1nxlbaifwi4.png", 
		contrib: "Team leader, edited home page content and coordinated all git contributions", 
		more: "https://gallant-turing-51b0f2.netlify.com/",
	},
	{
		name: "Lumen Sheik",
		userName: "@denwia",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Olufemi Agbebi",
		userName: "@Femi A",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/olufemi/image/upload/v1567461327/Femi_New_tiny_v2wgyr.jpg", 
		contrib: "Managed deployment on GitHub pages", 
		more: "https://coderfemi.github.io/",
	},
	{
		name: "Frederick Damascus",
		userName: "@frede",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/freddykent/image/upload/v1567503053/Frederick_Damasus_a4qdrv.png", 
		contrib: "", 
		more: "",
	},
	{
		name: "Udoh Kindness",
		userName: "@Udh",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/dneibzbru/image/upload/v1566496713/1492781645981_a6z1l8.jpg", 
		contrib: "Supplied content for events and home page", 
		more: "https://tylersundae.github.io/",
	},
	{
		name: "Elisha Adewumni",
		userName: "@fortitude",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/fortitude/image/upload/v1567537823/imgonline-com-ua-CompressToSize-fT16XYO7AFZ8OUS_mlhb9y.jpg", 
		contrib: "Supplied content for some pages", 
		more: "https://thirsty-poitras-38d350.netlify.com/",
	},
	{
		name: "Mbah Chinedu",
		userName: "@Ned",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/dlp89agrm/image/upload/v1567527640/cloud2_pimpul.jpg", 
		contrib: "Followed up on project deliverables for UI/UX and Front end", 
		more: "https://nedlarry.github.io",
	},
	{
		name: "Ochuba Samuel",
		userName: "@esambooks",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/esambooks/image/upload/v1566525997/Screenshot_2019-08-23_2_samenstein_SamuelOchuba_Twitter_si0d2h.png",  
		contrib: "Worked on Website UI/UX, Made suggestion on features to be included", 
		more: "https://ochuba.github.io/HngTask2/",
	},
	{
		name: "Temitope Joan",
		userName: "@Temitope Joan",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/temitopeakangbe/image/upload/v1566573126/Image/Temitope_Joan_ldg66y.jpg", 
		contrib: "", 
		more: "https://temitopeakangbe.github.io/TemitopeJoan/temitope.html",
	},
	{
		name: "Edima Inwang",
		userName: "@Edima",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Omodo Kome",
		userName: "@Ego-Oyinbo",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/dqzvbxopb/image/upload/v1567641158/task/tsk_iyf0yr.jpg", 
		contrib: "Front end for login/registration page", 
		more: "",
	},
	{
		name: "Akwagha Linda",
		userName: "@linda",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/my-space-y/image/upload/v1567530406/qx95tg1lpfxar43cwwae.jpg",
		contrib: "", 
		more: "",
	},
	{
		name: "Henry Nnaji",
		userName: "@Woody",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/woodywiz/image/upload/v1567460872/My%20photos/henry_vym0yn.jpg", 
		contrib: "Helped with styling of events page", 
		more: "",
	},
	{
		name: "Oluwatosin Obalana",
		userName: "@Oluwatosin Obalana",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/oluwatosin17/image/upload/v1567523639/IMG_20170623_154041_1_yjskwo.jpg", 
		contrib: "Brain-stormed about pages and navigation", 
		more: "https://oluwatosin17.github.io/oluwatosinCV/",
	},
	{
		name: "Oghenekome Akaka",
		userName: "Kome",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/kome/image/upload/v1566507678/startng_mediaFiles/fireHead_whvvu9.jpg",
		contrib: "Participated in product testing", 
		more: "",
	},
	{
		name: "Sylvester Edobor",
		userName: "@drlovenature",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/drlovenature/image/upload/v1567590888/Screenshot_20190904_103847_n5tnqn.jpg", 
		contrib: "Supplied content for some pages", 
		more: "",
	},
	{
		name: "Dennis Etiwe",
		userName: "@Dwise",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/dwisedevcoder/image/upload/v1566553743/44672359_10156660302208704_1061180912969973760_n.jpg_tlxt90.jpg", 
		contrib: "Created content for about and index pages", 
		more: "https://dwisecodedev.github.io/mycv.html/",
	},
	{
		name: "Kingseley Umujeyan",
		userName: "@kuic",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/kuic/image/upload/v1566490915/startNg2019/kuic_jxb4la.jpg", 
		contrib: "Handled markup and styling of contact and event page", 
		more: "https://kuicpet.github.io/",
	},
	{
		name: "Abiodun Olushola",
		userName: "@Eshjay",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/dlqceb87c/image/upload/v1566503590/shola_grav_het1lf.jpg", 
		contrib: "", 
		more: "https://eshjay.github.io/StartNg/",
	},
	{
		name: "Ubong Udosen",
		userName: "@Ubong Udosen",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/kudosen/image/upload/c_scale,q_auto:eco,w_409/v1554358826/profile_picture.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Taiwo Sadiq",
		userName: "@Taiwo Sadiq",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/qodes/image/upload/v1567454672/personal/my_passport_mblk54.jpg", 
		contrib: "", 
		more: "https://tysod.github.io/Rochiqodes-cv",
	},
	{
		name: "Inemesit Friday",
		userName: "@Inemesit",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/inemesit/image/upload/v1567514282/Inemesit/my_photo1_ddqyxw.jpg", 
		contrib: "", 
		more: "https://inemesit1995.github.io",
	},
	{
		name: "Owolabi Bassit",
		userName: "@Bassit",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Boro Joseph",
		userName: "@Asylcreek",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/asylcreek/image/upload/v1567503710/Boro%20Omokugbo%20Joseph.jpg", 
		contrib: "Supplied content for some pages", 
		more: "https://asylcreek.github.io",
	},
	{
		name: "Nedu Robert",
		userName: "@nedu",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/dga2j4uiv/image/upload/c_limit,e_grayscale,q_auto:low,w_285/v1523892612/IMG_5484.jpg", 
		contrib: "Integrated Flutterwave into donation page and handled its front end",
		more: "https://nedu.netlify.com/nedu",
	},
	{
		name: "Ogunsola Oyindamola",
		userName: "@Damola",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Elijah Adeleke",
		userName: "@Elijah Leke",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/elijahleke/image/upload/v1567448171/START%20NG/Image_jj0juf.jpg", 
		contrib: "Handled UI/UX design for home page, led UI/UX team", 
		more: "https://elijahleke.github.io/startng/index.html",
	},
	{
		name: "Winifred Ekwunife",
		userName: "@Winifred",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "Handled UI/UX design for team page, edited home page", 
		more: "https://winnieefred.github.io/WinifredCV/",
	},
	{
		name: "Omovoiye Cynthia",
		userName: "@OmovoiyeCynthia",
		dept: "FRONT END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Tosin Akinnanu",
		userName: "@ripple",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Johnson Ubaezuonu",
		userName: "@Johnson",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/jaycodist/image/upload/v1566614126/Johnson_20140806_084938_ewxjhe.jpg", 
		contrib: "Handled markup and styling for index and team pages", 
		more: "https://jaycodist.github.io/",
	},
	{
		name: "Anwo-Ade Anuoluwapo",
		userName: "@Anu",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Bibirinbulu Aremieye",
		userName: "@Bibi Aremieye",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/bibi1989/image/upload/c_scale,w_100/v1566551283/bibi_eek592.jpg", 
		contrib: "", 
		more: "https://bibi198916.github.io/bibirinbulu-CV/",
	},
	{
		name: "Idowu Festus",
		userName: "@Idowu Festus",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/mcnoble/image/upload/v1566593070/StartNG/festus_g91ynv.webp", 
		contrib: "Assisted in the front end design", 
		more: "https://mcnoble1.github.io/startNG-Task1/Festus.html",
	},
	{
		name: "Adesanmi Adedayo",
		userName: "@Adesanmi Adedayo",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Suleiman Abdulshaqur",
		userName: "@HouseCat",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/housecat/image/upload/v1567552217/house/image_bgo2cc.jpg",
		contrib: "Assisted in front end design", 
		more: "https://suleimanabdulshaqur.github.io/",
	},
	{
		name: "Oludolapo Adelana",
		userName: "@Dolapo Adelana",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Aniema Edet",
		userName: "@Edet",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/dsdtie6xk/image/upload/v1567448955/f3voqf3mpfqbacq4tsi7.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Ogunbiyi Michael",
		userName: "@OgunbiyiMichael",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/ogunbiyimichael/image/upload/v1566673701/bro_michael1_ezbdzh.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Ufonabasi Umo",
		userName: "@Ufonabasi Umo",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/ufonumo/image/upload/v1566585776/IMG_20190123_131320_mccadv.jpg", 
		contrib: "Assisted with payment page", 
		more: "https://ufonumo.github.io/ufon-task-2/",
	},
	{
		name: "Precious Uwasi",
		userName: "@presh",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/dbmhtixbt/image/upload/c_scale,h_122/v1566729851/IMG-20190103-WA0001.jpg", 
		contrib: "", 
		more: "https://talk2presh.github.io/preciousCv/",
	},
	{
		name: "Lilian Anigbogu",
		userName: "@Lilian Anigbogu",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/zennylily/image/upload/v1567440125/Anigbogu_Lilian_PASSPORT_jfoegb.jpg", 
		contrib: "Handled front end team coordination", 
		more: "https://zennyaol.github.io/ZennyAOL..github.io/",
	},
	{
		name: "Asuliemen Isreal Efe",
		userName: "@asuliemen isreal",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/dxf9vzo5z/image/upload/v1566539625/prof-pic.jpg", 
		contrib: "Worked on payment page", 
		more: "",
	},
	{
		name: "Abdulraham Yusuf",
		userName: "@Abdulraham Yusuf",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/young-einstein/image/upload/v1567518168/passport_cjsegl.jpg", 
		contrib: "", 
		more: "https://young-einstein10.github.io/StartNG/",
	},
	{
		name: "Okpala Faith",
		userName: "@faithy",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/dhtxiw89g/image/upload/v1566647586/IMG_20180606_083511.jpg", 
		contrib: "", 
		more: "https://oluwafaith.github.io/",
	},
	{
		name: "Muhammad Zubairu",
		userName: "@MZ Ahmerd",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Clinton Mgbemene",
		userName: "@thisclinton",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/thisclinton/image/upload/v1567557640/My%20Uploads/IMG_0376_pzimeg.jpg", 
		contrib: "Handled the markup and styling of contact and event pages", 
		more: "",
	},
	{
		name: "Olanrewaju Odutayo",
		userName: "@Olanrewaju Odutayo",
		dept: "CONTENT",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Akinwunmi Akinbode",
		userName: "@peezykon",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/peezykon/image/upload/v1566649778/peezy_xjmzsq.jpg", 
		contrib: "", 
		more: "https://peezykon.github.io/hngresume/Akinwunmi.html",
	},
	{
		name: "Awoyemi Abayomi",
		userName: "@snoopymex",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/snoopyomex/image/upload/v1566588794/Snoopyomex.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Olaiya Shakiru",
		userName: "@olaiya",
		dept: "CONTENT",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Salami Saheed",
		userName: "@Salami Saheed",
		dept: "FRONT END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Ayo Onamusi",
		userName: "@Ayo Onams",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/onamusia/image/upload/v1567605657/Screenshot_2019-09-04_at_14.18.06_rap7kt.png", 
		contrib: "Worked on payment confirmation/failure pages", 
		more: "",
	},
	{
		name: "Akintunde Temitope",
		userName: "@Akintunde Temitope",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/topsy11/image/upload/c_scale,w_200/v1566550383/IMG_20181225_131431_546_zccwoz.jpg",
		contrib: "Assisted in the content for event page", 
		more: "https://topsy111.github.io/topsynew/",
	},
	{
		name: "Edem Essang",
		userName: "@Edemoski",
		dept: "FRONT END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Nde Theresa",
		userName: "@Theresa Nde",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/dzflnjyii/image/upload/v1567632141/mee_yedo3u.jpg", 
		contrib: "Coordinated the completion of the team spreadsheet for team page content", 
		more: "",
	},
	{
		name: "Shittu Toheebah",
		userName: "@Toheebah",
		dept: "UI/UX",
		profilePic: "https://res.cloudinary.com/topsy11/image/upload/c_scale,w_200/v1566550383/IMG_20181225_131431_546_zccwoz.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Nasrullah Olajide",
		userName: "@Nasrullah Olajide",
		dept: "CONTENT",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Ego Ugwu",
		userName: "@ego",
		dept: "CONTENT",
		profilePic: "https://res.cloudinary.com/partypack/image/upload/ar_1:1,b_rgb:ffffff,bo_5px_solid_rgb:e9f074,c_fill,g_auto,r_max,w_400/v1567539703/egougwu_ugqftf.jpg", 
		contrib: "Supplied content for some pages", 
		more: "https://egocious.github.io/egougwu/",
	},
	{
		name: "Sinmiloluwa Sobogun",
		userName: "@sinmi",
		dept: "CONTENT",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Jeffrey Akhidenor",
		userName: "@Denor",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/denor/image/upload/v1567598892/my%20pix/IMG_8ubwgc_zxg4sd.jpg", 
		contrib: "Handled project monitoring", 
		more: "https://denor07.github.io/",
	},
	{
		name: "Azeez Rizqah",
		userName: "@Rizqah",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Leonard Ugorji",
		userName: "@LeoNuch",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Ajayi Oluwatomisin",
		userName: "@Ajayi Oluwatomisin",
		dept: "BACK END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Okoro Sandra",
		userName: "@sandie",
		dept: "CONTENT",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Mubarak Aderogba",
		userName: "@mubarak",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/mubi417/image/upload/v1567591243/p2xwjdx268umkgvf2sa2.jpg", 
		contrib: "", 
		more: "https://mubi417.github.io/My-CV/",
	},
	{
		name: "Peace Onyekachi",
		userName: "@Newchassis",
		dept: "FRONT END",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Ogunrinola Oluwaseyi",
		userName: "@seyi",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Owoso Oluwasanmi",
		userName: "@sanmi",
		dept: "BACK END",
		profilePic: "https://res.cloudinary.com/dy3p1fi4d/image/upload/v1567538927/img_ptdg8d.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Jude Ogbe",
		userName: "@Jude Ogbe",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Odo Joshua",
		userName: "@y3n0m",
		dept: "FRONT END",
		profilePic: "https://res.cloudinary.com/aiteknologies/image/upload/v1567075888/42642168_10213181963085855_5356023062212902912_n_exajb8.jpg", 
		contrib: "", 
		more: "",
	},
	{
		name: "Tobiloba Orekoya",
		userName: "@Tobilobaorek",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", 
		more: "",
	},
	{
		name: "Maximillian Ikechukwu",
		userName: "@Milly",
		dept: "UI/UX",
		profilePic: null, 
		contrib: "", more: "",
	},
];

const getRandomContribution = item =>
{
	const picker = 
	{
		"FRONT END": ["Assisted with front end for some pages", "Handled front end edits on some pages"],
		"BACK END": ["Brain-stormed about Rave integration", "Tested Rave implementation"],
		"CONTENT": ["Supplied content for some pages", "Assisted with feature testing"],
		"UI/UX": ["Edited UI/UX designs for some pages", "Assisted with UI/UX design of some pages"],
	};
	return item.name[item.name.length - 1] > "M" ? picker[item.dept][0] : picker[item.dept][1];
}

const fillGrid = arr =>
{
	const grid = document.getElementById("team-grid");
	grid.style.display = "grid";
	while(grid.firstChild)
		grid.removeChild(grid.firstChild);
	
	for (let item of arr.filter(a => a.more.length).sort((a, b) => a.name.localeCompare(b.name)))
	{
		let container = document.createElement("div");
		container.className = "team-member-div";

		let imgDiv = document.createElement("div");
		imgDiv.className = "profile-pic";
		let img = document.createElement("img");
		img.src = item.profilePic || "images/profilepic.png";
		img.height = 100;
		item.width = 100;
		img.alt = "Team member pic";
		imgDiv.appendChild(img);

		let fullName = document.createElement("div");
		fullName.appendChild(document.createTextNode(item.name));
		fullName.className = "full-name";
		let userName = document.createElement("div");
		userName.appendChild(document.createTextNode(item.userName));
		userName.className = "user-name";

		let contrib = document.createElement("div");
		contrib.appendChild(document.createTextNode(`* ${item.contrib.length ? 
			item.contrib : getRandomContribution(item)}`))
		contrib.className = "contribution";

		let more = document.createElement('a');
		more.appendChild(document.createTextNode("More details"));
		more.href = item.more;
		more.title = "See details about this team member";
		more.target = item.more.length ? "_blank" : "";
		more.className = "more-details";

		let dept = document.createElement("div");
		dept.appendChild(document.createTextNode(item.dept));
		dept.className = "dept";

		container.appendChild(imgDiv);
		container.appendChild(fullName);
		container.appendChild(userName);
		container.appendChild(more);
		container.appendChild(contrib);
		container.appendChild(dept);
		grid.appendChild(container);
	}
	if (grid.childNodes.length < 1)
	{
		let p = document.createElement("p");
		p.className = "no-matches";
		p.appendChild(document.createTextNode("Sorry. No such member in selected department"))
		grid.style.display = "block";
		grid.appendChild(p);
	}
};

document.querySelector("select").addEventListener("change", () =>
{
	filter();
});

document.querySelector("#search").addEventListener("input", () =>
{
	filter();
})

const filter = () =>
{
	const select = document.querySelector("select");
	const search = document.querySelector("#search").value.toLowerCase();
	let filter = "ALL", filtered;
	switch (select.value)
	{
		case "1": filter = "BACK END"; break;
		case "2": filter = "CONTENT"; break;
		case "3": filter = "FRONT END"; break;
		case "4": filter = "UI/UX"; break;
	}
	if (filter === "ALL") 
		filtered = mockTeam;
	else 
		filtered = mockTeam.filter(guy => guy.dept === filter)

	fillGrid(search ? filtered.filter(guy => 
		guy.name.toLowerCase().includes(search) || guy.userName.toLowerCase().includes(search)) : filtered);

}

fillGrid(mockTeam);

