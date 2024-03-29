/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 */

var mplayer_song = [
/*分类1《慢慢时光》 */
[
	{
		
		"basic":true,
		"name":"慢慢时光",
		"singer":"无",
		"img":"http://p1.music.126.net/kKMnXwiA6PSBks-PTXHDng==/109951163247583125.jpg"
	},
	{
		"name":"Roses and Gold",
		"singer":"Robin Jackson",
		"time":"5:17",
		"img":"http://p2.music.126.net/ZnkkXSzM-OGDo6tJmB9Btg==/109951165797212871.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%85%A2%E6%85%A2%E6%97%B6%E5%85%89/Roses%20and%20gold.mp3",
		"lrc":"[00:00.000] 作词 : Robin Jackson[00:01.000] 作曲 : Robin Jackson[00:18.00]Moonshine[00:21.00]Oh Cover me in moonshine[00:25.40]And I will fill your cup with sentimental tales of raspberry wine[00:34.60]Cause I've been singing these cowboy tears since we came to an end[00:41.90]And Im writing snake oil poems and drinking alabast gin[00:49.30]Like a kite in the wind[00:53.50]I'm caught in a spin[00:58.00]I'm out on a limb[01:00.00][01:07.60]Sweet dreams[01:10.60]Oh Cover me in sweet dreams[01:15.00]And I will paint you a story of roses and gold and bittersweet things[01:23.40]It's time to say hello to these lonesome lullabies[01:32.00]And ride into the story of a new sunrise[01:39.00]May our river of tears[01:43.00]Wash away all our fears[01:47.60]Make it perfectly clear[01:50.70][01:57.00]Sweet pie[01:59.65]Oh Mama make me some sweet pie[02:05.00]Fill it with whatever makes it better and will cause these eyes to dry[02:13.00]And I pray to mother mary great spirit and the holy fool[02:21.00]That we listen to each other and take heed of the golden rule[02:28.60]That you do unto me[02:33.00]What I do unto you[02:37.00]And we both see it through[02:41.00][03:36.50]Soft grace[03:39.50]Oh Cover me in soft grace[03:44.00]And I'll fashion you a cup of forgiveness gypsum nettle and lace[03:52.00]Cause the poetry that you've put inside my heart[04:01.00]Rattles like a 57 engine about to start[04:08.00]Like a kite in the wind[04:12.00]Oh I'm caught in a spin[04:17.00]I'm out on a limb[04:19.30][04:26.00]Rain dance[04:29.00]Oh do a little rain dance[04:34.50]Call in the lightning and thunder to wash away this sorrowful trance[04:42.00]We'll bath in rose petal fire while the whill-o-whisps sing[04:51.00]And purify our eyes with water from the holy spring[04:57.00]And in the days that were old[05:01.00]May the story that's told[05:05.50]Be made of Roses and Gold[05:09.50]\n"
		/*"all_time"=this.AudioParam.allTime(),*/
	},
	{
		"name":"Molde Canticle (US Album)",
		"singer":"Sissel",
		"time":"3:26",
		"img":"http://p1.music.126.net/y38NnitFEyvfIe-VVxvhaw==/681697209232626.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Molde%20Canticle%20%28US%20Album%29.mp3",
		"lrc":"[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"云村的烟花",
		"singer":"邱有句，馒头",
		"time":"4:04",
		"img":"http://p2.music.126.net/-PrCo3tJyIAL-RHmD2EyYg==/109951163270163495.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E9%82%B1%E6%9C%89%E5%8F%A5%2C%E9%A6%92%E5%A4%B4%20-%20%E4%BA%91%E6%9D%91%E7%9A%84%E7%83%9F%E8%8A%B1.mp3",
		"lrc":"[ti:云村的烟花][ar:邱有句，馒头][al:云村的烟花][by:邱有句，馒头][offset:0][00:00.08]收录于专辑《The One.》中[00:02.00]纯音乐，请欣赏\n"
		/*"all_time"=this.AudioParam.allTime(),*/
	},
	{
		"name":"云村的风",
		"singer":"邱有句",
		"time":"3:52",
		"img":"http://p1.music.126.net/hzaCetDBfQ4cLqD3TXVTFw==/109951163070143402.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E4%BA%91%E6%9D%91%E7%9A%84%E9%A3%8E.mp3",
		"lrc":"[ti:云村的风][ar:邱有句][al:云村的风][by:][offset:0][00:00.08]收录于专辑《云村的风》中[00:03.10]纯音乐，请欣赏\n"
	},
	{
		"name":"云村的告别",
		"singer":"邱有句",
		"time":"4:25",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E4%BA%91%E6%9D%91%E7%9A%84%E5%91%8A%E5%88%AB.mp3",
		"img":"http://p2.music.126.net/UKAcaFmlW2GyGQu5z70fqw==/109951163082484910.jpg",
		"lrc":"[ti:云村的告别][ar:邱有句][al:云村的告别][by:邱有句][offset:0][00:00.08]收录于专辑《云村的告别》中[00:03:10]纯音乐，请欣赏\n"
	},
	{
		"name":"云村的时光",
		"singer":"邱有句,AirS 1991",
		"time":"2:42",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E4%BA%91%E6%9D%91%E7%9A%84%E6%97%B6%E5%85%89.mp3",
		"img":"http://p1.music.126.net/kKMnXwiA6PSBks-PTXHDng==/109951163247583125.jpg",
		"lrc":"[ti:云村的时光][ar:邱有句，AirS 1991][al:云村的时光][by:][offset:0][00:00.09]收录于专辑《云村的时光》中[00:00.77]纯音乐，请欣赏\n"
	},
	{
		"name":"云村的夏句",
		"singer":"邱有句/馒头",
		"time":"4:21",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E4%BA%91%E6%9D%91%E7%9A%84%E5%A4%8F%E5%8F%A5.mp3",
		"img":"http://p1.music.126.net/B0L4_iM8t8IEpvUzEJi6ow==/109951163235856317.jpg",
		"lrc":"[ti:云村的夏句][ar:邱有句，馒头][al:云村的夏句][by:][offset:0][00:00.79]收录于专辑《云村的夏句》中[00:01.86]纯音乐，请欣赏\n"
		
	},
	{
		"name":"Grief and sorrow-Violin Ver.",
		"singer":"Benjiro Nakamura",
		"time":"3:09",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/grief%20and%20sorrow-violin.mp3",
		"img":"http://p1.music.126.net/rmBU-SOzOnaRrKcFbFmk2Q==/109951165023070920.jpg",
		"lrc":"[ti:Grief and Sorrow][ar:Benjiro Nakamura][al:Grief and Sorrow][by:][offset:0][00:00.79]from:Naruto, 收录于专辑《Grief and Sorrow》中[00:01.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Grief and sorrow,Multiinstruments",
		"singer":"Benjiro Nakamura",
		"time":"2:55",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/grief%20and%20sorrow-%E5%90%88%E5%A5%8F.mp3",
		"img":"http://p1.music.126.net/rmBU-SOzOnaRrKcFbFmk2Q==/109951165023070920.jpg",
		"lrc":"[ti:Grief and Sorrow][ar:Benjiro Nakamura][al:Grief and Sorrow][by:][offset:0][00:00.79]from:Naruto, 收录于专辑《Grief and Sorrow》中[00:01.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Sadness and Sorrow",
		"singer":"高梨康治",
		"time":"2:45",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/sadness%20and%20sorrow.mp3",
		"img":"http://p1.music.126.net/rmBU-SOzOnaRrKcFbFmk2Q==/109951165023070920.jpg",
		"lrc":"[ti:Sadness and Sorrow][ar:高梨康治][al:Naruto-OST][by:][offset:0][00:00.79]from:疾风传-OST2,白之死[00:01.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Affections touching across time",
		"singer":"和田薰",
		"time":"3:07",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/affections%20touching%20across%20time.mp3",
		"img":"http://p1.music.126.net/JI9uLRvH629NZ5GZLE06AQ==/2330964650912440.jpg",
		"lrc":"[ti:Affections touching across time - 《穿越时空的思念》][ar:和田薰][al:《犬夜叉 音楽撰集 映画篇》][by:][offset:0][00:00.79]from:InuYasha, 犬夜叉OST[00:01.86]纯音乐，请欣赏\n"
	},
	{
		"name":"五月雨",
		"singer":"高梨康治",
		"time":"3:27",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E4%BA%94%E6%9C%88%E9%9B%A8.mp3",
		"img":"http://p2.music.126.net/2s6Sxg_TE20FnQsCWw80JQ==/109951163338274299.jpg",
		"lrc":"[ti:五月雨][ar:高梨康治][al:动画《火影忍者疾风传OST2》配乐][by:][offset:0][00:00.79]动画《火影忍者疾风传OST2》配乐[00:01.86]纯音乐，请欣赏\n"
	},
	{
		"name":"夜空的寂静（夜色钢琴曲）",
		"singer":"赵海洋",
		"time":"2:36",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E8%B5%B5%E6%B5%B7%E6%B4%8B%20-%20%E5%A4%9C%E7%A9%BA%E7%9A%84%E5%AF%82%E9%9D%99%20%28%E5%A4%9C%E8%89%B2%E9%92%A2%E7%90%B4%E6%9B%B2%29.mp3",
		"img":"http://p1.music.126.net/n2YE2i2vevCxvbpdeVyboQ==/109951166275688068.jpg",
		"lrc":"[ti:夜空的寂静][ar:赵海洋][al:夜空的寂静][by:][offset:0][00:00.79]夜空的寂静（夜色钢琴曲）[00:01:10]by: 赵海洋[00:02.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Asphyxia (Piano Ver.)",
		"singer":"逆时针向",
		"time":"5:10",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/mp3%E5%A4%96%E9%93%BEAsphyxia-%E9%80%86%E6%97%B6%E9%92%88%E5%90%91.mp3",
		"img":"http://p2.music.126.net/FRIgNtiwVBjHDIlhgnzGew==/109951163869607960.jpg",
		"lrc":"[ti:Asphyxia (Piano Ver.)][ar:逆时针向][al:Asphyxia][by:][offset:0][00:00.79]Asphyxia (Piano Ver.)[00:01:10]by: 逆时针向[00:02.86]纯音乐，请欣赏\n"
	},
	{
		"name":"夜色钢琴曲-虹之间",
		"singer":"赵海洋",
		"time":"3:55",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E5%A4%9C%E8%89%B2%E9%92%A2%E7%90%B4%E6%9B%B2-%E8%99%B9%E4%B9%8B%E9%97%B4.mp3",
		"img":"http://p2.music.126.net/IhyN_NiSx2eiguvcyILPQA==/109951162955989745.jpg",
		"lrc":"[ti:夜色钢琴曲（虹之间）][ar:赵海洋][al:夜色钢琴曲][by:][offset:0][00:00.79]夜色钢琴曲-虹之间[00:01:10]by: 赵海洋[00:02.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Caravan",
		"singer":"a-hisa",
		"time":"2:11",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/caravan.mp3",
		"img":"http://p2.music.126.net/SEOt4or3tDX9NTmWYdChYw==/2313372464858816.jpg",
		"lrc":"[ti:Caravan][ar:a-hisa][al:Caravan][by:][offset:0][00:00.79]收藏在专辑《Caravan》中[00:01:10]by: a-hisa[00:02.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Where are you",
		"singer":"AniFace",
		"time":"3:35",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/AniFace%20-%20Where%C2%A0are%C2%A0you.mp3",
		"img":"http://p1.music.126.net/AUfXMljLBgB3PBV731IzRg==/109951162857118370.jpg",
		"lrc":"[ti:Where are you?][ar:AniFace][al:Where are you][by:][offset:0][00:00.79]收藏在专辑《Where are you》中[00:01:10]by: AniFace[00:02.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Illusionary Daytime-《幻昼》",
		"singer":"Shirfine",
		"time":"4:10",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Illusionary%20Daytime%E5%B9%BB%E6%98%BC.mp3",
		"img":"http://p1.music.126.net/8xNVCemkSNQptEyNw1PHKg==/8914840278033758.jpg",
		"lrc":"[ti:Illusionary Daytime-《幻昼》][ar:Shirfine][al:Endless Daydream][by:][offset:0][00:00.79]收藏在专辑《Endless Daydream》中[00:01:10]by: Shirfine[00:02.86]纯音乐，请欣赏\n"
	}
	,
	{
		"name":"With an Orchid-《心兰相随》",
		"singer":"Yanni",
		"time":"5:07",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E5%BF%83%E5%85%B0%E7%9B%B8%E9%9A%8F.mp3",
		"img":"http://p2.music.126.net/7fgnozyzD3e-flaQO-W2zQ==/109951164936091373.jpg",
		"lrc":"[id:$00000000][ar:arkady sevidov][ti:June][by:][hash:4399c9872c7235b60b58ce88dc487897][al:][sign:][qq:][total:320317][offset:0][00:01.58]纯音乐，请欣赏\n"
	},
	{
		"name":"1967",
		"singer":"ゴンチチ",
		"time":"2:24",
		"img":"https://p2.music.126.net/Po9CBYr192s38oIZ2TCdTQ==/109951166201451609.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/1967.mp3",
		"lrc":"[ti:1967][ar:ゴンチチ][al:humble music][by:][offset:0][00:00.79]收藏在专辑《humble music》中[00:02.86]纯音乐，请欣赏\n"
	},
	{
		"name":"Last Reincarnation",
		"singer":"AniFace",
		"img":"http://p2.music.126.net/FgLIokiq3mdjLjUMTxKcJg==/109951162837881950.jpg",
		"time":"3:10",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/AniFace%20-%20Last%C2%A0Reincarnation.mp3",
		"lrc":"[ti:Last Reincarnation][ar:AniFace][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"Here We Are Again",
		"singer":"CAGNET,日向大介",
		"img":"http://p2.music.126.net/FZX7XAjsmEPGyVOqm4H7aQ==/109951166361039007.jpg",
		"time":"3:00",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/CAGNET%2C%E6%97%A5%E5%90%91%E5%A4%A7%E4%BB%8B%20-%20Here%20We%20Are%20Again.mp3",
		"lrc":"[ti:Here We Are Again][ar:CAGNET,日向大介][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"Exodus-出埃及记",
		"singer":"Maksim Mrvica",
		"img":"http://p2.music.126.net/HbBeL8f38esrZYIQf7UYQw==/772956674368394.jpg",
		"time":"3:10",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Exodus.mp3",
		"lrc":"[ti:Exodus-出埃及记][ar:Maksim Mrvica][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"Black Is the Colour",
		"singer":"Phil Coulter",
		"img":"http://p1.music.126.net/06JGAPR2h6oqjLcoohvrgg==/6657542906399467.jpg",
		"time":"4:12",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Phil%20Coulter%20-%20Black%20Is%20the%20Colour.mp3",
		"lrc":"[ti:Black Is the Colour][ar:Phil Coulter][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"Aphrodite",
		"singer":"S.E.N.S.",
		"img":"http://p1.music.126.net/Ru5xyZbjHfWiun1HQt7Ihg==/28587302347645.jpg",
		"time":"3:58",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/S.E.N.S.%20-%20Aphrodite.mp3",
		"lrc":"[ti:Aphrodite][ar:S.E.N.S.][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"伽羅",
		"singer":"S.E.N.S.",
		"img":"http://p1.music.126.net/Ru5xyZbjHfWiun1HQt7Ihg==/28587302347645.jpg",
		"time":"3:59",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E4%BC%BD%E7%BE%85.mp3",
		"lrc":"[ti:伽羅][ar:S.E.N.S.][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"The Sounds Of Silence",
		"singer":"Simon & Garfunkel",
		"img":"http://p2.music.126.net/8HbIkVOhZzR2O1Tk8ZyY2A==/922490255733459.jpg",
		"time":"3:43",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/The%20Sounds%20Of%20Silence.mp3",
		"lrc":"[ti:The Sounds Of Silence][ar:Simon & Garfunkel][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"城南花已开",
		"singer":"三亩地",
		"img":"http://p1.music.126.net/i-7ktILRPImJ0NwiH8DABg==/109951162885959979.jpg",
		"time":"4:31",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E4%B8%89%E4%BA%A9%E5%9C%B0%20-%20%E5%9F%8E%E5%8D%97%E8%8A%B1%E5%B7%B2%E5%BC%80.mp3",
		"lrc":"[ti:城南花已开][ar:三亩地][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"故梦(琵琶版)",
		"singer":"千年破晓",
		"img":"http://p1.music.126.net/Ji-MyQ8ansfBgOgFcL_aow==/2548667953219862.jpg",
		"time":"3:44",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E5%8D%83%E5%B9%B4%E7%A0%B4%E6%99%93%20-%20%E6%95%85%E6%A2%A6%28%E7%90%B5%E7%90%B6%E7%89%88%29.mp3",
		"lrc":"[ti:故梦(琵琶版)][ar:千年破晓][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"故乡的原风景",
		"singer":"宗次郎",
		"img":"http://p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg",
		"time":"4:43",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E5%AE%97%E6%AC%A1%E9%83%8E%20-%20%E6%95%85%E4%B9%A1%E7%9A%84%E5%8E%9F%E9%A3%8E%E6%99%AF.mp3",
		"lrc":"[ti:故乡的原风景][ar:宗次郎][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"风居住的街道（Piano ver）",
		"singer":"磯村由紀子",
		"img":"http://p2.music.126.net/ap7KvRE0-V4kfThDVVor9A==/18777459579736085.jpg",
		"time":"4:46",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/%E9%A5%AD%E7%A2%97%E7%9A%84%E5%BD%BC%E5%B2%B8%20-%20%E9%A3%8E%E5%B1%85%E4%BD%8F%E7%9A%84%E8%A1%97%E9%81%93%EF%BC%88Piano%20ver%EF%BC%89%20%28%E7%BF%BB%E8%87%AA%20%E7%A3%AF%E6%9D%91%E7%94%B1%E7%B4%80%E5%AD%90%EF%BC%89.mp3",
		"lrc":"[ti:风居住的街道（Piano ver）][ar:磯村由紀子][al:][by:][offset:0][00:00.79]纯音乐，请欣赏\n"
	},
	{
		"name":"Concerto pour piano n°2, Op. 18:I. Allegro moderato",
		"singer":"Rachmaninoff: Piano Concerto No. 2",
		"img":"http://p2.music.126.net/s8yCIX3pCGnwJPj3ON_eFw==/109951165295585164.jpg?param=130y130",
		"time":"11:56",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Concerto%20pour%20piano%20n%C2%B02%2C%20Op.%2018I.%20Allegro%20moderato.mp3",
		"lrc":"[00:00.00] 作曲 : Sergei Rachmaninoff[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Concerto pour piano n°2, Op. 18:II. Adagio sostenuto",
		"singer":"Rachmaninoff: Piano Concerto No. 2",
		"img":"https://p1.music.126.net/H4DU3QDc6xXzT5BSTrPZ9g==/3440371884074274.jpg?param=200y200",
		"time":"11:13",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Concerto%20pour%20piano%20n%C2%B02%2C%20Op.%2018II.%20Adagio%20sostenuto.mp3",
		"lrc":"[00:00.00] 作曲 : Sergei Rachmaninoff[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Concerto pour piano n°2, Op. 18:III. Allegro scherzando",
		"singer":"Rachmaninoff: Piano Concerto No. 2",
		"img":"https://p1.music.126.net/H4DU3QDc6xXzT5BSTrPZ9g==/3440371884074274.jpg?param=200y200",
		"time":"11:30",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Concerto%20pour%20piano%20n%C2%B02%2C%20Op.%2018III.%20Allegro%20scherzando.mp3",
		"lrc":"[00:00.00] 作曲 : Sergei Rachmaninoff[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Piano Concerto No.2 In C Minor, Op.18:1. Moderato",
		"singer":"Rachmaninov: Piano Concerto No.2 / Tchaikovsky: Piano Concerto No.1",
		"img":"http://p1.music.126.net/gPxzqf3L5FWDvrvBxtJn3A==/109951165071397234.jpg?param=130y130",
		"time":"11:13",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Piano%20Concerto%20No.2%20In%20C%20Minor%2C%20Op.181.%20Moderato.mp3",
		"lrc":"[00:00.00] 作曲 : Sergei Rachmaninoff[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Piano Concerto No.2 In C Minor, Op.18:2. Adagio sostenuto",
		"singer":"Rachmaninov: Piano Concerto No.2 / Tchaikovsky: Piano Concerto No.1",
		"img":"http://p1.music.126.net/gPxzqf3L5FWDvrvBxtJn3A==/109951165071397234.jpg?param=130y130",
		"time":"11:54",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Piano%20Concerto%20No.2%20In%20C%20Minor%2C%20Op.182.%20Adagio%20sostenuto.mp3",
		"lrc":"[00:00.00] 作曲 : Sergei Rachmaninoff[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Piano Concerto No.2 In C Minor, Op.18:3. Allegro scherzando",
		"singer":"Rachmaninov: Piano Concerto No.2 / Tchaikovsky: Piano Concerto No.1",
		"img":"http://p1.music.126.net/gPxzqf3L5FWDvrvBxtJn3A==/109951165071397234.jpg?param=130y130",
		"time":"11:54",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Piano%20Concerto%20No.2%20In%20C%20Minor%2C%20Op.183.%20Allegro%20scherzando.mp3",
		"lrc":"[00:00.00] 作曲 : Sergei Rachmaninoff[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 1 in C Major, BWV 846:Prelude",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"2:22",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%201%20in%20C%20Major%2C%20BWV%20846%EF%BC%9APrelude.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 1 in C Major, BWV 846:Fugue",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:58",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%201%20in%20C%20Major%2C%20BWV%20846%EF%BC%9AFugue.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 2 in C minor, BWV 847:Prelude",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"2:08",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%202%20in%20C%20minor%2C%20BWV%20847%EF%BC%9APrelude.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 2 in C minor, BWV 847:Fugue",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:37",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%202%20in%20C%20minor%2C%20BWV%20847%EF%BC%9AFugue.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 3 in C-sharp Major, BWV 848:Prelude",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:37",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%203%20in%20C-sharp%20Major%2C%20BWV%20848%EF%BC%9APrelude.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 3 in C-sharp Major, BWV 848:Fugue",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"2:05",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%202%20in%20C%20minor%2C%20BWV%20847%EF%BC%9AFugue.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 6 in D minor, BWV 851:Prelude",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:19",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%206%20in%20D%20minor%2C%20BWV%20851%EF%BC%9APrelude.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 6 in D minor, BWV 851:Fugue",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:19",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%206%20in%20D%20minor%2C%20BWV%20851%EF%BC%9AFugue.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 10 in E minor, BWV 855:Prelude",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:19",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%2010%20in%20E%20minor%2C%20BWV%20855%EF%BC%9APrelude.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 10 in E minor, BWV 855:Fugue",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:19",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%2010%20in%20E%20minor%2C%20BWV%20855%EF%BC%9AFugue.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 14 in F-sharp minor, BWV 859:Prelude",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:19",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%2014%20in%20F-sharp%20minor%2C%20BWV%20859%EF%BC%9APrelude.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	},
	{
		"name":"Prelude & Fugue No. 14 in F-sharp minor, BWV 859:Fugue",
		"singer":"巴赫：平均律键盘曲集，第一卷",
		"img":"http://p2.music.126.net/BRD6wJVHA5a-Wgv1uYNkug==/109951165847356012.jpg?param=130y130",
		"time":"1:19",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%BA%AF%E9%9F%B3%E4%B9%90/Glenn%20Gould%20-%20Prelude%20%26%20Fugue%20No.%2014%20in%20F-sharp%20minor%2C%20BWV%20859%EF%BC%9AFugue.mp3",
		"lrc":"[00:00.00] 作曲 : Johann Sebastian Bach[99:00.00]纯音乐，请欣赏\n"
	}
],
/*分类2《民谣至上》*/
[
	
	{
		"basic":true,
		"name":"民谣至上",
		"singer":"none",
		"img":"https://p1.music.126.net/k7lBxKE8kLXKdXnjJBOiGA==/3261151495529677.jpg"
	},
	{
		"name":"八十年代的歌",
		"singer":"赵雷",
		"time":"4:31",
		"img":"http://p2.music.126.net/BJgUd9aD9gpougZFASRTTw==/18548761162235571.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E5%85%AB%E5%8D%81%E5%B9%B4%E4%BB%A3%E7%9A%84%E6%AD%8C.mp3",
		"lrc":"[ar:赵雷][total:271124][offset:0][ti:八十年代的歌][id:$00000000][hash:ba79972d8eee46a39ffdc7684445d6e4][00:00.76]赵雷 - 八十年代的歌[00:02.44]作词：赵雷[00:03.25]作曲：赵雷[00:03.96]编曲：赵雷、喜子[00:07.92]BASS：张岭[00:08.63]钢琴：柳森[00:09.54]箱琴：赵雷[00:10.41]鼓：关菲[00:11.12]MIDI：柳森[00:11.88]和声：孙嫣然[00:33.91]香烟请再为我点一颗[00:39.67]火车上的情侣也不多[00:45.31]你推荐的歌我都听过[00:51.01]听过后和你一样寂寞[00:56.75]忘不了红色背心的你[01:02.39]抹不去我多情的思绪[01:08.18]我无法拉近你我的距离[01:13.84]这距离就像飞鸟和鱼[01:19.63]时间请你快一点的过[01:25.24]别让我一个人守日落[01:30.93]我想过平常人的生活[01:36.62]欲望请放过脆弱的我[02:05.36]想念你的我却没话说[02:10.94]想着想着就要到站了[02:16.73]我的耳旁还在回荡着[02:22.37]那一首八十年代的歌[02:28.21]我知道我的故事太多[02:33.87]我知道我只停留片刻[02:39.61]别在拥挤的人群找寻我[02:45.34]感谢你成为我的过客[02:51.17]忘不了暮色中回眸的你[02:56.77]躲不掉命运下过的雨[03:02.36]我无法追寻你的足迹[03:08.19]就让我在孤独中远去[03:16.81]有没有你还是那个我[03:22.45]有没有你还一样的过[03:28.21]你一定要像晨曦一样活[03:33.78]不必在意我的哀与乐\n"
	},
	{
		"name":"我们的时光",
		"singer":"赵雷",
		"time":"4:30",
		"img":"http://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E6%88%91%E4%BB%AC%E7%9A%84%E6%97%B6%E5%85%89.mp3",
		"lrc":"[id:$00000000][ar:赵雷][ti:我们的时光][by:][hash:eebfd906375c6b497b10ed5466a7b57d][al:][sign:][qq:][total:268899][offset:0][00:00.99]赵雷 - 我们的时光[00:03.32]作词：赵雷[00:04.79]作曲：赵雷[00:34.10]头顶的太阳[00:36.44]燃烧着青春的余热[00:39.34]他从来不会放弃[00:42.08]照耀着我们行进[00:45.02]寒冬不经过这里[00:47.76]那只是迷雾的山林[00:50.65]走完苍老的石桥[00:53.65]感到潮湿的味道[00:56.89]翻过了青山[00:59.14]你说你看头顶斗笠的人们[01:02.09]海风抚过椰树吹散[01:05.34]一路的风尘[01:07.87]这里就像与闹市隔绝的[01:11.23]又一个世界[01:13.61]让我们疲倦的身体[01:16.15]在这里长久的停歇[01:42.59]翻过了青山[01:44.72]你说你看头顶斗笠的人们[01:47.87]海风抚过椰树吹散[01:51.07]一路的风尘[01:53.96]这里就像与闹市隔绝的[01:56.85]又一个世界[01:59.78]让我们疲倦的身体[02:01.81]在这里长久的停歇[02:05.51]厦门的时光[02:07.85]是我们的时光[02:11.00]大海的波浪[02:13.63]翻滚着我们的向往[02:16.98]山谷里何时[02:18.97]会再传来我们的歌声[02:22.12]那一些欢笑已过去[02:25.06]那些往昔会铭记[02:28.48]我们的时光[02:30.66]是无忧的时光[02:33.96]精彩的年月[02:36.55]不会被什么改写[02:39.74]放纵的笑语[02:42.03]时常回荡在我们耳旁[02:45.07]那些路上的脚印[02:47.94]永远不会被掩藏\n"
	},
	{
		"name":"吉姆餐厅",
		"singer":"赵雷",
		"time":"5:54",
		"img":"http://p2.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E5%90%89%E5%A7%86%E9%A4%90%E5%8E%85.mp3",
		"lrc":"[00:00.000] 作词 : 赵雷[00:01.000] 作曲 : 赵雷[01:08.131]吉姆餐厅米尔大哥在忙着[01:15.882]不灭的月亮下是不夜的街[01:23.851]生意不错忙碌的人把一切忘了[01:31.858]端起酒杯流泪的男人还没醉[01:39.925]我不知道该和你说什么我没有吉他就唱不出歌[01:47.884]我只知道我不能体会任何人的快乐[01:55.937]如果吉姆知道的话请为他做上一碗面吧[02:03.881]每当到你的生日你就很想她[02:11.935]吉姆餐厅雪把人们堵在家中[02:19.886]米尔就望着那棵树不说话[02:27.887]夜空清澈吉姆的眼不停止闪烁[02:35.940]别担心她你看她从不会寂寞[02:43.991]快剪掉那忧愁的长发吧[02:47.891]离开这个荒冷的村庄吧[02:51.942]这里没有人会唱吉姆唱过的那些老歌[02:59.944]快烧掉那陈旧的忧伤[03:04.160]穿上那件未见过太阳的新衣裳[03:07.998]我想吉姆她和我一样也这样希望[03:17.405][03:47.978]我要走了米尔大哥[03:51.879]你也快走快把以前忘了[03:55.879]会再见的吉姆餐厅[03:59.529]你先上了那辆离开时间的车[04:03.931]别再见了米尔大哥回不去的时光乐土[04:11.934]挥不去的都写满面孔和青春一起褪落[04:20.339]沉睡吧吉姆餐厅沉睡呀儿时乐土[04:27.889]再也不会有谁牵绊着你踏上远方的路[04:35.841]沉睡吧吉姆餐厅沉睡呀不用牵挂[04:43.893]再也不会有谁让你感到钻心的痛苦\n"
	},
	{
		"name":"鼓楼",
		"singer":"赵雷",
		"time":"4:41",
		"img":"http://p2.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E9%BC%93%E6%A5%BC.mp3",
		"lrc":"[ar:赵雷][ti:鼓楼][by:][hash:2ba01515f2cf84b99c25fc6a8debd115][al:][sign:][qq:][total:281051][offset:0][00:00.76]赵雷 - 鼓楼[00:01.74]作词：赵雷[00:02.66]作曲：赵雷[00:03.63]编曲：赵雷、喜子[00:05.16]制作人：赵雷、喜子、姜北生[00:07.09]贝斯：张岭[00:07.25]鼓：贝贝[00:07.35]电琴：喜子[00:07.50]箱琴：赵雷[00:07.65]口琴：赵雷[00:07.81]MIDI：喜子[00:07.96]和声：赵雷、孙嫣然、唐宁[00:26.05]我走在鼓楼下面[00:31.50]路在堵着[00:34.28]雨后的阳光散落[00:38.47]人们都出来了[00:42.35]执着的迷惘的[00:47.83]文艺青年很多[00:50.71]如果我无聊了[00:53.89]就会来这里坐坐[00:58.08]我是个沉默不语的[01:01.87]靠着墙壁晒太阳的过客[01:06.48]如果我有些倦意了[01:10.11]就让我在这里独自醒过[01:15.88]我站在鼓楼上面[01:19.11]一切繁华与我无关[01:23.17]这是个拥挤的地方[01:27.22]而我却很平凡[01:47.24]我走在鼓楼下面[01:52.54]淋湿的咖啡馆[01:55.66]睡不着的后海边[01:59.14]月亮还在抽着烟[02:03.60]喝醉的亲吻着[02:09.08]快活的人不眠[02:11.90]唯有我倚着围栏[02:15.37]对过往说晚安[02:21.63]晚安[02:52.41]我是个沉默不语的[02:55.81]靠着车窗想念你的乘客[03:00.30]当一零七路再次经过[03:04.27]时间是带走青春的电车[03:09.56]我站在什刹海边[03:13.05]一切甜蜜与我无关[03:17.00]这是个拥挤的地方[03:21.03]而我却很孤单[03:24.52]我在鼓楼[03:28.77]我在鼓楼[03:32.72]我在鼓楼[03:40.72]我在鼓楼[03:46.05]我在鼓楼[03:49.44]我在鼓楼\n"
	},
	{
		"name":"南方姑娘",
		"singer":"赵雷",
		"time":"5:32",
		"img":"http://p2.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E5%8D%97%E6%96%B9%E5%A7%91%E5%A8%98.mp3",
		"lrc":"[id:$00000000][ar:赵雷][ti:南方姑娘][by:][hash:d9a87fc3fc68ac7ed5776aef8ac5b0b1][al:][sign:][qq:][total:0][offset:0][00:01.21]南方姑娘 - 赵雷[00:03.05]词：赵雷[00:03.97]曲：赵雷[00:57.50]北方的村庄[00:59.91]住着一个南方的姑娘[01:05.73]她总是喜欢穿着带花的裙子[01:09.95]站在路旁[01:14.71]她的话不多[01:16.59]但笑起来是那么平静优雅[01:22.28]她柔弱的眼神里装的是什么[01:26.67]是思念的忧伤[01:32.64]南方的小镇[01:35.21]阴雨的冬天没有北方冷[01:41.06]她不需要臃肿的棉衣[01:44.03]去遮盖她似水的面容[01:49.81]她在来去的街头留下影子芳香[01:53.64]在回眸人的心头[01:57.47]眨眼的时间 芳香已飘散[02:02.11]影子已不见[02:07.59]南方姑娘[02:11.86]你是否习惯北方的秋凉[02:16.31]南方姑娘[02:20.01]你是否喜欢北方人的直爽[02:28.67]日子过得就像那些不眠的晚上[02:37.96]她嚼着口香糖[02:40.60]对墙漫谈着理想 哎哎[02:45.48]南方姑娘[02:48.80]我们都在忍受着漫长[02:53.38]南方姑娘[02:57.18]是不是高楼遮住了你的希望[03:05.13]哎嗨[03:38.69]昨日的雨曾淋漓过她瘦弱的肩膀[03:47.36]夜空的北斗[03:49.29]也没有让她找到迷途的方向[03:56.10]阳光里她在院子中央晾晒着衣裳[04:03.66]在四季的风中[04:05.88]她散着头发安慰着时光[04:12.29]南方姑娘[04:15.98]你是否爱上了北方[04:20.34]南方姑娘[04:24.22]你说今年你就要回到你的家乡[04:32.87]思念让人心伤[04:36.24]它呼唤着你的泪光[04:42.06]南方的果子已熟[04:44.62]那是最简单的理想[04:48.56]NA NA[05:06.29]南方 南方 南方  南方 南方\n"
	},
	{
		"name":"画",
		"singer":"赵雷",
		"time":"3:46",
		"img":"http://p1.music.126.net/wldFtES1Cjnbqr5bjlqQbg==/18876415625841069.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E7%94%BB.mp3",
		"lrc":"[ar:赵雷][ti:画][by:][hash:f5f4e2cae64ac055c3e22a6c807832ee][al:][sign:][qq:][total:226128][offset:0][00:00.62]赵雷 - 画[00:01.23]作词：赵雷[00:01.38]作曲：赵雷[00:26.99]为寂寞的夜空[00:28.61]画上一个月亮[00:32.20]把我画在那月亮下面歌唱[00:37.25]为冷清的房子[00:38.92]画上一扇大窗[00:42.85]再画上一张床[00:47.70]画一个姑娘陪着我[00:52.91]再画个花边的被窝[00:58.28]画上灶炉与柴火[01:03.40]我们一起生来一起活[01:08.79]嘀嘀哩哩嘀嘀嘀哩哩嘀[01:13.75]嘀嘀哩哩嘀嘀嘀哩哩嘀[01:19.08]嘀嘀哩哩嘀嘀嘀哩哩[01:23.09]耶欸[01:24.33]嘀嘀哩哩嘀嘀嘀嘀哩[01:29.79]画一群鸟儿围着我[01:34.61]再画上绿岭和青坡[01:39.91]画上宁静与祥和[01:45.12]雨点儿在稻田上飘落[01:50.28]画上有你能用手[01:52.75]触到的彩虹[01:55.64]画中有我决定不灭的星空[02:00.84]画上弯曲无尽平坦的小路[02:05.90]尽头的人家梦已入[02:11.17]画上母亲安详的姿势[02:16.33]还有橡皮能擦去的争执[02:21.59]画上四季都不愁的粮食[02:26.86]悠闲的人从没心事[02:32.07]呐呐呐呐呐呐呐呐[02:37.32]呐呐呐呐呐呐呐呐呐[02:42.50]呐呐呐呐呐呐呐[02:47.82]呐呐呐呐呐呐呐呐呐[02:52.93]呐呐呐呐呐呐呐呐[02:58.13]呐呐呐呐呐呐呐呐呐[03:03.60]呐呐呐呐呐呐呐[03:07.75]欸嘿[03:08.81]呐呐呐呐呐呐呐呐呐[03:13.92]我没有擦去争吵的橡皮[03:18.93]只有一支画着孤独的笔[03:24.19]那夜空的月也不再亮[03:29.51]只有个忧郁的孩子在唱[03:34.72]为寂寞的夜空画上一个月亮\n"
	},
	{
		"name":"理想",
		"singer":"赵雷",
		"time":"5:13",
		"img":"http://p2.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E7%90%86%E6%83%B3.mp3",
		"lrc":"[id:$00000000][ar:赵雷][ti:理想][by:][hash:eb8b320f9f0f6b1f8c032348170e23d2][al:][sign:][qq:][total:312000][offset:2][00:00.90]赵雷 - 理想[00:02.77]作词：赵雷[00:04.90]作曲：赵雷[00:07.07]编曲：赵雷[00:35.81]一个人住在这城市[00:38.39]为了填饱肚子[00:40.31]就已精疲力尽[00:43.30]还谈什么理想[00:46.21]那是我们的美梦[00:52.60]梦醒后[00:53.62]还是依然奔波在风雨的街头[00:59.61]有时候想哭就把泪[01:01.68]咽进一腔热血的胸口[01:09.46]公车上我睡过了车站[01:17.82]一路上我望着霓虹的北京[01:26.44]我的理想[01:28.21]把我丢在这个拥挤的人潮[01:33.25]车窗外已经是一片白雪茫茫[01:41.47]又一个四季在轮回[01:44.96]而我一无所获的坐在街头[01:49.93]只有理想[01:51.45]在支撑着那些麻木的血肉[01:57.82]理想今年你几岁[02:02.17]你总是诱惑着年轻的朋友[02:07.02]你总是谢了又开 给我惊喜[02:10.96]又让我沉入失望的生活里[02:56.75]公车上我睡过了车站[03:05.32]一路上我望着霓虹的北京[03:13.60]我的理想[03:15.68]把我丢在这个拥挤的人潮[03:20.65]车窗外已经是一片白雪茫茫[03:28.90]又一个四季在轮回[03:32.29]而我一无所获的坐在街头[03:37.14]只有理想[03:38.81]在支撑着那些麻木的血肉[03:45.23]理想今年你几岁[03:49.32]你总是诱惑着年轻的朋友[03:54.16]你总是谢了又开[03:56.14]给我惊喜[03:58.21]又让我沉入失望的生活里[04:02.30]又一个年代在变换[04:05.99]我已不是无悔的那个青年[04:10.66]青春被时光抛弃[04:14.32]已是当父亲的年纪[04:18.63]理想永远都年轻[04:23.48]你让我倔强地反抗着命运[04:27.79]你让我变得苍白[04:30.06]却依然天真的相信[04:32.64]花儿会再次的盛开[04:48.52]阳光之中[04:49.47]到处可见奔忙的人们[04:56.88]被拥挤着[04:57.84]被一晃而飞的光阴忽略过\n"
	},
	{
		"name":"成都",
		"singer":"赵雷",
		"time":"5:28",
		"img":"http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E8%B5%B5%E9%9B%B7%20-%20%E6%88%90%E9%83%BD.mp3",
		"lrc":"[id:$00000000][ar:赵雷][ti:陆丰][by:陈YC][hash:a06b033b356bfc974c5245d0195086a5][al:成都][sign:][qq:][total:328411][offset:0][00:00.21]赵雷 - 成都[00:04.17]BASS：张岭[00:04.83]鼓：贝贝[00:05.59]钢琴：柳森[00:06.67]箱琴：赵雷/喜子[00:08.23]笛子：祝子[00:10.72]弦乐：亚洲爱乐国际乐团[00:12.85]和声：朱奇迹/赵雷/旭东[00:14.98]童声：朵朵/天天[00:18.57]让我掉下眼泪的[00:22.35]不止昨夜的酒[00:26.43]让我依依不舍的[00:30.38]不止你的温柔[00:34.30]余路还要走多久[00:38.33]你攥着我的手[00:42.33]让我感到为难的[00:46.26]是挣扎的自由[00:52.25]分别总是在九月[00:56.21]回忆是思念的愁[01:00.06]深秋嫩绿的垂柳[01:03.99]亲吻着我额头[01:08.02]在那座阴雨的小城里[01:11.99]我从未忘记你[01:16.07]成都 带不走的 只有你[01:23.87]和我在成都的街头走一走 唔喔 唔喔[01:31.74]直到所有的灯都熄灭了也不停留[01:39.72]你会挽着我的衣袖[01:43.54]我会把手揣进裤兜[01:47.53]走到玉林路的尽头[01:51.42]坐在小酒馆的门口[02:31.06]分别总是在九月[02:34.91]回忆是思念的愁[02:38.98]深秋嫩绿的垂柳[02:42.84]亲吻着我额头[02:46.85]在那座阴雨的小城里[02:50.78]我从未忘记你[02:54.78]成都 带不走的 只有你[03:02.63]和我在成都的街头走一走 唔喔 唔喔[03:10.57]直到所有的灯都熄灭了也不停留[03:18.42]你会挽着我的衣袖[03:22.46]我会把手揣进裤兜[03:26.36]走到玉林路的尽头[03:30.27]坐在小酒馆的门口[03:38.54]和我在成都的街头走一走 唔喔 唔喔[03:46.27]直到所有的灯都熄灭了也不停留[03:54.09]和我在成都的街头走一走 唔喔 唔喔[04:01.99]直到所有的灯都熄灭了也不停留[04:09.91]你会挽着我的衣袖[04:13.89]我会把手揣进裤兜[04:17.81]走到玉林路的尽头[04:21.89]走过小酒馆的门口[04:36.09]和我在成都的街头走一走 唔喔 唔喔[04:43.74]直到所有的灯都熄灭了也不停留\n"
	},
	{
		"name":"少年锦时",
		"singer":"赵雷",
		"time":"5:08",
		"img":"http://p1.music.126.net/PJNV84mjt_mDXEkxtjzB4w==/18957779486268444.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E5%B0%91%E5%B9%B4%E9%94%A6%E6%97%B6.mp3",
		"lrc":"[00:00.000] 作词 : 赵雷[00:01.000] 作曲 : 赵雷[00:44.970]又回到春末的五月[00:50.150]凌晨的集市人不多[00:55.100]小孩在门前唱着歌[01:00.270]阳光它照暖了溪河[01:05.420]柳絮乘着大风吹[01:10.350]树影下的人想睡[01:15.490]沉默的人 从此刻[01:17.630]开始快乐起来[01:20.590]脱掉寒冬的傀儡[01:25.830]我忧郁的白衬衫[01:30.780]青春口袋里面的[01:34.000]第一支香烟[01:36.990]情窦初开的 我[01:41.560]从不敢和你说[01:44.120][01:46.250]仅有辆进城的公车[01:51.170]还没有咖啡馆和奢侈品商店[01:57.280]晴朗蓝天下 昂头的笑脸[02:02.430]爱很简单[02:27.090]钟声敲响了日落[02:32.170]柏油路跃过山坡[02:37.330]一直通向北方的[02:40.370]是我们想象[02:42.200]长大后也未曾经过[02:47.000]爬满青藤的房子[02:52.550]屋檐下的邻居[02:54.760]在黄昏中飞驰[02:58.470]秋天的时候 柿子树一熟[03:03.500]够我们吃很久[03:07.960]收音机靠坐在床头[03:12.990]贪玩的少年抱着漫画书不放手[03:18.930]陪我入睡的 是月亮的忧愁[03:23.910]和装满幻梦的枕头[03:28.620]沾满口水的枕头[03:43.930]我忧郁的白衬衫[03:48.720]青春口袋里面的[03:51.770]第一支香烟[03:54.890]情窦初开的 我[03:59.360]从不敢和你说[04:02.480][04:04.110]仅有辆进城的公车[04:09.090]还没有咖啡馆和奢侈品商店[04:15.010]晴朗蓝天下 昂头的笑脸[04:20.150]爱很简单[04:25.060]爱很简单[04:30.770]爱很简单[04:35.980]爱很简单[04:42.460]爱很简单\n"
	},
	{
		"name":"阿刁",
		"singer":"赵雷",
		"time":"6:14",
		"img":"http://p1.music.126.net/BJgUd9aD9gpougZFASRTTw==/18548761162235571.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E9%98%BF%E5%88%81.mp3",
		"lrc":"[00:00.000] 作词 : 赵雷[00:00.000] 作曲 : 赵雷[00:00.000]作曲 : 赵雷[00:01.000]作词 : 赵雷[00:20.180]编曲：赵雷 / 喜子[00:21.800]制作人：赵雷 / 喜子 / 姜北生[00:23.270]贝斯：张岭[00:24.720]鼓：贝贝[00:25.630]电琴：喜子[00:26.660]箱琴：赵雷[00:27.480]MIDI：喜子 / 赵雷[00:28.430]童声：朵儿[00:29.660]和声：赵雷 / 旭东[00:47.910]阿刁 住在西藏的某个地方[00:56.760]秃鹫一样 栖息在山顶上[01:06.890]阿刁 大昭寺门前铺满阳光[01:15.680]打一壶甜茶 我们聊着过往[01:45.430]阿刁 你总把自己打扮的像[01:54.160]男孩子一样 可比格桑还顽强[02:04.320]阿刁 狡猾的人有千百种笑[02:13.370]你何时下山 记得带上卓玛刀[02:22.990]灰色帽檐下 凹陷的脸颊[02:27.600]你很少说话 简单的回答[02:32.410]明天在哪里 谁会在意你[02:37.180]即使死在路上格桑 妮可 阿七 石榴 东措 大冰 安子 浮游 赵雷 三文鱼 浩子 小友 卓玛 阿达 彬子 回锅肉[03:21.350]阿刁 明天是否能吃顿饱饭[03:30.460]你已习惯 饥饿是一种信仰[03:40.530]阿刁 不会被现实磨平棱角[03:49.380]你不是这世界的人 没必要在乎真相[03:59.260]命运多舛 痴迷 淡然[04:03.590]挥别了青春 数不尽的车站[04:08.350]甘于平凡却不甘平凡的腐烂[04:13.260]你是阿刁 你是自由的鸟[04:37.270]灰色帽檐下 凹陷的脸颊[04:41.840]你很少说话 简单的回答[04:46.570]明天在哪里 谁会在意你[04:51.460]即使死在路上[04:56.300]命运多舛 痴迷 淡然[05:00.930]挥别了青春 数不尽的车站[05:05.750]甘于平凡却不甘平凡的腐烂[05:10.610]你是阿刁[05:45.320]阿刁 爱情是粒悲伤的种子[05:53.750]你是一棵树 你永远都不会枯\n"
	},
	{
		"name":"牧马城市",
		"singer":"毛不易",
		"time":"4:18",
		"img":"https://imgessl.kugou.com/uploadpic/softhead/400/20210621/20210621142437964.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E7%89%A7%E9%A9%AC%E5%9F%8E%E5%B8%82%20-%20%E6%AF%9B%E4%B8%8D%E6%98%93.mp3",
		"lrc":"[id:$00000000][ar:毛不易][ti:牧马城市 (3D环绕版)][by:][hash:61f7d99eb276d1da075854a03c7e5288][al:][sign:][qq:][total:252682][offset:0][00:00.07]毛不易 - 牧马城市 (3D环绕版)[00:00.44]作词：段思思[00:00.60]作曲：谭旋[00:29.90]游历在大街和楼房[00:32.94]心中是骏马和猎场[00:36.13]最了不起的脆弱迷惘[00:39.42]不过就这样[00:42.71]天外有天有无常[00:45.81]山外有山有他乡[00:49.12]跌了撞了[00:50.48]心还是回老地方[00:55.33]游离于城市的痛痒[00:58.17]错过了心爱的姑娘[01:01.46]宣告世界的那个理想[01:04.72]已不知去向[01:07.90]为所欲为是轻狂[01:11.00]防不胜防是悲伤[01:14.19]后来才把成熟当偏方[01:19.86]当所有想的说的要的爱的[01:23.60]都挤在心脏[01:26.84]行李箱里装不下我[01:30.04]想去的远方[01:33.07]这来的去的给的欠的[01:36.26]算一种褒奖[01:39.39]风吹草低见惆怅[01:40.97]抬头至少还有光[02:11.08]游历在大街和楼房[02:14.07]心中是骏马和猎场[02:17.16]最了不起的脆弱迷惘[02:20.51]不过就这样[02:23.94]天外有天有无常[02:26.77]山外有山有他乡[02:30.01]跌了撞了[02:31.58]心还是回老地方[02:36.23]游离于城市的痛痒[02:39.22]错过了心爱的姑娘[02:42.51]宣告世界的那个理想[02:45.75]已不知去向[02:49.00]为所欲为是轻狂[02:52.13]防不胜防是悲伤[02:55.22]后来才把成熟当偏方[03:01.14]当所有想的说的要的爱的[03:04.68]都挤在心脏[03:07.87]行李箱里装不下我[03:11.06]想去的远方[03:13.99]这来的去的给的欠的[03:17.38]算一种褒奖[03:20.42]风吹草低见惆怅[03:22.04]抬头至少还有光[03:26.19]把烦恼痛了[03:27.56]吞了认了算了[03:30.01]不对别人讲[03:33.16]谁还没有辜负几段[03:36.35]昂贵的时光[03:39.34]若男孩笑了哭了累了[03:42.68]说要去流浪[03:45.72]留下大人的模样[03:47.34]看岁月剑拔弩张[03:52.10]总会有个人成为你的远方\n"
	},
	{
		"name":"姑娘别等了",
		"singer":"小阿枫",
		"time":"4:04",
		"img":"http://p2.music.126.net/3Ynbk45XNH-aERlt7gM9xw==/109951165892266636.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E5%A7%91%E5%A8%98%E5%88%AB%E7%AD%89%E4%BA%86.mp3",
		"lrc":"[00:00.000] 作词 : 蓝乐[00:01.000] 作曲 : 蓝乐[00:02.000] 编曲 : 陈煜[00:03.000] 制作人 : 蓝乐[00:24.42]你脸上月光的颜色 那晚酒后的诉说[00:33.85]安安静静的小溪 像你眼里的清澈[00:43.20]那些无知的承诺 还在夜空中闪烁[00:52.16]他拿什么去爱你  如果没有 如果[01:02.85]我的姑娘你别等了[01:06.94]他已经坐上那趟远去的列车[01:11.40]原谅在转过身以后他没有回头[01:16.16]是害怕你也哭红了眼眸[01:20.60]我的姑娘你别等了[01:24.83]他可能给不起你想要的生活[01:29.55]今生也只能够剩下这深深的经过[01:34.50]算不算值得[02:00.18]那些无知的承诺 还在夜空中闪烁[02:09.11]他拿什么去爱你  如果没有 如果[02:19.72]我的姑娘你别等了[02:23.91]他已经坐上那趟远去的列车[02:28.40]原谅在转过身以后他没有回头[02:33.24]是害怕你也哭红了眼眸[02:37.70]我的姑娘你别等了[02:41.51]他可能给不起你想要的生活[02:46.47]今生也只能够剩下这深深的经过[02:51.47]算不算值得[02:58.24]我的姑娘你别等了[03:02.18]他已经坐上那趟远去的列车[03:06.82]原谅在转过身以后他没有回头[03:11.49]是害怕你也哭红了眼眸[03:16.01]我的姑娘你别等了[03:20.29]他可能给不起你想要的生活[03:24.76]今生也只能够剩下这深深的经过[03:29.80]算不算值得[03:36.93]可能是我不值得[03:38.937] 和声 : 孙凡凡[03:41.781] 吉他 : 杨春[03:44.625] 手鼓 : 李宇轩[03:47.469] 民乐 : 张丛亮[03:50.313] 混音/母带 : Vast Music Studio[03:53.157] 监制 : 孙海亮/萧跃[03:56.001] 出品 : 火星娱乐[03:58.845] 发行 : 讯飞音乐 X Hot Cake Studio[04:01.689] 营销 : 讯飞音乐 X Hot Cake Studio[04:04.533] 未经著作权人书面许可，不得以任何方式（包括翻唱、翻录等）使用\n"
	},
	{
		"name":"故乡",
		"singer":"许巍",
		"time":"5:17",
		"img":"http://p2.music.126.net/2CSVBewDknbP3c9m_G9Qeg==/112150186046323.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E8%AE%B8%E5%B7%8D%20-%20%E6%95%85%E4%B9%A1.mp3",
		"lrc":"[00:00.000] 作词 : 许巍[00:01.000] 作曲 : 许巍[00:53.92][00:53.92]天边夕阳再次映上 我的脸庞[01:01.17]再次映着我那 不安的心[01:07.96]这是什么地方 依然是如此的荒凉[01:14.76]那无尽的旅程 如此漫长[01:21.04]我是永远向着远方 独行的浪子[01:27.74]你是茫茫人海之中 我的女人[01:34.87]在异乡的路上 每一个寒冷的夜晚[01:41.81]这思念它如刀 让我伤痛[01:47.56]总是在梦里 我看到你无助的双眼[01:54.44]我的心 又一次被唤醒[02:00.95]我站在这里 想起和你曾经离别情景[02:07.84]你站在 人群中间 那么孤单[02:14.72]那是你 破碎的心[02:21.49]我的心 却那么狂野[02:56.17][02:56.17]你在我的心里 永远是故乡[03:02.53]你总为我独自守候 沉默等待[03:09.55]在异乡的路上 每一个寒冷的夜晚[03:16.45]这思念它如刀 让我伤痛[03:22.30]总是在梦里 我看到你无助的双眼[03:28.90]我的心 又一次被唤醒[03:35.59]我站在这里 想起和你曾经离别情景[03:42.53]你站在 人群中间 那么孤单[03:49.09]那是你 破碎的心[03:56.08]我的心 却那么狂野[04:02.78]总是在梦里 我看到你无助的双眼[04:09.46]我的心 又一次被唤醒[04:16.18]总是在梦里 看到自己走在归乡路上[04:23.28]你站在 夕阳下面 容颜娇艳[04:29.87]那是你 衣裙漫飞[04:36.47]那是你 温柔如水\n"
	},
	{
		"name":"消愁",
		"singer":"毛不易",
		"time":"4:21",
		"img":"http://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E6%B6%88%E6%84%81.mp3",
		"lrc":"[00:00.000] 作词 : 毛不易[00:00.549] 作曲 : 毛不易[00:01.098] 编曲 : 赵兆[00:01.647] 制作人 : 李健/赵兆[00:02.196][00:31.626]当你走进这欢乐场[00:35.809]背上所有的梦与想[00:40.096]各色的脸上各色的妆[00:44.392]没人记得你的模样[00:47.926][00:48.679]三巡酒过你在角落[00:52.947]固执的唱着苦涩的歌[00:57.198]听它在喧嚣里被淹没[01:01.143]你拿起酒杯对自己说[01:05.570][01:07.825]一杯敬朝阳 一杯敬月光[01:11.847]唤醒我的向往 温柔了寒窗[01:15.599]于是可以不回头地逆风飞翔[01:20.421]不怕心头有雨 眼底有霜[01:23.992][01:24.774]一杯敬故乡 一杯敬远方[01:28.977]守着我的善良 催着我成长[01:32.813]所以南北的路从此不再漫长[01:37.599]灵魂不再无处安放[01:44.062][02:03.441]躁动不安的座上客[02:07.561]自以为是地表演着[02:12.099]伪装着 舞蹈着 疲惫着[02:15.645]你拿起酒杯对自己说[02:20.495]一杯敬朝阳 一杯敬月光[02:24.753]唤醒我的向往 温柔了寒窗[02:28.531]于是可以不回头地逆风飞翔[02:33.196]不怕心头有雨 眼底有霜[02:36.900][02:37.500]一杯敬故乡 一杯敬远方[02:41.855]守着我的善良 催着我成长[02:45.616]所以南北的路从此不再漫长[02:50.448]灵魂不再无处安放[02:55.697][03:01.235]一杯敬明天 一杯敬过往[03:05.448]支撑我的身体 厚重了肩膀[03:09.182]虽然从不相信所谓山高水长[03:14.006]人生苦短何必念念不忘[03:17.951][03:18.366]一杯敬自由 一杯敬死亡[03:22.599]宽恕我的平凡 驱散了迷惘[03:26.365]好吧天亮之后总是潦草离场[03:31.133]清醒的人最荒唐[03:37.806]清醒的人最荒唐[03:47.998][03:48.450]手风琴Accordion：许笑男[03:48.639]键盘Keyboard：赵兆[03:48.800]吉他Guitar：薛峰[03:48.997]贝斯Bass：韩阳[03:49.170]鼓Drum：武勇恒[03:49.336]合音Backing Vocal：梁古驰[03:49.554]弦乐Strings：国际首席爱乐乐团International  Philharmonic Orchestra[03:49.730]Mixing：李游[03:49.916]母带Mastering：Joe LaPorta .（Sterling . NY）[03:50.121]录音棚Studio：55TEC . Beijing[03:50.298]录音Recording：李游 李杨[03:50.488]人声录音Vocal Recording：李杨[03:50.687]人声编辑Vocal Editing：李杨[03:50.863]录音助理Recording Assistants：郭舒文 邢铜[03:51.014]音乐制作发行produced and distributed: 哇唧唧哇×智慧大狗\n"
	},
	{
		"name":"胡广生",
		"singer":"任素汐",
		"time":"3:35",
		"img":"http://p2.music.126.net/fG0T1hnM9EEmkYSo4Ey97A==/109951163669946483.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%B0%91%E8%B0%A3/%E8%83%A1%E5%B9%BF%E7%94%9F.mp3",
		"lrc":"[00:00.00] 作词 : 任素汐[00:01.00] 作曲 : 任素汐[00:02.00] 编曲 : 刘鑫磊[00:03.00] 制作人 : 刘鑫磊[00:04.00] 吉他 : Shamril Salleh[00:05.00] 大提琴 : 宋昭 · 阿伊斯[00:06.00] 混音 : 刘鑫磊[00:07.00] 母带 : 刘鑫磊（RMB Studio爆棚@奔跑怪物）[00:08.00] 录音棚 : RMB Studio爆棚@奔跑怪物[00:09.000] 录音 : 刘鑫磊[00:10.000] 音乐营销 : 奔跑怪物[00:11.000] 发行 : 奔跑怪物[00:25.16]一个乌的黑团团[00:27.73]高高哩哑哑哩[00:30.51]两个魂喘着粗气[00:33.43]烟尘四起[00:36.19]你认得我吗[00:38.91]跟我说那么多句[00:41.97]你要哩尊严[00:44.23]我熟悉[00:47.85]桥上走的哪一句[00:50.48]我没到你别起韵[00:53.39]你就把头转过去[00:56.21]莫给我消息[00:59.10]我欠你啥子嘛[01:01.91]我啥子都不欠你的[01:04.62]你问我真哩迈真哩[01:10.69]走走停停不如定定[01:16.23]凄凄切切说句谢谢[01:22.02]等等不必等等[01:27.81]等等别等等[01:56.40]桥上走的哪一句[01:59.02]我没到你别起韵[02:01.94]你就把头转过去[02:04.76]莫给我消息[02:07.55]我欠你啥子嘛[02:10.34]我啥子都不欠你的[02:13.04]你问我真哩迈真哩[02:19.18]走走停停不如定定[02:24.81]凄凄切切说句谢谢[02:30.69]等等不必等等[02:36.39]等等别等等[02:42.06]等等不必等等[02:47.76]等等别等等[03:15.55]下个清明我去音书祭你[03:23.24]还听 还静\n"
	}
],
/*分类3《时光交错》*/
[
	
	{
		"basic":true,
		"name":"时光交错",
		"singer":"none",
		"img":"https://p1.music.126.net/0gjNH6eAafNMD7wyUISQGQ==/1420569026567645.jpg"
	},
	{
		"name":"晚风心里吹",
		"singer":"阿梨粤",
		"img":"http://p2.music.126.net/3w-ekH3z77-HvqOJ3fCPVw==/109951167297344637.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E6%99%9A%E9%A3%8E%E5%BF%83%E9%87%8C%E5%90%B9.mp3",
		"time":"3:06",
		"lrc":"[00:00.00] 作词 : 彭圆圆/邓澄/三石[00:00.00] 作曲 : 二白/刘涛[00:00.01] 编曲 : 谭侃侃[00:00.02] 制作人 : 刘涛/谭侃侃[00:00.33]愿晚风心里吹 吹散我的泪[00:04.54]似风筝把你追[00:07.83]愿等你一辈子 真情留住你[00:11.71]梦里归家那一扇灯[00:14.81][00:23.31]心中所属唯独你[00:26.10]不管天似海深[00:27.81]今生再没遗憾[00:30.50]即使分开仍念记[00:33.40]伤心得你恻隐[00:35.30]温馨我这半生[00:37.86][00:38.11]若某天 风花雪月似金[00:41.16]我倾心 只等你回来时贴近[00:45.21]俗世间 江山雨落无尽放任[00:48.94]与沧海 未尽缘分[00:53.94][00:54.90]愿晚风将我吹 吹进你心内[00:58.67]晚灯映花正开[01:02.26]月映照伤我心 痴情难自禁[01:06.15]夜半莺歌叹息我孤身[01:09.72]愿晚风心里吹 吹散我的泪[01:13.69]似风筝把你追[01:17.09]愿等你一辈子 真情留住你[01:21.17]梦里归家那一扇灯[01:24.78][01:40.30]心中所属唯独你[01:42.92]不管分隔千里[01:44.67]痴心也在原地[01:47.44]旧日片段曾属你[01:50.26]紧紧拥抱不弃[01:52.08]终于再没逃避[01:54.19][01:54.76]若某天 风花雪月如泪[01:58.49]我等你 悲欢过后 如愿再聚[02:02.22]俗世间 江山雨落 无尽唏嘘[02:05.89]与沧海 一生回味[02:10.91][02:11.53]愿晚风将我吹 吹进你心内[02:15.66]晚灯映花正开[02:18.94]月映照伤我心 痴情难自禁[02:22.88]夜半莺歌叹息我孤身[02:26.50]愿晚风心里吹 吹散我的泪[02:30.58]似风筝把你追[02:34.00]愿等你一辈子 真情留住你[02:37.93]梦里归家那一扇灯[02:41.64][02:41.69]愿等你一辈子 真情留住你[02:45.49]梦里归家那一扇灯[02:49.47][03:00.00][03:00.33] 吉他 : 谭侃侃[03:00.67] 钢琴 : 谭侃侃[03:01.01] 混音工程师 : 李水泽宁[03:01.35] 母带后期混音师 : 李水泽宁[03:01.69] 和声 : 夏初安[03:02.02] 和声编写 : 夏初安[03:02.36] 配唱制作人 : 谭侃侃[03:02.70] 录音师 : 谭笑聪[03:03.04] 人声编辑 : 谭侃侃[03:03.38] 视觉设计 : kidult.[03:03.71] 监制 : 陶诗[03:04.05] 推广统筹 : 左三好[03:04.39] 混音室 : WaterSound Studio[03:04.73] 录音棚 : 好乐无荒录音棚（北京）[03:05.07] 企划 : 好乐无荒（长沙）[03:05.40] 制作公司 : 好乐无荒（北京）[03:05.74] OP : 好乐无荒[03:06.08] SP : 索尼音乐版权代理（北京）有限公司[03:06.42] （本作品声明：著作权权利保留 未经许可 不得使用）\n"
	},
	{
		"name":"约定",
		"singer":"周蕙",
		"img":"http://p2.music.126.net/iUWb3s-Q-rGNQGhfDoWwYg==/109951165994895269.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%BA%A6%E5%AE%9A.mp3",
		"time":"4:16",
		"lrc":"[00:00.000] 作词 : 姚若龙[00:00.013] 作曲 : 陈小霞[00:00.026] 编曲 : 陈飞午[00:00.40][00:27.52]远处的钟声回荡在雨里[00:33.79]我们在屋檐底下牵手听[00:39.89]幻想教堂里头那场婚礼[00:45.46]是为祝福我俩而举行[00:51.10][00:51.65]一路从泥泞走到了美景[00:57.51]习惯在彼此眼中找勇气[01:03.84]累到无力总会想吻你[01:09.05]才能忘了情路艰辛[01:17.34][01:18.11]你我约定难过的往事不许提[01:24.13]也答应[01:24.91]永远都不让对方担心[01:30.42]要做快乐的自己[01:33.47][01:34.25]照顾自己[01:36.47]就算某天一个人孤寂[01:42.14]你我约定一争吵很快要喊停[01:48.14]也说好没有秘密 彼此很透明[01:54.52]我会好好的爱你[01:58.43]傻傻爱你[02:00.40]不去计较公平不公平[02:07.13][02:24.60]一路从泥泞走到了美景[02:30.48]习惯在彼此眼中找勇气[02:36.71]累到无力总会想吻你[02:42.13]才能忘了情路艰辛[02:50.43][02:51.03]你我约定难过的往事不许提[02:57.19]也答应[02:58.00]永远都不让对方担心[03:03.56]要做快乐的自己[03:07.34]照顾自己[03:09.51]就算某天一个人孤寂[03:15.12]你我约定一争吵很快要喊停[03:21.13]也说好没有秘密 彼此很透明[03:27.40]我会好好的爱你[03:30.49][03:31.48]傻傻爱你[03:33.28]不去计较公平不公平[03:39.50]我会好好的爱你[03:42.95][03:43.82]傻傻爱你[03:45.72]不去计较公平不公平\n"
	},
	{
		"name":"小小",
		"singer":"容祖儿",
		"img":"http://p1.music.126.net/WDcYhuw0EejVMVCxgFl0Bg==/120946279068536.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%B0%8F%E5%B0%8F.mp3",
		"time":"4:24",
		"lrc":"[00:00.00] 作词 : 方文山[00:01.00] 作曲 : 周杰伦[00:02.00] 编曲 : 林迈可[00:03.00] 监制 : 林迈可[00:16.29]回忆像个说书的人[00:20.16]用充满乡音的口吻[00:24.28]跳过水坑 绕过小村[00:28.22]等相遇的缘分[00:32.28]你用泥巴捏一座城[00:36.09]说将来要娶我进门[00:40.22]转多少身 过几次门[00:44.18]虚掷青春[00:48.22]小小的誓言还不稳[00:52.16]小小的泪水还在撑[00:55.78]稚嫩的唇[00:59.44]在说离分[01:03.41]我的心里从此住了一个人[01:07.85]曾经模样小小的我们[01:11.91]那年你搬小小的板凳[01:15.91]为戏入迷我也一路跟[01:19.72]我在找那个故事里的人[01:23.85]你是不能缺少的部分[01:27.85]你在树下小小的打盹[01:31.91]小小的我傻傻等[02:14.35]回忆像个说书的人[02:18.22]用充满乡音的口吻[02:22.22]跳过水坑 绕过小村[02:26.22]等相遇的缘分[02:30.22]你用泥巴捏一座城[02:34.16]说将来要娶我进门[02:38.22]转多少身 过几次门[02:42.16]虚掷青春[02:46.18]小小的感动雨纷纷[02:50.22]小小的别扭惹人疼[02:53.72]小小的人[02:57.37]还不会吻[03:01.34]我的心里从此住了一个人[03:05.85]曾经模样小小的我们[03:09.91]那年你搬小小的板凳[03:13.91]为戏入迷我也一路跟[03:17.72]我在找那个故事里的人[03:21.91]你是不能缺少的部分[03:25.85]你在树下小小的打盹[03:29.78]小小的我傻傻等[03:37.28]我的心里从此住了一个人[03:41.85]曾经模样小小的我们[03:45.78]当初学人说爱念剧本[03:49.85]缺牙的你发音却不准[03:53.59]我在找那个故事里的人[03:57.85]你是不能缺少的部分[04:01.91]小小的手牵小小的人[04:05.85]守着小小的永恒\n"
	},
	{
		"name":"梦醒时分",
		"singer":"林忆莲",
		"img":"http://p1.music.126.net/DwgWuxtWczcdg2FJ9RFQ7A==/78065325589712.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E6%A2%A6%E9%86%92%E6%97%B6%E5%88%86.mp3",
		"time":"3:10",
		"lrc":"[00:00.00] 作词 : 李宗盛[00:01.00] 作曲 : 李宗盛[00:16.58]你说你爱了不该爱的人[00:21.57]你的心中满是伤痕[00:25.39]你说你犯了不该犯的错[00:29.66]心中满是悔恨[00:33.50]你说你尝尽了生活的苦[00:36.75]找不到可以相信的人[00:40.59]你说感到万分沮丧[00:44.39]甚至开始怀疑人生[00:49.74]早知道伤心总是难免的[00:53.88]你又何苦一往情深[00:57.62]因为爱情总是难舍难分[01:01.34]何必在意那一点点温存[01:04.86]要知道伤心总是难免的[01:08.78]在每一个梦醒时分[01:12.53]有些事情你现在不必问[01:16.27]有些人你永远不必等[02:18.70]早知道伤心总是难免的[02:22.24]你又何苦一往情深[02:25.87]因为爱情总是难舍难分[02:29.79]何必在意那一点点温存[02:33.37]要知道伤心总是难免的[02:37.46]在每一个梦醒时分[02:41.26]有些事情你现在不必问[02:45.12]有些人你永远不必等[02:54.14]不必等\n"
	},
	{
		"name":"当爱已成往事",
		"singer":"李宗盛/林忆莲",
		"img":"http://p1.music.126.net/a1uV59DV8OJzn4OVXRlLPw==/109951163071276550.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%BD%93%E7%88%B1%E5%B7%B2%E6%88%90%E5%BE%80%E4%BA%8B.mp3",
		"time":"4:40",
		"lrc":"[00:00.00] 作词 : 李宗盛[00:01.00] 作曲 : 李宗盛[00:02.00] 编曲 : Mac Chew[00:26.37]往事不要再提[00:30.98]人生已多风雨[00:30.06][00:35.07]纵然记忆抹不去[00:33.85][00:37.17]爱与恨都还在心里[00:42.35]真的要断了过去[00:40.91][00:46.35]让明天好好继续[00:45.57][00:50.59]你就不要再苦苦追问我的消息[00:49.37][00:58.73]爱情它是个难题[00:56.05][01:03.34]让人目眩神迷[01:02.28][01:07.96]忘了痛或许可以[01:06.03][01:09.84]忘了你却太不容易[01:14.89]你不曾真的离去[01:13.08][01:18.69]你始终在我心里[01:17.96][01:23.46]我对你仍有爱意[01:21.52][01:25.32]我对自己无能为力[01:30.35]因为我仍有梦[01:28.72][01:33.87]依然将你放在我心中[01:38.31]总是容易被往事打动[01:37.54][01:42.25]总是为了你心痛[01:41.71][01:45.56]别留恋岁月中[01:49.53]我无意的柔情万种[01:48.94][01:53.67]不要问我是否再相逢[01:53.00][01:57.78]不要管我是否言不由衷[02:01.10]为何你不懂[02:04.04]别说我不懂[02:05.37]只要有爱就有痛[02:08.02]有爱就有痛[02:09.87]有一天你会知道[02:13.03]人生没有我并不会不同[02:12.29][02:15.88]没有你会不同[02:17.13]人生已经太匆匆[02:20.77]我好害怕总是[02:19.85][02:22.28]泪眼朦胧[02:25.12]忘了我就没有痛[02:27.17]将往事留在风中[02:36.39]往事不要再提[02:31.38][02:40.37]人生已多风雨[02:39.30][02:44.50]纵然记忆抹不去[02:43.07][02:46.56]爱与恨都还在心里[02:51.47]真的要断了过去[02:50.43][02:55.43]让明天好好继续[02:54.88][03:00.05]你就不要再苦苦追问我的消息[02:58.39][03:22.47]为何你不懂[03:06.91][03:25.76]别说我不懂[03:26.88]只要有爱就有痛[03:29.21]有爱就有痛[03:31.15]有一天你会知道[03:34.30]人生没有我并不会不同[03:33.50][03:37.27]没有你会不同[03:38.56]人生已经太匆匆[03:41.97]我好害怕总是[03:41.26][03:43.61]泪眼朦胧[03:46.49]忘了我就没有痛[03:45.59][03:48.47]将往事留在风中[03:53.66]为何你不懂[03:52.27][03:56.29]别说我不懂[03:57.63]只要有爱就有痛[04:00.19]有爱就有痛[04:01.95]有一天你会知道[04:05.23]人生没有我并不会不同[04:04.48][04:08.63]没有你会不同[04:09.77]人生已经太匆匆[04:12.96]我好害怕总是[04:12.17][04:14.32]泪眼朦胧[04:17.20]忘了我就没有痛[04:16.62][04:21.36]忘了你也没有用[04:20.46][04:23.63]将往事留在风中[04:22.64]\n"
	},
	{
		"name":"不必在乎我是谁",
		"singer":"林忆莲",
		"img":"http://p1.music.126.net/4U1ZESzGMLI7DGaO9y_5AQ==/109951164973485450.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E4%B8%8D%E5%BF%85%E5%9C%A8%E4%B9%8E%E6%88%91%E6%98%AF%E8%B0%81.mp3",
		"time":"4:20",
		"lrc":"[00:00.00] 作词 : 李宗盛[00:01.00] 作曲 : 李宗盛[00:02.00] 编曲 : Mac Chew[00:30.17]我觉得有点累[00:34.51]我想我缺少安慰[00:38.70]我的生活如此乏味[00:42.83]生命像花一样枯萎[00:46.99]我整夜不能睡[00:50.90]可能是因为烟和咖啡[00:55.15]如果是因为没有人陪[00:59.27]我愿意敞开心扉[01:03.79]几次真的想让自己醉[01:07.66]让自己远离那许多恩怨是非[01:11.84]让隐藏已久的渴望随风飞[01:15.98]噢忘了我是谁[01:19.27]女人若没人爱多可悲[01:24.21]就算是有人听我的歌会流泪[01:28.38]我还是真的期待有人追[01:32.68]何必在乎我是谁[01:40.65]我想你说的对[01:44.92]寂寞使人憔悴[01:48.95]是寂寞使人心碎[01:53.23]恋爱中的女人才美[01:57.28]我想我做的对[02:01.24]我想我不会后悔[02:05.67]不管春风怎样吹[02:09.75]让我先好好爱一回[02:42.01]几次真的想让自己醉[02:47.34]让自己远离那许多恩怨是非[02:51.53]让隐藏已久的渴望随风飞[02:55.67]噢忘了我是谁[02:58.97]女人若没人爱多可悲[03:03.88]就算是有人听我的歌会流泪[03:08.09]我还是真的期待有人追[03:12.41]何必在乎我是谁[03:16.54]几次真的想让自己醉[03:20.46]让自己远离那许多恩怨是非[03:24.64]让隐藏已久的渴望随风飞[03:28.68]请忘了我是谁[03:32.06]女人若没人爱多可悲[03:36.98]就算是有人听我的歌会流泪[03:41.21]我还是真的期待有人追[03:45.54]何必在乎我是谁[03:51.37]我想我做的对[03:55.41]我想我不会后悔[03:59.84]不管春风怎样吹[04:03.75]让我先好好爱一回\n"
	},
	{
		"name":"问",
		"singer":"林忆莲",
		"img":"http://p2.music.126.net/DwgWuxtWczcdg2FJ9RFQ7A==/78065325589712.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E9%97%AE.mp3",
		"time":"3:48",
		"lrc":"[00:00.00] 作词 : 李宗盛[00:01.00] 作曲 : 李宗盛[00:17.70]谁让你心动[00:21.10]谁让你心痛[00:24.68]谁会让你偶尔想要拥他在怀中[00:32.17]谁又在乎你的梦[00:34.63]谁说你的心思他会懂[00:38.76]谁为你感动[00:45.42]如果 女人总是等到夜深[00:53.50]无悔付出青春 他就会对你真[01:00.99]是否女人永远不要多问[01:07.30]她最好永远天真为他所爱的人[01:18.34]谁为你心动[01:21.38]谁让你心痛[01:24.95]谁会让你偶尔想要拥他在怀中[01:31.86]谁又在乎你的梦[01:34.82]谁说你的心思他会懂[01:38.78]谁为你感动[01:44.97]只是女人容易一往情深[01:51.19]总是为情所困[01:54.69]终于越陷越深[01:59.69]可是女人爱是她的灵魂[02:05.29]她可以奉献一生[02:08.87]为她所爱的人[02:48.82][02:51.68]如果女人总是等到夜深[02:57.43]无悔付出青春[03:00.95]他就会对你真[03:05.36]只是女人容易一往情深[03:11.73]固执为情所困[03:15.23]终于越陷越深[03:21.09]可是女人爱是她的灵魂[03:26.06]她可以奉献一生[03:29.92]为她所爱的人\n"
	},
	{
		"name":"鬼迷心窍",
		"singer":"李宗盛",
		"img":"http://p2.music.126.net/n0awsXuKsXtclDwHgZi7gw==/100055558132888.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E9%AC%BC%E8%BF%B7%E5%BF%83%E7%AA%8D.mp3",
		"time":"4:16",
		"lrc":"[00:00.00] 作词 : 李宗盛[00:01.00] 作曲 : 李宗盛[00:02.00] 编曲 : Jenny Chin[00:39.89]曾经真的以为人生就这样了[00:44.19]平静的心拒绝再有浪潮[00:48.33]斩了千次的情丝却断不了[00:52.31]百转千折它将我围绕[00:55.48][00:56.32]有人问我你究竟是哪里好[01:00.15]这么多年我还忘不了[01:04.24]春风再美也比不上你的笑[01:08.09]没见过你的人不会明了[01:11.61][01:12.44]是鬼迷了心窍也好[01:16.19]是前世的姻缘也好[01:20.36]然而这一切已不再重要[01:24.35]如果你能够重回我怀抱[01:28.28][01:28.60]是命运的安排也好[01:32.36]是你存心的捉弄也好[01:36.31]然而这一切已不再重要[01:40.22]我愿意随你到天涯海角[01:44.91][01:46.36]虽然岁月总是匆匆的催人老[01:50.13]虽然情爱总是让人烦恼[01:54.32]虽然未来如何不能知道[01:58.17]现在说再见会不会太早[02:02.40][02:34.16]曾经真的以为人生就这样了[02:38.05]平静的心拒绝再有浪潮[02:42.24]斩了千次的情丝却断不了[02:46.19]百转千折它将我围绕[02:49.43][02:50.23]有人问我你究竟是哪里好[02:54.09]这么多年我还忘不了[02:58.26]春风再美也比不上你的笑[03:02.02]没见过你的人不会明了[03:05.58][03:06.52]是鬼迷了心窍也好[03:10.32]是前世的姻缘也好[03:14.28]然而这一切已不再重要[03:18.27]如果你能够重回我怀抱[03:22.00][03:22.49]是命运的安排也好[03:26.28]是你存心的捉弄也好[03:30.22]然而这一切已不再重要[03:34.04]我愿意随你到天涯海角[03:39.61][03:40.56]虽然岁月总是匆匆的催人老[03:44.01]虽然情爱总是让人烦恼[03:48.25]虽然未来如何不能知道[03:52.11]现在说再见会不会太早[03:58.82]\n"
	},
	{
		"name":"为你我受冷风吹",
		"singer":"林忆莲",
		"img":"http://p2.music.126.net/5qWWTetRGYBc-ktiJLZsCw==/109951163076136658.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E4%B8%BA%E4%BD%A0%E6%88%91%E5%8F%97%E5%86%B7%E9%A3%8E%E5%90%B9.mp3",
		"time":"4:19",
		"lrc":"[00:00.00] 作词 : 李宗盛[00:01.00] 作曲 : 李宗盛[00:02.00] 编曲 : Mac Chew[00:33.49]为你我受冷风吹[00:37.28]寂寞时候流眼泪[00:41.38]有人问我是与非说是与非[00:45.95]可是谁又真的关心谁[00:49.56]若是爱已不可为[00:53.13]你明白说吧无所谓[00:57.29]不必给我安慰[00:59.40]何必怕我伤悲[01:01.78]就当我从此收起真情谁也不给[01:06.14]我会试着放下往事管它过去有多美[01:13.88]也会试着不去想起你如何用爱将我包围[01:20.54]那深情的滋味[01:25.78]但愿我会就此放下往事忘了过去有多美[01:34.04]不盼缘尽仍留慈悲虽然我曾经这样以为[01:40.54]我真的这样以为[02:15.54]为你我受冷风吹[02:19.52]寂寞时候流眼泪[02:23.47]有人问我是与非说是与非[02:28.33]可是谁又真的关心谁[02:31.79]若是爱已不可为[02:35.53]你明白说吧无所谓[02:39.56]不必给我安慰[02:41.86]何必怕我伤悲[02:44.07]就当我从此收起真情谁也不给[02:48.42]我会试着放下往事管它过去有多美[02:56.09]也会试着不去想起你如何用爱将我包围[03:02.62]那深情的滋味[03:07.78]但愿我会就此放下往事忘了过去有多美[03:16.06]不盼缘尽仍留慈悲虽然我曾经这样以为[03:22.54]我真的这样以为[03:35.89]为你我受冷风吹[03:39.97]寂寞时候流眼泪[03:44.40]有人问我是与非说是与非[03:49.59]可是谁又真的关心谁关心谁会关心谁[04:00.51]谁会关心谁\n"
	},
	{
		"name":"千千阙歌",
		"singer":"陈慧娴",
		"img":"http://p1.music.126.net/tzmGFZ0-DPOulXS97H5rmA==/18712588395102549.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%8D%83%E5%8D%83%E9%98%99%E6%AD%8C.mp3",
		"time":"4:59",
		"lrc":"[ar:陈慧娴][ti:千千阙歌][by:ACE老蔡][hash:b2ddeccd3c864b90ae6c38ab6baac214][al:宝丽金30年精选集][sign:][qq:][total:302602][offset:0][00:00.50]千千阙歌 - 陈慧娴[00:02.24]作词：林振强[00:03.59]作曲：马饲野康二[00:05.27]编曲：卢东尼[00:06.76]制作人：欧丁玉、陈永明、陈慧娴[00:15.64]徐徐回望[00:18.05]曾属于彼此的晚上[00:22.71]红红仍是你[00:25.17]赠我的心中艳阳[00:29.72]如流傻泪[00:32.21]祈望可体恤兼见谅[00:36.77]明晨离别你[00:39.18]路也许孤单得漫长[00:43.84]一瞬间太多东西要讲[00:47.40]可惜即将在各一方[00:50.61]只好深深把这刻尽凝望[00:57.29]来日纵使千千阙歌[01:00.77]飘于远方我路上[01:04.29]来日纵使千千晚星[01:07.74]亮过今晚月亮[01:11.77]都比不起这宵美丽[01:15.29]亦绝不可使我更欣赏[01:18.80]Ah 因你今晚共我唱[01:36.91]Ah[01:58.14]临行临别[02:00.63]才顿感哀伤的漂亮[02:05.20]原来全是你[02:07.66]令我的思忆漫长[02:12.16]何年何月[02:14.72]才又可今宵一样[02:19.35]停留凝望里[02:21.76]让眼睛讲彼此立场[02:26.39]当某天雨点轻敲你窗[02:29.68]当风声吹乱你构想[02:33.05]可否抽空想这张旧模样[02:39.64]来日纵使千千阙歌[02:43.12]飘于远方我路上[02:46.67]来日纵使千千晚星[02:50.22]亮过今晚月亮[02:54.20]都比不起这宵美丽[02:57.77]亦绝不可使我更欣赏[03:01.28]Ah 因你今晚共我唱[03:21.17]Ah 怎都比不起这宵美丽[03:26.02]亦绝不可使我更欣赏[03:29.53]因今宵的我可共你唱[03:36.20]来日纵使千千阙歌[03:39.68]飘于远方我路上[03:43.25]来日纵使千千晚星[03:46.78]亮过今晚月亮[03:50.73]都比不起这宵美丽[03:54.27]亦绝不可使我更欣赏[03:57.83]Ah 因你今晚共我唱[04:04.50]来日纵使千千阙歌[04:07.98]飘于远方我路上[04:11.48]来日纵使千千晚星[04:15.03]亮过今晚月亮[04:19.01]都比不起这宵美丽[04:22.59]都洗不清今晚我所想[04:26.16]因不知哪天再共你唱\n"
	},
	{
		"name":"人生何处不相逢",
		"singer":"陈慧娴",
		"img":"http://p1.music.126.net/JqzX1hS74j6mEYnUbiCl7Q==/109951165992352975.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E4%BA%BA%E7%94%9F%E4%BD%95%E5%A4%84%E4%B8%8D%E7%9B%B8%E9%80%A2.mp3",
		"time":"3:56",
		"lrc":"[ar:陈慧娴][ti:人生何处不相逢][by:][hash:5e0cb513b66338d3975f079d0b452125][al:][sign:][qq:][total:234219][offset:0][00:01.02]陈慧娴 - 人生何处不相逢[00:03.26]作词：简宁[00:04.22]作曲：罗大佑[00:17.54]随浪随风飘荡[00:21.43]随着一生里的浪[00:25.54]你我在重叠那一刹[00:29.04]顷刻各在一方[00:33.46]缘分随风飘荡[00:37.16]缘尽此生也守望[00:41.48]你我在凝望那一刹[00:45.03]心中有泪飘降[00:49.41]纵是告别也交出真心意[00:53.27]默默承受际遇[00:57.53]某月某日也许再可跟你[01:01.24]共聚重拾往事[01:05.39]无奈重遇那天存在永远[01:13.16]他方的晚空更是遥远[01:21.38]谁在黄金海岸[01:24.94]谁在烽烟彼岸[01:29.48]你我在回望那一刹[01:33.00]彼此慰问境况[01:53.45]随浪随风飘荡[01:57.29]随着一生里的浪[02:01.44]你我在重叠那一刹[02:04.94]顷刻各在一方[02:09.46]缘分随风飘荡[02:13.18]缘尽此生也守望[02:17.28]你我在凝望那一刹[02:20.89]心中有泪飘降[02:25.06]纵是告别也交出真心意[02:29.23]默默承受际遇[02:33.54]某月某日也许再可跟你[02:37.15]共聚重拾往事[02:40.85]无奈重遇那天存在永远[02:49.03]他方的晚空更是遥远[02:57.32]谁在黄金海岸[03:01.22]谁在烽烟彼岸[03:04.99]你我在回望那一刹[03:09.05]彼此慰问境况\n"
	},
	{
		"name":"飘雪",
		"singer":"陈慧娴",
		"time":"4:00",
		"img":"http://p2.music.126.net/YDdSfT5JwLBWUWZUGIci5w==/109951166320195956.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E9%A3%98%E9%9B%AA.mp3",
		"lrc":"[id:$00000000][ti:飘雪][00:00.10]飘雪 - 陈慧娴[00:00.20]词：简宁[00:00.30]曲：桑田佳佑[00:30.11]又见雪飘过[00:32.55]飘于伤心记忆中[00:36.68]让我再想你[00:39.20]却掀起我心痛[00:43.27]早经分了手[00:45.77]为何热爱尚情重[00:48.96]独过追忆岁月[00:52.39]或许此生不会懂[00:56.58]又再想起你[00:59.08]抱拥飘飘白雪中[01:03.15]让你心中暖[01:05.77]去驱走我冰冻[01:09.83]冷风催我醒[01:12.52]原来共你是场梦[01:15.71]像那飘飘雪泪下[01:19.15]弄湿冷清的晚空[01:23.21]原来是那么深爱你[01:29.08]此际伴着我[01:31.52]追忆的心痛[01:36.70]又见雪飘过[01:39.02]飘于伤心记忆中[01:43.20]让我再想你[01:45.70]却掀起我心痛[01:49.90]早经分了手[01:52.40]为何热爱尚情重[01:55.71]独过追忆岁月[01:59.20]或许此生不会懂[02:03.15]原来是那么深爱你[02:09.02]此际伴着我[02:11.65]追忆的心痛[02:43.46]又再想起你[02:45.96]抱拥飘飘白雪中[02:50.09]让你心中暖[02:52.40]去驱走我冰冻[02:56.65]冷风催我醒[02:59.15]原来共你是场梦[03:02.27]像那飘飘雪泪下[03:05.77]弄湿冷清的晚空[03:09.90]原来是那么深爱你[03:15.71]此际伴着我[03:18.21]追忆的心痛[03:23.53]原来是那么深爱你[03:28.96]此际伴着我[03:31.40]追忆的心痛\n"
	},
	{
		"name":"月半小夜曲",
		"singer":"陈慧娴",
		"time":"3:45",
		"img":"http://p1.music.126.net/GpOa3myrGFpoBHWRJ1AvCw==/1394180757511518.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E6%9C%88%E5%8D%8A%E5%B0%8F%E5%A4%9C%E6%9B%B2%28Live%29.mp3",
		"lrc":"[id:$00000000][ar:陈慧娴][ti:月半小夜曲(Live)][by:][hash:5437202601da54199df959e614f6f5f8][al:][sign:][qq:][total:225360][offset:0][00:00.98]陈慧娴 - 月半小夜曲(Live)[00:02.80]作词：向雪怀[00:03.82]作曲：河合奈保子[00:25.66]仍然倚在失眠夜[00:29.26]望天边星宿[00:31.99]仍然听见小提琴[00:35.12]如泣似诉再挑逗[00:38.16]为何只剩一弯月[00:41.25]留在我的天空[00:45.19]这晚以后音讯隔绝[00:50.36]人如天上的明月[00:53.75]是不可拥有[00:56.59]情如曲过只遗留[00:59.68]无可挽救再分别[01:02.87]为何只是失望[01:05.76]填密我的空虚[01:09.60]这晚夜没有吻别[01:14.96]仍在说永久想不到是借口[01:21.44]从未意会要分手[01:30.20]但我的心每分每刻[01:33.23]仍然被她占有[01:37.49]她似这月儿仍然是不开口[01:42.39]提琴独奏独奏着[01:45.66]明月半倚深秋[01:49.00]我的牵挂我的渴望直至以后[02:22.34]但我的心每分每刻[02:25.27]仍然被她占有[02:29.52]她似这月儿仍然是不开口[02:34.73]提琴独奏独奏着[02:37.47]明月半倚深秋[02:41.26]我的牵挂我的渴望直至以后[02:46.72]仍在说永久想不到是借口[02:53.05]从未意会要分手[03:02.01]但我的心每分每刻[03:05.12]仍然被她占有[03:09.14]她似这月儿仍然是不开口[03:14.10]提琴独奏独奏着[03:17.13]明月半倚深秋[03:20.83]我的牵挂我的渴望直至以后\n"
	},
	{
		"name":"归来吧",
		"singer":"陈慧娴",
		"time":"4:40",
		"img":"http://p1.music.126.net/YDdSfT5JwLBWUWZUGIci5w==/109951166320195956.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%BD%92%E6%9D%A5%E5%90%A7.mp3",
		"lrc":"[id:$00000000][ar:陈慧娴][ti:归来吧][by:龙儿][hash:63914ffa54ccb35ceda5537652bb8218][al:归来吧][sign:][qq:][total:279000][offset:0][00:00.00]陈慧娴 - 归来吧[00:00.92]作词：郑国江[00:01.68]作曲：陈小霞[00:02.44]编曲：赵增熹[00:32.81]月亮下 想到他[00:39.62]默默地 珠泪下[00:46.76]记起多少旧情话[00:53.70]每段往事升起沉下[00:59.30]看流云 不说话[01:05.76]寂寞吧 苦闷吧[01:13.09]想起当天月明下[01:19.79]两人含笑道傻话[01:26.35]心里的他 快归来吧[01:32.89]这里才是快乐老家[01:39.89]几番离合 再相聚[01:45.97]成功挫败 懒管它[01:52.59]悲哀因有他 快乐为有他[01:59.23]跟他受苦也罢[02:05.66]他知道否 我在想他[02:41.89]心里的他 快归来吧[02:48.50]这里才是快乐老家[02:55.16]几番离合 再相聚[03:01.54]成功挫败 懒管它[03:08.07]悲哀因有他 快乐为有他[03:14.66]跟他受苦也罢[03:21.28]他呀他 哪日归家[03:31.06]心里的他 快归来吧[03:37.60]这里才是快乐老家[03:44.10]Galiahna galiahna[03:50.73]这里才是快乐老家[03:57.30]Galiahna galiahna[04:03.83]这里才是快乐老家\n"
	},
	{
		"name":"初恋情人",
		"singer":"刘小慧",
		"time":"4:40",
		"img":"http://p2.music.126.net/cMwYPd59SipBXbSHG19xTg==/109951165852615208.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%88%9D%E6%81%8B%E6%83%85%E4%BA%BA.mp3",
		"lrc":"[id:$00000000][ar:刘小慧][ti:初恋情人][by:初殇][hash:b42497b158aa1b4fbbbe7a4514165fa0][al:BTB-IN YOUR DREAMS][sign:][qq:][total:284534][offset:0][00:39.40]当你要走的某天[00:41.78]请不必慰问[00:43.86]常道初恋终必分手 总会变心[00:48.08]当你要走的某天[00:50.94]也不必抱憾[00:53.04]让我他朝好好追忆 哪需遗憾[00:57.80]爱 永远有些缺憾[01:02.42]不必找出那原因[01:06.91]爱 永远有些悔恨[01:11.53]可知相识也是缘分[01:18.53]何妨让我依靠在你身边[01:22.96]缠绵梦里 痴心永远[01:27.57]明晨若要分手 带走伤感[01:32.21]无谓让这初恋留恨[01:36.77]何妨让你依靠在我的心[01:41.32]柔情热爱 痴心永远[01:45.85]明晨若要分手 带走伤感[01:50.44]祈求莫要别离我心[02:17.68]当你要走的某天[02:20.23]请不必慰问[02:22.31]常道初恋终必分手 总会变心[02:26.50]当你要走的某天[02:29.32]也不必抱憾[02:31.45]让我他朝好好追忆 哪需遗憾[02:36.20]爱 永远有些缺憾[02:40.82]不必找出那原因[02:45.30]爱 永远有些悔恨[02:49.91]可知相识也是缘分[02:56.85]何妨让我依靠在你身边[03:01.38]缠绵梦里 痴心永远[03:05.93]明晨若要分手 带走伤感[03:10.53]无谓让这初恋留恨[03:15.10]何妨让你依靠在我的心[03:19.69]柔情热爱 痴心永远[03:24.27]明晨若要分手 带走伤感[03:28.78]祈求莫要别离我心[03:35.74]何妨让我依靠在你身边[03:40.28]缠绵梦里 痴心永远[03:44.81]明晨若要分手 带走伤感[03:49.47]无谓让这初恋留恨[03:54.05]何妨让你依靠在我的心[03:58.65]柔情热爱 痴心永远[04:03.19]明晨若要分手 带走伤感[04:07.78]祈求莫要别离我心\n"
	},
	{
		"name":"加减乘除",
		"singer":"刘小慧",
		"time":"4:09",
		"img":"http://p1.music.126.net/oIR_fevsc6Pta-RAvPIG4w==/102254581399154.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4.mp3",
		"lrc":"[id:$00000000][ar:刘小慧][ti:加减乘除][by:][hash:70994691704dfe803d2c53a014b803b5][al:][sign:][qq:][total:249965][offset:0][00:00.26]刘小慧 - 加减乘除[00:01.73]作词：郑华娟[00:02.59]作曲：潘伟源[00:03.51]编曲：卢东尼[00:17.93]你眼内柔情多多[00:19.75]急需于我的援助[00:22.21]日夕那身躯也不能坐[00:26.67]在心底点知想这样那样[00:30.43]用尽那甜言和我拨河[00:34.85]你我是何生疏 偏于我身旁坐[00:39.18]热烫的呼吸会起灾祸[00:43.16]但愿你想想想今晚谁个是傻[00:47.40]应该更自律自重休想太多[00:53.79]加一些真的关心 减去些傻念[00:58.10]令你倾侧身躯再懂安坐[01:02.46]剩一点小恋火 请你乘友情[01:06.24]把洒脱情怀除去如何[01:10.45]加一些真的关心 减去些傻念[01:14.79]就是你给的最好帮助[01:19.00]慢慢去新开始这美丽故事[01:23.13]若未会依规则爱莫能助[01:35.76]你眼内柔情多多[01:37.80]急需于我的援助[01:40.04]日夕那身躯也不能坐[01:44.53]在心底点知想这样那样[01:48.30]用尽那甜言和我拨河[01:52.77]你我是何生疏 偏于我身旁坐[01:57.03]热烫的呼吸会起灾祸[02:01.07]但愿你想想想今晚谁个是傻[02:05.34]应该更自律自重休想太多[02:11.69]加一些真的关心 减去些傻念[02:16.16]令你倾侧身躯再懂安坐[02:20.36]剩一点小恋火 请你乘友情[02:24.15]把洒脱情怀除去如何[02:28.35]加一些真的关心 减去些傻念[02:32.68]就是你给的最好帮助[02:36.84]慢慢去新开始这美丽故事[02:40.99]若未会依规则爱莫能助[03:02.25]加一些真的关心 减去些傻念[03:06.49]令你倾侧身躯再懂安坐[03:10.90]剩一点小恋火 请你乘友情[03:14.76]把洒脱情怀除去如何[03:18.83]加一些真的关心 减去些傻念[03:23.18]就是你给的最好帮助[03:27.35]慢慢去新开始这美丽故事[03:31.51]若未会依规则爱莫能助[03:35.87]慢慢去新开始这美丽故事[03:39.95]若未会依规则我爱莫能助\n"
	},
	{
		"name":"永远的心痛",
		"singer":"刘小慧",
		"time":"4:26",
		"img":"http://p2.music.126.net/-3U7Ip_OIZv4U4lGK0_j6A==/36283883732379.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E6%B0%B8%E8%BF%9C%E7%9A%84%E5%BF%83%E7%97%9B.mp3",
		"lrc":"[id:$00000000][ar:刘小慧][ti:永远的心痛][by:][hash:7e9e8bc95e06af40da9599acbb8b98cc][al:][sign:][qq:][total:267000][offset:0][00:00.08]刘小慧 - 永远的心痛[00:01.46]作词：简宁[00:02.22]作曲：Miki Takashi[00:27.64]又再次远去你[00:30.04]这次没有冲动[00:34.41]在冷雨里 告别风中[00:40.78]就这么的挥挥手[00:43.38]犹如寒冷刀锋[00:48.39]让你我永画上裂缝[00:54.20]共你那过去爱过[00:56.59]当作是个好梦[01:00.52]让过去过去 往事皆空[01:07.49]没有了这个我[01:09.89]你会也许多了解[01:14.12]是孤单的感觉与心痛[01:20.58]风 冷冷向你我吹送[01:27.35]我已惯了这个受伤的感觉[01:31.26]或你不懂[01:33.81]柔情完全认真[01:36.72]而谁给我告别甜吻[01:41.24]似盖上创伤的印[01:47.07]这晚冷雨更冰冻[01:50.17]但愿现实是个梦[01:53.53]茫然为了这段情永远的心痛[02:00.27]这晚冷雨更冰冻[02:03.45]但愿现实是个梦[02:06.75]茫然为了这段情永远的心痛[02:40.25]共你那过去爱过[02:42.69]当作是个好梦[02:46.56]让过去过去 往事皆空[02:53.29]没有了这个我[02:55.78]你会也许多了解[02:59.96]是孤单的感觉与心痛[03:06.63]风 冷冷向你我吹送[03:13.13]我已惯了这个受伤的感觉[03:17.19]或你不懂[03:19.90]柔情完全认真[03:22.75]而谁给我告别甜吻[03:27.24]似盖上创伤的印[03:33.05]这晚冷雨更冰冻[03:36.21]但愿现实是个梦[03:39.52]茫然为了这段情永远的心痛[03:46.32]这晚冷雨更冰冻[03:49.59]但愿现实是个梦[03:52.85]茫然为了这段情永远的心痛\n"
	},
	{
		"name":"痴心换情深",
		"singer":"周慧敏",
		"time":"4:18",
		"img":"http://p1.music.126.net/gLm9dWtxlEpC9Xg_xPaOjQ==/109951165125653625.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E7%97%B4%E5%BF%83%E6%8D%A2%E6%83%85%E6%B7%B1.mp3",
		"lrc":"[id:$00000000][ar:周慧敏][ti:痴心换情深][by:][hash:913df36d215f37ef2315d2ac4e947771][al:][sign:][qq:][total:259346][offset:0][00:00.20]周慧敏 - 痴心换情深[00:00.61]作词：向雪怀[00:00.76]作曲：李子恒[00:36.59]这个世界或有别人[00:40.23]亦能令我放肆爱一阵[00:44.53]对你飘忽的爱为何认真[00:48.62]热情热爱倍难枕[00:52.66]怎知道爱上了你像似自焚[00:57.01]仍然愿意靠向你亲近[01:01.20]也许痴心可以换情深[01:05.40]在无望盼天悯[01:11.52]随缘分过去你不再问[01:14.14]不懂珍惜此际[01:16.52]每每看着我伤心[01:19.95]只因你看惯我的泪痕[01:22.66]对你再不震撼[01:24.94]看见了都不痛心[01:28.33]如何像戏里说的对白[01:30.96]相恋一生一世[01:33.40]说了当没有发生[01:36.78]思想已永远退不回头[01:39.36]爱过痛苦一生[01:41.83]沾满心中的泪印[02:02.84]这个世界或有别人[02:06.54]亦能令我放肆爱一阵[02:10.73]对你飘忽的爱为何认真[02:14.98]热情热爱倍难枕[02:18.94]怎知道爱上了你像似自焚[02:23.31]仍然愿意靠向你亲近[02:27.60]也许痴心可以换情深[02:31.79]在无望盼天悯[02:37.85]随缘分过去你不再问[02:40.41]不懂珍惜此际[02:42.78]每每看着我伤心[02:46.20]只因你看惯我的泪痕[02:48.78]对你再不震撼[02:51.20]看见了都不痛心[02:54.68]如何像戏里说的对白[02:57.26]相恋一生一世[02:59.68]说了当没有发生[03:03.09]思想已永远退不回头[03:05.67]爱过痛苦一生[03:08.10]沾满心中的泪印[03:13.60]随缘份过去你不再问[03:16.16]不懂珍惜此际[03:18.54]每每看着我伤心[03:21.97]只因你看惯我的泪痕[03:24.64]对你再不震撼[03:26.92]看见了都不痛心[03:30.40]如何像戏里说的对白[03:33.11]相恋一生一世[03:35.42]说了当没有发生[03:38.87]思想已永远退不回头[03:41.45]爱过痛苦一生[03:43.93]沾满心中的泪印\n"
	},
	{
		"name":"最爱",
		"singer":"周慧敏",
		"time":"4:18",
		"img":"http://p1.music.126.net/bGlGKwzQ-khugm7a8x5byg==/109951165144456989.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E6%9C%80%E7%88%B1.mp3",
		"lrc":"[id:$00000000][ar:周慧敏][ti:最爱][by:][hash:ef723cd3b74f952dbe127d1ca19c9144][al:][sign:][qq:][total:277029][offset:0][00:00.80]周慧敏 - 最爱[00:02.27]作词：李克勤[00:03.43]作曲：中岛美雪[00:18.92]天空一片蔚蓝[00:21.20]清风添上了浪漫[00:23.52]心里那份柔情蜜意似海无限[00:37.01]在那遥远有意无意遇上[00:40.50]共你初次邂逅谁没有遐想[00:45.15]诗一般的落霞[00:47.17]酒一般的夕阳[00:49.34]似是月老给你我留印象[00:53.94]斜阳离去朗月已换上[00:57.58]没法掩盖这份情欲盖弭彰[01:02.18]这一刹情一缕[01:04.31]影一对人一双[01:06.38]那怕热炽爱一场[01:10.47]潮汐退和涨[01:12.34]月冷风和霜[01:14.42]夜雨的狂想[01:16.54]野花的微香[01:18.71]伴我星夜里幻想[01:23.06]方知不用太紧张[01:29.58]没法隐藏这份爱[01:33.77]是我深情深似海[01:37.87]一生一世难分开[01:40.35]难改变也难再[01:42.16]让你的爱满心内[02:08.27]在那遥远有意无意遇上[02:12.06]共你初次邂逅谁没有遐想[02:16.47]诗一般的落霞[02:18.54]酒一般的夕阳[02:20.66]似是月老给你我留印象[02:25.21]斜阳离去朗月已换上[02:28.90]没法掩盖这份情欲盖弭彰[02:33.45]这一刹情一缕[02:35.52]影一对人一双[02:37.74]那怕热炽爱一场[02:41.74]潮汐退和涨[02:43.71]月冷风和霜[02:45.78]夜雨的狂想[02:47.91]野花的微香[02:50.08]伴我星夜里幻想[02:54.27]方知不用太紧张[03:00.79]没法隐藏这份爱[03:05.14]是我深情深似海[03:09.30]一生一世难分开[03:11.57]难改变也难再[03:13.49]让你的爱满心内[03:17.79]潮汐退和涨[03:19.71]月冷风和霜[03:21.83]夜雨的狂想[03:23.96]野花的微香[03:26.13]伴我星夜里幻想[03:30.53]方知不用太紧张[03:36.86]没法隐藏这份爱[03:41.15]是我深情深似海[03:45.39]一生一世难分开[03:47.72]难改变也难再[03:49.53]让你的爱满心内[03:53.02]让我的爱全给你[03:56.27]全给我最爱[03:57.99]地老天荒仍未改\n"
	},
	{
		"name":"吴哥窟",
		"singer":"吴雨霏",
		"time":"3:43",
		"img":"http://p2.music.126.net/XP0Z_omJzrX8ejkCdPQfkA==/109951163188719347.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%90%B4%E5%93%A5%E7%AA%9F.mp3",
		"lrc":"[id:$00000000][ar:吴雨霏][ti:吴哥窟][by:][hash:3e88c0fe4f07deb0bcb86de5810f8505][al:][sign:][qq:][total:225071][offset:0][00:00.20]吴雨霏 - 吴哥窟[00:01.31]作词：林若宁[00:02.13]作曲：陈珀[00:14.49]睁开双眼做场梦[00:19.44]问你[00:20.91]送我归家有何用[00:25.72]虽知道你的她[00:29.47]无言地向你尽忠[00:32.30]望见你隐藏[00:34.27]你戒指便沉重[00:40.35]心声安葬在岩洞[00:45.25]上帝[00:46.82]四次三番再愚弄[00:51.82]听得见耳边风[00:55.42]难逃避你那面孔[00:58.20]越要退出越向你[01:01.08]生命移动[01:04.82]难道我有勇气[01:07.14]与你在一起[01:09.23]庆祝正日[01:11.33]难道你有勇气[01:13.61]反悔诺言你专一[01:17.71]两个人多挤迫[01:21.16]难容纳多一番秘密[01:24.25]捉不紧变得[01:26.41]更加固执[02:07.95]不应该滥用名义[02:12.65]被你[02:14.37]引诱多一个名字[02:19.38]身份远记忆深[02:22.94]浮尘滴进觉悟寺[02:25.91]雾里看花没有[02:28.23]发生任何事[02:32.32]难道我有勇气[02:34.70]与你在一起[02:36.61]庆祝正日[02:38.73]难道你有勇气[02:41.11]反悔诺言你专一[02:45.17]两个人多挤迫[02:48.68]难容纳多一番秘密[02:51.81]捉不紧变得[02:53.64]更加固执[02:58.09]原谅你太理性[03:00.57]与我在一起[03:02.64]要守秘密[03:04.66]原谅我太野性[03:07.02]想这段情更深刻[03:11.10]两个人一消失[03:14.67]谣言便得不到证实[03:17.72]只得幽暗的晚空[03:21.00]记得\n"
	},
	{
		"name":"生命树",
		"singer":"吴雨霏",
		"time":"4:23",
		"img":"http://p1.music.126.net/XP0Z_omJzrX8ejkCdPQfkA==/109951163188719347.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E7%94%9F%E5%91%BD%E6%A0%91.mp3",
		"lrc":"[00:00.000] 作词 : 林若宁[00:01.000] 作曲 : 杨淽[00:05.04]编曲 : 李智胜[00:06.84]监制 : 梁荣骏[00:25.62]在那天 宁愿干旱地死不沾一勺水[00:31.11]逃避酿成眼泪[00:35.73]在那天 连根都要拔起枯干的脑海[00:41.25]期望不想念谁[00:46.29]原来就算 摊开伤口要你面对[00:51.92]未曾使你挂虑[00:56.75]原来就算 依依不舍你也别去[01:02.35]未见 有离情别绪[01:06.17]曾将身体发肤 随便北风宰割[01:11.93]但是我糟蹋了我你都不会有一丝痛楚[01:18.01]悲哀到碎落了黄叶只得堆空壳[01:23.15]你都 不知不觉[01:27.22]当天想过死 全为今天醒觉[01:32.86]活着要公告世界我抛低你也开花结果[01:38.77]总可以努力维持自我活得多坚壮[01:43.90]至少 可抛开束缚[01:51.59]在这天 阳光将我唤醒新一天到访[01:56.99]然后自然进睡[02:01.78]在这天 重新工作自己将光阴抱紧[02:07.39]存在不必为谁[02:33.53]明日练到 真的刚巧见你伴侣[02:38.78]面容并无畏惧[02:43.57]明日练到 不屈不挠到放下你[02:49.36]就算 痛能捱下去[02:53.07]曾将身体发肤 随便北风宰割[02:59.15]但是我糟蹋了我你都不会有一丝痛楚[03:05.00]悲哀到碎落了黄叶只得堆空壳[03:10.03]你都 不知不觉[03:14.18]当天想过死 全为今天醒觉[03:19.79]活着要公告世界我抛低你也开花结果[03:25.75]总可以努力维持自我活得多坚壮[03:30.94]至少 可抛开束缚[03:38.45]十年后 重生的我活得应该比你好[03:44.00]怀念恐怕不必[03:48.82]十年后 人生找到自己栖息的领土[03:54.42]然后开枝散叶 繁殖出花与蝶\n"
	},
	{
		"name":"我本人",
		"singer":"吴雨霏",
		"time":"4:19",
		"img":"http://p1.music.126.net/-U2K8GKlASCSXK0cRre1gA==/109951163188718762.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E6%88%91%E6%9C%AC%E4%BA%BA.mp3",
		"lrc":"[id:$00000000][ar:吴雨霏][ti:我本人][by:][hash:68b14ad4632fb0b08eff5711c8793402][al:][sign:][total:258037][offset:0][00:00.60]吴雨霏 - 我本人[00:01.60]词：林夕[00:02.60]曲：杨淽[00:16.75]人若变记忆便迷人[00:24.02]情令眼浅了便情深[00:29.21]认识一场 如雷雨一闪[00:33.41]就此 没有下文[00:37.75]无憾也觉得是遗憾[00:45.39]其实你已经是闲人[00:52.72]其实我讨厌被怜悯[00:57.85]或者一时 疲劳到伤身[01:02.25]弱得 像个病人[01:07.25]才像要找个肩膊枕一枕[01:12.40]难忘你[01:14.50]好听过若无其事没韵味[01:19.41]你真人[01:21.66]其实陌生得可以记不起[01:26.51]毋忘你[01:28.87]精彩过别来无恙如游戏[01:33.92]我本人[01:35.97]明白什么都总有限期[02:11.59]含泪去葬花极麻烦[02:18.77]唯独怨泣血没时间[02:23.98]或者失意 是为了工作[02:28.08]恸哭 未够浪漫[02:32.98]才暂借恋爱感觉去感叹[02:38.41]难忘你[02:40.61]好听过若无其事没韵味[02:45.61]你真人[02:47.66]其实陌生得可以记不起[02:52.66]毋忘你[02:54.86]精彩过别来无恙如游戏[02:59.91]我本人[03:01.96]明白什么都总有限期[03:21.34]难忘你[03:23.59]好听过淡忘情敌没妒忌[03:28.40]我本人[03:30.55]无林黛玉的本领痛心死[03:35.70]毋忘你[03:37.90]彷佛要为红楼梦内连戏[03:42.85]我本人[03:44.90]从来未稀罕悲壮传奇[03:50.00]我本人[03:52.10]宁愿为加班筋歇力疲\n"
	},
	{
		"name":"人非草木",
		"singer":"吴雨霏",
		"time":"4:27",
		"img":"http://p1.music.126.net/XP0Z_omJzrX8ejkCdPQfkA==/109951163188719347.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E4%BA%BA%E9%9D%9E%E8%8D%89%E6%9C%A8.mp3",
		"lrc":"[id:$00000000][ar:吴雨霏][ti:人非草木][by:][hash:bc5ba73ba2d7d3813063d6b73aaf2166][al:][sign:][total:267715][offset:0][00:00.60]吴雨霏 - 人非草木[00:01.60]词：林夕[00:02.60]曲：杨淽[00:21.05]还未戒掉 他留下给我[00:25.83]那动魄惊心[00:28.90]还未成熟得当有过便无憾[00:36.66]宁为他跌进红尘[00:40.58]做个有痛觉的人[00:44.61]为那春色般眼神[00:48.88]愿意比枯草敏感[00:53.37]还未放下 只能拾起[00:57.39]领教我的贪痴[01:01.37]还未麻木得吃够了便无事[01:09.19]明白醒觉有定时[01:13.12]但放肆够也不迟[01:17.20]在我升仙得救前 糊涂一次[01:24.71]心灰了还未碎[01:27.22]心死了还在醉[01:29.18]人难得只因失恋拥抱负累[01:32.95]未会信甚麼拥有等於失去[01:37.49]无情地对世界说他算是谁[01:41.01]不可以沉下去[01:43.58]总可以迷下去[01:45.44]人何苦要抱著清醒进睡[01:49.27]就以血肉之躯去满足知觉[01:53.70]虔诚地去犯错[01:56.35]良心 跳得清脆[02:16.91]还未瞑目 只能望穿我[02:21.76]那固执的心[02:24.78]还未曾悟出错过也是缘份[02:32.47]迟或早变过路人[02:36.50]为了好客太伤神[02:40.69]但我汹涌得过份 仍然兴奋[02:48.14]心灰了还未碎[02:50.56]心死了还在醉[02:52.52]人难得只因失恋拥抱负累[02:56.30]未会信甚麼拥有等於失去[03:00.92]无情地对世界说他算是谁[03:04.72]不可以沉下去[03:06.74]总可以迷下去[03:08.90]人何苦要抱著清醒进睡[03:12.62]就以血肉之躯去满足知觉[03:17.00]虔诚地去犯错[03:19.46]良心 跳得清脆[03:24.78]心灰了还未碎[03:27.15]心死了还在醉[03:29.16]嫌人生空虚只好拥有负累[03:32.94]累了再学讲拥有等於失去[03:37.16]无情地讪笑过去他又是谁[03:41.13]不可以沉下去[03:43.30]总可以迷下去[03:45.72]人何苦要过份珍惜眼泪[03:49.19]在我血肉之躯有爱的根据[03:53.72]回头就算认错[03:56.09]还好 错得很对\n"
	},
	{
		"name":"富士山下",
		"singer":"陈奕迅",
		"time":"4:19",
		"img":"http://p1.music.126.net/PcJq6i7zMcPgudejdn1yeg==/109951163256302356.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.mp3",
		"lrc":"[id:$00000000][ar:陈奕迅][ti:富士山下][by:][hash:3db322e5cdd76350323e8cee789becab][al:][sign:][qq:][total:259000][offset:0][00:00.94]陈奕迅 - 富士山下[00:02.20]作词：林夕[00:02.81]作曲：泽日生[00:03.62]编曲：陈珀、C.Y. Kong[00:22.50]拦路雨偏似雪花[00:24.63]饮泣的你冻吗[00:26.80]这风褛我给你磨到有襟花[00:31.36]连调了职也不怕[00:33.59]怎么始终牵挂[00:35.91]苦心选中今天想车你回家[00:40.52]原谅我不再送花[00:42.84]伤口应要结疤[00:44.92]花瓣铺满心里坟场才害怕[00:49.63]如若你非我不嫁[00:51.97]彼此终必火化[00:54.25]一生一世等一天需要代价[00:58.81]谁都只得那双手[01:01.19]靠拥抱亦难任你拥有[01:03.93]要拥有必先懂失去怎接受[01:08.59]曾沿着雪路浪游[01:10.82]为何为好事泪流[01:13.05]谁能凭爱意要富士山私有[01:17.75]何不把悲哀感觉[01:19.62]假设是来自你虚构[01:22.11]试管里找不到它染污眼眸[01:26.86]前尘硬化像石头[01:29.04]随缘地抛下便逃走[01:34.51]我绝不罕有[01:36.38]往街里绕过一周[01:38.86]我便化乌有[01:42.96]情人节不要说穿[01:45.39]只敢抚你发端[01:47.62]这种姿态可会令你更心酸[01:52.08]留在汽车里取暖[01:54.40]应该怎么规劝[01:56.73]怎么可以将手腕忍痛划损[02:01.28]人活到几岁算短[02:03.61]失恋只有更短[02:05.94]归家需要几里路谁能预算[02:10.49]忘掉我跟你恩怨[02:12.62]樱花开了几转[02:15.00]东京之旅一早比一世遥远[02:19.45]谁都只得那双手[02:21.93]靠拥抱亦难任你拥有[02:24.72]要拥有必先懂失去怎接受[02:29.39]曾沿着雪路浪游[02:31.57]为何为好事泪流[02:33.86]谁能凭爱意要富士山私有[02:38.58]何不把悲哀感觉[02:40.46]假设是来自你虚构[02:42.99]试管里找不到它染污眼眸[02:47.60]前尘硬化像石头[02:49.87]随缘地抛下便逃走[02:54.67]我绝不罕有[02:56.70]往街里绕过一周[02:59.43]我便化乌有[03:03.73]谁都只得那双手[03:06.21]靠拥抱亦难任你拥有[03:08.94]要拥有必先懂失去怎接受[03:13.81]曾沿着雪路浪游[03:16.04]为何为好事泪流[03:18.26]谁能凭爱意要富士山私有[03:23.18]何不把悲哀感觉[03:25.26]假设是来自你虚构[03:27.83]试管里找不到它染污眼眸[03:32.73]前尘硬化像石头[03:34.96]随缘地抛下便逃走[03:41.68]我绝不罕有[03:43.76]往街里绕过一周[03:47.04]我便化乌有[03:52.45]你还嫌不够[03:54.33]我把这陈年风褛[03:57.22]送赠你解咒\n"
	},
	{
		"name":"偏偏喜欢你",
		"singer":"陈百强",
		"time":"3:32",
		"img":"http://p2.music.126.net/GusXTGbAGQ-K4EqB_xnQvQ==/109951165441187746.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%81%8F%E5%81%8F%E5%96%9C%E6%AC%A2%E4%BD%A0.mp3",
		"lrc":"[id:$00000000][ar:陈百强][ti:偏偏喜欢你 (3D环绕版)][by:][hash:344c8770badf7900faf9a8d1a010fe1a][al:][sign:][qq:][total:208378][offset:0][00:00.09]陈百强 - 偏偏喜欢你 (3D环绕版)[00:00.98]作词：郑国江[00:01.13]作曲：陈百强[00:14.53]愁绪挥不去苦闷散不去[00:20.73]为何我心一片空虚[00:26.64]感情已失去一切都失去[00:32.71]满腔恨愁不可消除[00:38.77]为何你的嘴里总是那一句[00:44.79]为何我的心不会死[00:50.50]明白到爱失去一切都不对[00:56.92]我又为何偏偏喜欢你[01:02.93]爱已是负累[01:05.96]相爱似受罪[01:09.30]心底如今满苦泪[01:15.03]旧日情如醉此际怕再追[01:21.83]偏偏痴心想见你[01:27.08]为何我心分秒想着过去[01:33.31]为何你一点都不记起[01:38.80]情义已失去恩爱都失去[01:45.22]我却为何偏偏喜欢你[02:15.50]爱已是负累[02:18.54]相爱似受罪[02:21.84]心底如今满苦泪[02:27.53]旧日情如醉此际怕再追[02:34.35]偏偏痴心想见你[02:39.61]为何我心分秒想着过去[02:45.73]为何你一点都不记起[02:51.29]情义已失去恩爱都失去[02:57.71]我却为何偏偏喜欢你[03:03.47]情义已失去恩爱都失去[03:09.83]我却为何偏偏喜欢你\n"
	},
	{
		"name":"一起走过的日子 (Live)",
		"singer":"刘德华",
		"time":"3:58",
		"img":"http://p2.music.126.net/SqEjzkbOeTocASevCOQ5Sw==/109951165909154050.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E4%B8%80%E8%B5%B7%E8%B5%B0%E8%BF%87%E7%9A%84%E6%97%A5%E5%AD%90.mp3",
		"lrc":"[id:$00000000][ar:刘德华][ti:一起走过的日子][by:][hash:e3872ea636b0139be9aea2206bd91d69][al:][sign:][qq:][total:242835][offset:0][00:00.01]刘德华 - 一起走过的日子 (Live)[00:01.25]作词：小美[00:02.11]作曲：胡伟立[00:15.63]如何面对[00:18.65]曾一起走过的日子[00:22.38]现在剩下我独行[00:24.80]如何让心声一一讲你知[00:29.39]从来无人明白我[00:32.56]唯一你给我好日子[00:36.22]有你有我有情有生有死有义[00:43.51]多少风波都愿闯[00:46.32]只因彼此不死的目光[00:50.19]有你有我有情有天有海有地[00:57.24]不可猜测总有天意[01:00.45]才珍惜相处的日子[01:04.01]道别话亦未多讲[01:06.59]只抛低这个伤心的汉子[01:18.09]沉沉睡了[01:21.19]谁分享今生的日子[01:24.90]活着但是没灵魂[01:27.30]才明白生死之间的意思[01:32.02]情浓完全明白了[01:35.13]才甘心披上孤独衣[01:38.80]有你有我有情有天有海有地[01:45.76]当天一起不自知[01:48.92]分开方知根本心极痴[01:52.68]有你有我有情有生有死有义[01:59.74]只想解释当我不智[02:03.15]如今想倾诉讲谁知[02:06.62]剩下绝望旧身影[02:08.93]今只得千亿伤心的句子[02:21.05]沉沉睡了[02:23.77]谁分享今生的日子[02:27.48]活着但是没灵魂[02:30.04]才明白生死之间的意思[02:34.66]情浓完全明白了[02:37.72]才甘心披上孤独衣[02:41.59]有你有我有情有天有海有地[02:48.47]当天一起不自知[02:51.53]分开方知根本心极痴[02:55.45]有你有我有情有生有死有义[03:02.53]只想解释当我不智[03:05.75]如今想倾诉讲谁知[03:09.26]剩下绝望旧身影[03:11.52]今只得千亿伤心的句子[03:16.24]剩下绝望旧身影[03:18.89]今只得千亿伤心的句子\n"
	},
	{
		"name":"暗里着迷 (Live)",
		"singer":"刘德华",
		"time":"3:46",
		"img":"http://p2.music.126.net/SqEjzkbOeTocASevCOQ5Sw==/109951165909154050.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%88%98%E5%BE%B7%E5%8D%8E%20-%20%E6%9A%97%E9%87%8C%E7%9D%80%E8%BF%B7%20%28Live%29.mp3",
		"lrc":"[00:00.00] 作词 : 林振强[00:01.00] 作曲 : 徐嘉良[00:22.89]可不可不要这么样徘徊在目光内[00:29.76]你会察觉到我根本寂寞难耐[00:37.66]即使千多百个深夜曾在梦境内[00:44.07]我有吻过你这毕竟并没存在[00:51.45]人声车声开始消和逝[00:55.02]无声挣扎有个情感奴隶[00:58.43]是我多么的想她[01:00.14]但我偏偏只得无尽叹谓[01:05.65]其实每次见你我也着迷[01:09.06]无奈你我各有角色范围[01:12.71]就算在寂寞梦内超出好友关系[01:19.96]唯在暗里爱你暗里着迷[01:23.24]无谓要你惹上各种问题[01:26.91]共我道别吧别让空虚使我越轨[01:47.26][01:49.42]即使千多百个深夜曾在梦境内[01:55.55]我有吻过你这毕竟并没存在[02:02.72]人声车声开始消和逝[02:06.17]无声挣扎有个情感奴隶[02:09.76]是我多么的想她[02:11.47]但我偏偏只得无尽叹谓[02:16.89]其实每次见你我也着迷[02:20.33]无奈你我各有角色范围[02:23.87]就算在寂寞梦内超出好友关系[02:31.16]唯在暗里爱你暗里着迷[02:34.41]无谓要你惹上各种问题[02:38.05]共我道别吧别让空虚使我越轨[02:45.27]其实每次见你我也着迷[02:48.69]无奈你我各有角色范围[02:52.27]就算在寂寞梦内超出好友关系[02:59.48]唯在暗里爱你暗里着迷[03:02.92]无谓要你惹上各种问题[03:06.81]共我道别吧就让空虚把我摧毁\n"
	},
	{
		"name":"只想一生跟你走",
		"singer":"张学友",
		"time":"5:11",
		"img":"http://p1.music.126.net/SdTc04hSVuAUeFqErhvGDw==/109951165686347824.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%8F%AA%E6%83%B3%E4%B8%80%E7%94%9F%E8%B7%9F%E4%BD%A0%E8%B5%B0.mp3",
		"lrc":"[id:$00000000][ar:张学友][ti:只想一生跟你走][by:][hash:63bb07162acf4b02d6ce10d0f9fcd7d1][al:][sign:][qq:][total:311849][offset:0][00:00.00]张学友 - 只想一生跟你走[00:00.13]作词：刘卓辉[00:00.30]作曲：巫启贤、陈佳明[00:37.05]共你有过最美的邂逅[00:44.38]共你有过一些风雨忧愁[00:51.70]共你醉过痛过的最后[00:59.10]但我发觉想你不能没有[01:06.51]在你每次抱怨的眼眸[01:13.79]像我永远不懂给你温柔[01:21.29]别再诉说我俩早已分手[01:28.59]像你教我伤心依然未够[01:34.19]但你没带走梦里的所有[01:41.94]让你走为何让你看不透[01:49.08]但求你未淡忘往日旧情[01:51.86]我愿默然带着泪流[01:53.78]很想一生跟你走[01:56.35]就算天边海角多少改变[01:59.13]一生只有风中追究[02:00.98]不想孤单的逗留[02:03.69]但求你未淡忘往日旧情[02:06.55]我愿默然带着泪流[02:08.33]很想一生跟你走[02:11.11]在我心中的你思海的你[02:13.82]今生不可不能没有[02:35.13]在你每次抱怨的眼眸[02:42.44]像我永远不懂给你温柔[02:49.79]别再诉说我俩早已分手[02:57.13]像你教我伤心依然未够[03:02.73]但你没带走梦里的所有[03:10.65]让你走为何让你看不透[03:17.64]但求你未淡忘往日旧情[03:20.35]我愿默然带着泪流[03:22.20]很想一生跟你走[03:24.92]就算天边海角多少改变[03:27.70]一生只有风中追究[03:29.55]不想孤单的逗留[03:32.25]但求你未淡忘往日旧情[03:35.10]我愿默然带着泪流[03:36.88]很想一生跟你走[03:39.74]在我心中的你思海的你[03:42.44]今生不可不能没有[04:05.66]但求你未淡忘往日旧情[04:08.37]我愿默然带着泪流[04:10.22]很想一生跟你走[04:13.01]就算天边海角多少改变[04:15.84]一生只有风中追究[04:17.61]不想孤单的逗留[04:20.25]但求你未淡忘往日旧情[04:23.11]我愿默然带着泪流[04:24.96]很想一生跟你走[04:27.74]在我心中的你思海的你[04:30.45]今生不可不能没有\n"
	},
	{
		"name":"唉声叹气",
		"singer":"郑秀文",
		"time":"4:23",
		"img":"http://p2.music.126.net/CwAKVzdaHUuPSvcyes_13g==/109951165621421589.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%94%89%E5%A3%B0%E5%8F%B9%E6%B0%94.mp3",
		"lrc":"[id:$00000000][ar:郑秀文][ti:唉声叹气][by:][hash:d6e3077acd4df59c6f3deab799b1d714][al:][sign:][qq:][total:263967][offset:0][00:00.12]郑秀文 - 唉声叹气[00:00.99]作词：林夕[00:01.29]作曲：Cheope、R.Buti[00:17.22]床是我床[00:19.37]但你的汗[00:22.12]能令我这世界泛巨浪[00:26.24]沉默脸庞[00:28.48]像隔彼岸[00:30.96]明白你永远拒绝[00:34.33]属于这个地方[00:44.18]怀着厚望[00:46.38]定会失望[00:48.96]其实这个说法我未忘[00:53.15]情若太狂[00:55.33]叫你怯慌[00:57.88]然后我要背起这罪状[01:02.66]连坐立亦会不安[01:06.82]若然让欲念曝了光[01:11.34]明日追忆都变的肮脏[01:15.78]无谓勉强爱你去韬光[01:21.79]不想唉声叹气[01:23.99]陪你一起[01:26.32]不想委屈了你[01:28.46]为我医心理[01:30.78]即使唉声叹气[01:32.97]还要当趣味再没更卑微[01:38.72]Oh No[01:39.78]不想唉声叹气[01:41.91]唯有心死[01:44.16]不想委屈了我[01:46.47]成了张三李四[01:48.70]不敢唉声叹气[01:50.84]还要故作客气愉快讲别离[01:56.68]Oh No[02:16.13]怀着厚望[02:18.32]定会失望[02:20.87]其实这个说法我未忘[02:25.05]情若太狂[02:27.37]叫你怯慌[02:29.86]然后我要背起这罪状[02:34.64]连坐立亦会不安[02:38.78]若然让欲念曝了光[02:43.41]明日追忆都变的肮脏[02:47.74]无谓勉强爱你去韬光[02:53.84]不想唉声叹气[02:55.94]陪你一起[02:58.18]不想委屈了你[03:00.42]为我医心理[03:02.61]即使唉声叹气[03:04.87]还要当趣味再没更卑微[03:10.59]Oh No[03:11.60]不想唉声叹气[03:13.80]唯有心死[03:16.13]不想委屈了我[03:18.35]成了张三李四[03:20.65]不敢唉声叹气[03:22.90]还要故作客气[03:24.82]愉快讲别离[03:46.42]Oh No[03:47.60]不想唉声叹气[03:49.75]唯有心死[03:51.97]不想委屈了我[03:54.21]成了张三李四[03:56.44]不敢唉声叹气[03:59.36]还要\n"
	},
	{
		"name":"处处吻",
		"singer":"杨千嬅",
		"time":"3:19",
		"img":"http://p1.music.126.net/8w4C39C2OY2fRANvkSXo9Q==/109951163270254519.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%A4%84%E5%A4%84%E5%90%BB.mp3",
		"lrc":"[00:00.000] 作词 : 林夕[00:01.000] 作曲 : 雷颂德[00:02.000] 编曲 : 雷颂德[00:03.000] 监制 : 雷颂德[00:16.79]你爱热吻却永不爱人[00:20.67]练习为乐但是怕熟人[00:24.72]你爱路过去索取见闻[00:28.78]陌路人便特别有份好感[00:33.13]你热爱别离[00:35.09]再合再离[00:36.33]似花瓣献技[00:37.99]叫花粉遍地 噢噢[00:41.07]你在播弄这穿线游戏[00:44.33]跟他结束[00:45.84]他与她再一起[00:48.03]你小心[00:49.01]一吻便颠倒众生[00:50.93]一吻便救一个人[00:52.88]给你拯救的体温[00:54.98]总会再捐给某人[00:56.96]一吻便偷一个心[00:58.95]一吻便杀一个人[01:00.87]一寸吻感一寸金[01:03.19]一脸崎岖的旅行[01:05.36]让半夜情人[01:07.05]延续吻别人[01:09.04]让你旧情人[01:10.80]又惠顾他人[01:13.38]每晚大概有上亿个人[01:17.34]在地球上落力的亲吻[01:21.16]你那习惯散佈给众人[01:25.24]在地球上惠泽遍及世人[01:29.48]你热爱别离[01:31.48]再合再离[01:32.77]似花瓣献技[01:34.44]叫花粉遍地 噢噢[01:37.44]你在播弄这穿线游戏[01:40.74]跟他结束[01:42.29]他与她再一起[01:44.45]你小心 一吻便颠倒众生[01:47.45]一吻便救一个人[01:49.42]给你拯救的体温[01:51.44]总会再捐给某人[01:53.41]一吻便偷一个心[01:55.38]一吻便杀一个人[01:57.38]一寸吻感一寸金[01:59.45]一脸崎岖的旅行[02:02.75]噢 你为何未曾尽兴[02:04.71]这塑胶的爱情[02:06.51]跳蚤的旅程 噢[02:09.16]延展铺天盖地[02:11.29]好本领 噢[02:12.95]这吊诡的爱情[02:14.55]播种的旅程 Kiss[02:16.02]别了他 他吻她[02:18.55]他吻她吻他吻她[02:20.55]延续愉快过程[02:22.85]你我他真高兴[02:25.02]下个他 他吻她[02:26.77]他吻她再亲你结束这旅程[02:30.43]多得你这煞星[02:32.70]你小心[02:33.72]一吻便颠倒众生[02:35.72]一吻便救一个人[02:37.69]给你拯救的体温[02:39.66]总会再捐给某人[02:41.78]一吻便偷一个心[02:43.77]一吻便杀一个人[02:45.80]一寸吻感一寸金[02:47.97]一脸崎岖的旅行[02:49.43]别了他 他吻她[02:50.93]他吻她吻他吻她[02:52.80]延续愉快过程[02:54.68]你我他真高兴[02:56.87]下个他[02:57.87]他吻她[02:59.15]他吻她吻他吻她[03:00.90]延续愉快过程[03:02.90]你我他真高兴[03:05.06]十个他 千个她[03:07.12]恩爱扩展的旅程\n"
	},
	{
		"name":"失恋阵线联盟",
		"singer":"草蜢",
		"time":"2:53",
		"img":"http://p1.music.126.net/62j9inhG9GOfZLe_lkhxag==/109951166293189173.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%A4%B1%E6%81%8B%E9%98%B5%E7%BA%BF%E8%81%94%E7%9B%9F.mp3",
		"lrc":"[00:00.000] 作词 : 何启弘[00:01.000] 作曲 : Cha Trikong Suwan[00:02.000] 编曲 : 鲍比达[00:15.876]她总是只留下电话号码[00:19.480]从不肯让我送她回家[00:23.102]听说你也曾经爱上过她[00:26.710]曾经也同样无法自拔[00:30.323]你说你学不会假装潇洒[00:33.960]却叫我别太早放弃她[00:37.642]把过去全说成一段神话[00:41.258]然后笑彼此一样的傻[00:44.647]我们这么在乎她[00:46.717]却被她全部抹煞[00:48.565]越疼她越伤心[00:50.310]永远得不到回答[00:52.177]到底她怎么想[00:54.004]应该继续猜测吗[00:55.960]还是说好全忘了吧[00:59.502]找一个承认失恋的方法[01:03.045]让心情好好地放个假[01:06.700]当你我不小心又想起她[01:10.277]就在记忆里画一个叉[01:13.948][01:42.983]她总是只留下电话号码[01:46.596]从不肯让我送她回家[01:50.230]听说你也曾经爱上过她[01:53.815]曾经也同样无法自拔[01:57.437]你说你学不会假装潇洒[02:01.061]却叫我别太早放弃她[02:04.679]把过去全说成一段神话[02:08.336]然后笑彼此一样的傻[02:11.792]我们这么在乎她[02:13.776]却被她全部抹煞[02:15.640]越疼她越伤心[02:17.468]永远得不到回答[02:19.245]到底她怎么想[02:21.081]应该继续猜测吗[02:23.110]还是说好全忘了吧[02:26.550]找一个承认失恋的方法[02:30.197]让心情好好地放个假[02:33.797]当你我不小心又想起她[02:37.389]就在记忆里画一个叉[02:41.010]就在记忆里画一个叉[02:44.628]就在记忆里画一个叉\n"
	},
	{
		"name":"爱的故事集.上集",
		"singer":"孙耀威",
		"time":"3:59",
		"img":"http://p2.music.126.net/B2OfzVehj_4r2nZxwsTyfg==/100055558144882.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%AD%99%E8%80%80%E5%A8%81%20-%20%E7%88%B1%E7%9A%84%E6%95%85%E4%BA%8B.%E4%B8%8A%E9%9B%86.mp3",
		"lrc":"[id:$00000000][ar:孙耀威][ti:爱的故事(上集)][by:][hash:698f5a9bd8c49f89cc3451233dec49a7][al:][sign:][qq:][total:239360][offset:0][00:00.31]孙耀威 - 爱的故事(上集)[00:01.12]作词：潘伟源[00:01.27]作曲：George Takahashi[00:16.32]星的光点点洒于午夜[00:19.71]人人开开心心说说故事[00:24.18]偏偏今宵所想讲不太易[00:27.52]迟疑地望你想说又复迟疑[00:31.95]秋风将涌起的某夜[00:35.37]遗留她的窗边有个故事[00:39.77]孤单单的小伙子不顾寂寞[00:43.26]徘徊树下直至天际露月儿[00:47.60]冬风吹走几多个月夜[00:51.12]为何窗边的她欠缺注视[00:55.46]刻于窗扉小子写的爱慕字[00:58.90]完全没用像个飘散梦儿[01:03.36]今宵的小伙子倾吐憾事[01:06.79]谁人痴痴的要再听故事[01:11.11]偏偏痴心小子只知道上集[01:14.55]祈求下集是个可爱梦儿[01:18.99]知不知对你牵上万缕爱意[01:22.88]每晚也痛心空费尽心思[01:26.82]这小子欲断难断这故事[01:30.20]全为我爱上你偏偏你不知[01:42.35]春风轻吹点点火花衬月夜[01:46.04]人人开开心心说说故事[01:50.34]终于倾出这小子的往事[01:53.72]长年累月为你怎再自持[01:58.26]今宵知否对你的暗示[02:01.62]为何真的将它当故事[02:06.03]偏偏痴心小子只知道上集[02:09.43]祈求下集是个可爱梦儿[02:13.88]知不知对你牵上万缕爱意[02:17.87]每晚也痛心空费尽心思[02:21.76]这小子欲断难断这故事[02:25.19]全为爱上了你偏偏你不知[02:29.64]知不知每晚想你十次百次[02:33.53]每晚也去等因我极心痴[02:37.47]可不可合力延续这故事[02:40.85]延续这片爱意一生俩相依[03:01.03]知不知对你牵上万缕爱意[03:04.92]每晚也痛心空费尽心思[03:08.79]这小子欲断难断这故事[03:12.23]全为爱上了你偏偏你不知[03:16.68]知不知每晚想你十次百次[03:20.57]每晚也去等因我极心痴[03:24.50]可不可合力延续这故事[03:27.95]延续这片爱意一生俩相依\n"
	},
	{
		"name":"漫漫前路",
		"singer":"徐小凤",
		"time":"3:49",
		"img":"http://p2.music.126.net/50TFp7fxKYfd1PfMZtDDCA==/109951164482194931.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%BE%90%E5%B0%8F%E5%87%A4%20-%20%E6%BC%AB%E6%BC%AB%E5%89%8D%E8%B7%AF.mp3",
		"lrc":"[id:$00000000][ar:徐小凤][ti:漫漫前路][by:][hash:7a0b2127f5cd9b6111f823ee5443849e][al:][sign:][qq:][total:228410][offset:0][00:05.40]作词：郑国江[00:08.30]作曲：山木康世[00:27.09]漫漫前路有几多风光[00:31.45]一一细心赏[00:35.83]为甚留步回头望一望[00:40.23]心中一片迷茫[00:44.25]默默看看天际白云荡[00:48.67]就像你我志在四方[00:53.02]但愿与你欢笑地流浪[00:57.37]挽手他乡闯一闯[01:02.24]漫漫前路有几多风霜[01:06.59]一一去担当[01:10.90]踏着前路两家互守望[01:15.26]不必要怕路长[01:19.07]路上有你不会绝望[01:23.37]路上有你信念更刚[01:27.73]路上有你欢笑在浮荡[01:32.09]满山小草都芬芳[01:56.28]漫漫前路有几多风光[02:00.59]一一细心赏[02:04.95]为甚留步回头望一望[02:09.35]心中一片迷茫[02:13.15]默默看看天际白云荡[02:17.46]就像你我志在四方[02:21.82]但愿与你欢笑地流浪[02:26.05]挽手他乡闯一闯[02:37.62]漫漫前路有几多风霜[02:41.77]一一去担当[02:46.03]踏着前路两家互守望[02:50.39]不必要怕路长[02:54.19]路上有你不会绝望[02:58.50]路上有你信念更刚[03:02.81]路上有你欢笑在浮荡[03:07.16]满山小草都芬芳[03:11.37]默默看看天际白云荡[03:15.82]就像你我志在四方[03:20.08]但愿与你欢笑地流浪[03:24.34]挽手他乡闯一闯\n"
	},
	{
		"name":"旧朋友",
		"singer":"黄凯芹",
		"time":"5:20",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909125650215784.jpg",
		"src":"hhttps://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E6%97%A7%E6%9C%8B%E5%8F%8B.mp3",
		"lrc":"[id:$00000000][ar:黄凯芹][ti:旧朋友][by:逝去匆匆不再见][hash:8c2ceedea44cd7940a553a060481da26][al:Stay With Me][sign:][qq:][total:319190][offset:0][00:00.00]黄凯芹 - 旧朋友[00:02.47]作词：潘伟源[00:04.58]作曲：陈升[00:27.09]茫然在信里传来问候[00:32.42]言词用语也都似旧[00:37.86]但那情怀偏不似旧[00:43.25]字句中间多点哀愁[00:50.94]模糊泪眼里重浮着旧梦[00:56.49]又再感触那些错漏[01:01.86]梦里年华匆匆去后[01:07.24]就似哀歌进入前奏[01:15.16]你说你今天得到许多[01:20.75]偏偏欢欣却早没有[01:26.15]每到漆黑倍感冷漠[01:31.50]念记当天旧朋友[01:36.72]你说你今天得到许多[01:42.25]偏偏真心却早没有[01:47.43]我笑我今天也不似旧[01:53.07]念记从前[01:55.55]勾起了愁万缕[02:25.60]模糊泪眼里重浮着旧梦[02:30.89]又再感触那些错漏[02:36.31]梦里年华匆匆去后[02:41.83]渐暗的天加添了愁[02:49.65]你说你今天得到许多[02:55.23]偏偏欢欣却早没有[03:00.66]每到漆黑倍感冷漠[03:05.99]念记当天旧朋友[03:11.12]你说你今天得到许多[03:16.75]偏偏真心却早没有[03:22.18]每到漆黑倍感冷漠[03:27.57]独抱繁华 却没朋友[03:35.47]茫然在信里传来问候[03:41.17]言词用语也都似旧[03:46.46]但那情怀偏不似旧[03:51.86]字句中间加添了愁万缕[04:02.73]令我茫然加添了愁万缕[04:19.20]逝去的爱 逝去的爱[04:40.66]已经不再\n"
	},
	{
		"name":"电灯胆",
		"singer":"邓丽欣",
		"time":"3:36",
		"img":"http://p2.music.126.net/KVQxwfzBWve6icgZ7eQ-bg==/109951164084500139.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E7%94%B5%E7%81%AF%E8%83%86.mp3",
		"lrc":"[00:00.000] 作词 : Li Jun Yi[00:01.000] 作曲 : Li Jun Yi[00:02.000] 编曲 : 严励行[00:03.000] 制作人 : 陈家健[00:18.28]假使不能公开妒忌 学习大方接受[00:26.83]同行时要殿後 谁冷落旧朋友[00:35.38]节日约我三位一体的庆祝[00:39.56]沿途明亮灯饰闪影着沉重[00:44.15]言谈愈炽热内在更冰冻[00:48.56][00:51.40]谁当初无心将两方撮合[00:55.02]然後留低只得这寂寞人[00:59.62]仍是你们密友[01:01.80]呆望你们热吻应该伤感还是快感[01:07.46][01:07.99]能回避吗我怕了当那电灯胆[01:12.21]盯着你们来来回委曲中受难[01:16.91]一个我被撇低却又很不惯[01:21.17]要走的一刹又折返[01:24.05][01:24.86]能承认吗我故意当那电灯胆[01:29.17]他日你们完场时入替也不难[01:33.91]善良人埋藏着最坏的心眼[01:38.15]妄想一天你们会散会选我吗[01:45.37][01:46.38]啦啦..啦啦..啦啦..啦啦啦..[02:02.21][02:04.40]对换了你身份可应该满足[02:08.75]情人还是知己都拥入怀抱[02:13.22]同情或眼泪让别个得到[02:18.52][02:20.77]留低的原因一世的秘密[02:24.34]其实明知只得我是外人[02:28.85]仍是你们密友[02:30.98]呆望你们热吻应该开心还是痛心[02:36.64][02:37.14]能回避吗我怕了当那电灯胆[02:41.36]盯着你们来来回委曲中受难[02:46.14]一个我被撇低却又很不惯[02:50.38]要走的一刹又折返[02:53.58][02:54.11]能承认吗我故意当那电灯胆[02:58.35]他日你们完场时入替也不难[03:03.08]善良人埋藏着最坏的心眼[03:07.41]妄想一天你们会散会选我吗[03:15.97]\n"
	},
	{
		"name":"神话·情话",
		"singer":"周华健，齐豫",
		"time":"4:26",
		"img":"http://p1.music.126.net/Y1IIadn7rjGrZA5IAKLtBA==/109951163270175127.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E7%A5%9E%E8%AF%9D%C2%B7%E6%83%85%E8%AF%9D.mp3",
		"lrc":"[00:00.00] 作词 : 林夕[00:01.00] 作曲 : 周华健[00:02.00] 编曲 : 洪敬尧[00:03.00][00:24.10]合：爱是愉快是难过是陶醉是情绪[00:27.33]或在日后视作传奇[00:30.56]爱是盟约是习惯是时间是白发[00:33.78]也叫你我乍惊乍喜[00:37.29]完全遗忘自己[00:40.33]竟可相许生与死[00:43.76]来日谁来问起[00:46.82]天高风急双双远飞[00:50.05]爱是微笑是狂笑是傻笑是玩笑[00:53.30]或是为着害怕寂寥[00:56.54]爱是何价是何故在何世[00:59.19]又何以对这世界雪中送火[01:03.25]谁还祈求什么[01:06.26]可歌可泣的结果[01:09.71]谁能承受后果[01:12.77]翻天覆海不枉最初[01:15.25]啊……[01:25.73]有你有我雪中送火[01:28.15]男：爱在迷迷糊糊[01:29.80]盘古初开便开始[01:31.75]这浪浪漫漫旧故事[01:34.63]女：爱在朦朦胧胧[01:36.26]前生今生和他生[01:38.65]怕错过了也不会知[01:41.18]男：跌落茫茫红尘[01:42.73]南北西东亦相依[01:44.75]怕独自活着没意义[01:47.58]女：爱是来来回回[01:49.24]情丝一丝又一丝[01:51.71]合：至你与我此生永不阔别时[01:58.26][02:20.86]合：爱是微笑是狂笑是傻笑是玩笑[02:24.07]或是为着害怕寂寥[02:27.35]爱是何价是何故在何世[02:29.95]又何以对这世界雪中送火[02:34.01]谁还祈求什么[02:37.13]可歌可泣的结果[02:40.53]谁能承受后果[02:43.61]翻天覆海不枉最初[02:46.06]啊……[02:56.58]有你有我雪中送火[02:58.97]男：爱在迷迷糊糊[03:00.64]盘古初开便开始[03:02.57]这浪浪漫漫旧故事[03:05.43]女：爱在朦朦胧胧[03:07.06]前生今生和他生[03:09.52]怕错过了也不会知[03:11.97]男：跌落茫茫红尘[03:13.59]南北西东亦相依[03:15.58]怕独自活着没意义[03:18.47]女：爱是来来回回[03:20.11]情丝一丝又一丝[03:22.47]合：至你与我此生永不阔别时[03:28.20]男：爱在迷迷糊糊[03:29.79]盘古初开便开始[03:31.83]这浪浪漫漫旧故事[03:34.67]女：爱在朦朦胧胧[03:36.27]前生今生和他生[03:38.76]怕错过了也不会知[03:41.19]男：跌落茫茫红尘[03:42.80]南北西东亦相依[03:44.78]怕独自活着没意义[03:47.67]女：爱是来来回回[03:49.31]情丝一丝又一丝[03:51.74]合：至你与我此生永不阔别时[03:58.82]\n"
	},
	{
		"name":"笑看风云",
		"singer":"童珺",
		"time":"3:47",
		"img":"http://p2.music.126.net/hSeKFIhVzJGLpwUE5Rb4qw==/109951164442492074.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E7%AB%A5%E7%8F%BA%20-%20%E7%AC%91%E7%9C%8B%E9%A3%8E%E4%BA%91.mp3",
		"lrc":"[00:00.000] 作词 : 黄沾[00:01.000] 作曲 : 徐嘉良[00:26.53]谁没有一些刻骨铭心事[00:31.43]谁能预计后果[00:34.43]谁没有一些旧恨心魔[00:39.06]一点点无心错[00:42.35]谁没有一些得不到的梦[00:45.64]谁人负你负我多[00:50.48]谁愿意解释为了什么[00:54.58]一笑已经风云过[01:00.53]活得开心 心不记恨[01:04.90]为今天欢笑唱首歌[01:08.73]任胸间吸收新的快乐[01:12.80]在晚风中敞开心锁[01:20.61]谁愿记沧桑匆匆往事[01:24.77]谁人是对是错[01:28.37]从没有解释为了什么[01:32.39]一笑看风云过[01:54.47]谁没有一些得不到的梦[01:58.66]谁人负你负我多[02:02.39]谁愿意解释为了什么[02:06.37]一笑已经风云过[02:12.84]活得开心 心不记恨[02:16.88]为今天欢笑唱首歌[02:21.16]任胸间吸收新的快乐[02:24.85]在晚风中敞开心锁[02:30.20]谁愿记沧桑匆匆往事[02:34.82]谁人是对是错[02:38.36]从没有解释为了什么[02:42.81]一笑看风云过[02:49.25]活得开心 心不记恨[02:52.84]为今天欢笑唱首歌[02:56.93]任胸间吸收新的快乐[03:00.91]在晚风中敞开心锁[03:08.50]谁愿记沧桑匆匆往事[03:12.43]谁人是对是错[03:16.54]从没有解释为了什么[03:20.59]一笑看风云过\n"
	},
	{
		"name":"谁人能这么可以假到底",
		"singer":"刘小慧",
		"time":"4:17",
		"img":"http://p2.music.126.net/g1V2bxkkTXesKr4xPSpEHA==/109951163952592883.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E8%B0%81%E4%BA%BA%E8%83%BD%E8%BF%99%E4%B9%88%E5%88%BB%E6%84%8F%E5%81%87%E5%88%B0%E5%BA%95.mp3",
		"lrc":"[00:00.000] 作词 : 陈少琪[00:24.73]潇洒的一双背影[00:28.03]在这刻痛快与热情[00:32.56]跟她拥抱太高兴[00:35.32]倾出你的似闪电激情[00:39.29]人潮内我极难明 木讷不敢去辩正[00:43.07]如此亲昵笑声[00:46.89]这夜城市像无响一声[00:51.68][00:55.09]哀哭的一双眼睛[00:57.92]愿这刻世界会暂停[01:02.40]归家的你更高兴[01:05.19]轻松去演这真实心灵[01:09.31]仍然是那样忘形 用面孔掩盖罪证[01:12.94]糖衣一般笑声[01:16.85]我在怀里像无呼吸声[01:21.48][01:23.81]谁人能这么刻意假到底[01:27.93]让生命占有一切亦抛掉了一切[01:32.31]所想所爱无可估计[01:35.80]无限次爱得彻底[01:39.39]谁人能这么刻意假到底[01:42.33]让虚伪变作真谛像统治爱真谛[01:47.03]天真的我从不珍贵[01:50.57]还是要强装记忆[01:53.60]没发生一切[01:55.71]～～～[01:58.88][02:05.62][02:09.58]哀哭的一双眼睛[02:12.82]愿这刻世界会暂停[02:17.27]归家的你更高兴[02:20.00]轻松去演这真实心灵[02:23.21]仍然是那样忘形 用面孔掩盖罪证[02:28.07]糖衣一般笑声[02:31.97]我在怀里像无呼吸声[02:36.25][02:38.99]谁人能这么刻意假到底[02:42.96]让生命占有一切亦抛掉了一切[02:46.39]所想所爱无可估计[02:50.65]无限次爱得彻底[02:53.72]谁人能这么刻意假到底[02:57.10]让虚伪变作真谛像统治爱真谛[03:01.58]天真的我从不珍贵[03:06.17]还是要强装记忆[03:08.69]没发生一切～～[03:11.85]→→→→→[03:23.49]谁人能这么刻意假到底[03:27.55]让生命占有一切亦抛掉了一切[03:32.44]所想所爱无可估计[03:35.92]无限次爱得彻底[03:38.60]谁人能这么刻意假到底[03:43.09]让虚伪变作真谛像统治爱真谛[03:47.58]天真的我从不珍贵[03:49.89]还是要强装记忆[03:52.86]没发生一切[03:54.85]～～～[03:58.31][04:10.02][04:16.61]\n"
	},
	{
		"name":"遥远的她",
		"singer":"张学友",
		"time":"4:19",
		"img":"http://p2.music.126.net/i5mIxHoBFysVYwI7ccc-VA==/18815942488116194.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E9%81%A5%E8%BF%9C%E7%9A%84%E5%A5%B9.mp3",
		"lrc":"[00:00.00] 作词 : 潘源良[00:01.00] 作曲 : 谷村新司[00:02.00] 编曲 : 卢东尼[00:03.00] 监制 : 欧丁玉[00:04.00][00:24.99]让晚风轻轻吹送了落霞[00:29.57][00:30.30]我已习惯每个傍晚去想她[00:35.88][00:36.49]在远方的她 此刻可知道[00:41.86][00:42.76]这段情在我心始终记挂[00:48.35][00:48.97]在这半山[00:50.42]那天我知我知快将要别离没说话[00:54.50][00:55.18]望向她[00:56.66]却听到她说不要相约[00:58.36]纵使分隔 相爱不会害怕[01:01.29]遥遥万里 心声有否偏差[01:07.04][01:07.72]正是让这爱试出真与假[01:13.24][01:13.80]遥远的她[01:16.00]仿佛借风声跟我话[01:19.48][01:20.22]热情若冇变 哪管它沧桑变化[01:28.14][01:39.00]但这天收到她爸爸的一封信[01:44.54][01:45.17]信里面说血癌已带走她[01:50.52][01:51.37]但觉得空虚的心[01:54.12]仿佛已僵化[01:56.94][01:57.60]过去事像炮弹 心中爆炸[02:02.48][02:03.82]在这半山[02:05.14]这天我悲痛悲痛不已[02:07.33]在胡乱说话[02:09.06][02:10.03]夜雨中似听到[02:12.03]她说不要相约[02:13.18]纵使分隔 相爱不会害怕[02:16.06]人无觅处[02:18.17]心声有否偏差[02:21.94][02:22.52]正是让这爱试出真与假[02:28.18][02:28.33]遥远的她[02:30.62]仿佛借风声跟我话[02:34.33][02:34.99]热情若冇变 哪管它沧桑变化[02:43.27][03:05.82]遥远的她 不可以再归家[03:11.78][03:12.43]我在梦里却始终只有她[03:17.94][03:18.29]遥远的她[03:20.63]可知我心中的说话[03:24.14][03:24.86]热情并冇变 哪管它沧桑变化[03:30.76]遥远的她 不可以再归家[03:36.87][03:37.42]我在梦里却始终只有她[03:43.49]遥远的她[03:45.57]可知我心中的说话[03:49.20][03:49.84]热情并冇变 哪管它沧桑变化[03:56.02]\n"
	},
	{
		"name":"都是你的错",
		"singer":"陈慧琳，陈乐基",
		"time":"4:06",
		"img":"http://p1.music.126.net/xEvE-bR6zL3NQ4akWhx4CQ==/109951163020573820.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E9%83%BD%E6%98%AF%E4%BD%A0%E7%9A%84%E9%94%99.mp3",
		"lrc":"[00:00.00] 作词 : 梁芷珊[00:01.00] 作曲 : 张宇[00:02.00] 编曲 : 陈家健[00:20.45]都是你的错 关心也是错[00:23.74]你还要把依依不舍都[00:25.92]挂于脸上[00:27.34]都是你的错 潇洒也是错[00:30.62]你还痛哭过[00:34.16]都是你的错 牺牲也是错[00:37.60]你还要听解释怎么[00:39.62]竟变得冷漠[00:41.39]都是你的错 知心也是错[00:44.52]你还看紧我[00:47.71]你叫我怎会可以放手[00:55.29]若你没厮守一生的决心[00:58.79]请不要爱上我这么一个人[01:02.27]在你字典中一句[01:04.49]挥之则去[01:06.26]对我仍过分[01:09.24]若你曾讲的都不可算真[01:12.73]请不要爱上我这么一个人[01:16.18]而其实我太认真[01:18.43]心中很记恨[01:23.04]都是你的错 关心也是错[01:26.32]你还要把依依不舍[01:28.26]都挂于脸上[01:29.96]都是你的错 潇洒也是错[01:33.26]你还痛哭过[01:36.70]都是你的错 牺牲也是错[01:40.18]你还要听解释[01:41.70]怎么竟变得冷漠[01:43.93]都是你的错 知心也是错[01:47.06]你还看紧我[01:50.36]你叫我怎会可以放手[01:57.90]若你没厮守一生的决心[02:01.27]请不要爱上我这么一个人[02:04.81]在你字典中一句[02:07.15]挥之则去[02:08.86]对我仍过分[02:11.79]若你曾讲的都不可算真[02:15.33]请不要爱上我这么一个人[02:18.76]而其实我太认真[02:21.09]心中很记恨[02:26.00]毋须关心我感受[02:32.87]毋须伤透后你方可以放手[02:55.44]若你曾讲的都不可算真[02:58.78]请不要爱上我这么一个人[03:02.22]而其实我太认真[03:04.56]心中很记恨[03:09.14]若你没厮守一生的决心[03:12.68]请不要爱上我这么一个人[03:16.12]在你字典中一句[03:18.40]挥之则去[03:20.17]对我仍过分[03:23.10]若你曾讲的都不可算真[03:26.64]请不要爱上我这么一个人[03:30.08]而其实我太认真[03:32.41]心中很记恨\n"
	},
	{
		"name":"夏日寒风",
		"singer":"谭咏麟",
		"time":"4:06",
		"img":"http://p1.music.126.net/7QSI8r1WDOOt5Q2YUX3khw==/109951166264316023.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E5%A4%8F%E6%97%A5%E5%AF%92%E9%A3%8E.mp3",
		"lrc":"[id:$00000000][ar:谭咏麟][ti:夏日寒风][by:煲剧ing][hash:cf1f037f09e351e2c819e07e30e092ea][al:][sign:][qq:][total:245864][offset:0][00:00.00]谭咏麟- 夏日寒风[00:01.27]作词：林振强[00:02.24]作曲：芹泽广明[00:31.87]挤迫的沙滩里[00:32.90]金啡色的肌肤里[00:34.74]闪烁暑天的汗水[00:38.66]我却觉冷又寒[00:39.78]缩起双肩苦笑着[00:41.41]北风仿佛身边四吹[00:45.37]只因心中温暖[00:46.47]都跟她消失去[00:47.94]今天只得一串泪水[00:52.09]说爱我百万年的她[00:53.93]今爱着谁[00:58.34]我虽不怪她[01:00.57]带走旭日[01:05.20]却一生怪她[01:07.34]只带走痴痴的心[01:09.37]剩低眼泪[01:12.49]狂呼我空虚 空虚[01:15.85]恨极为她心碎[01:19.53]明知结局[01:21.02]何必去做玩耍器具[01:25.60]狂呼我空虚 空虚[01:29.22]怒骂是她不对[01:32.85]强忍眼泪 从此我愿[01:37.25]独在痛苦中活下去[02:13.75]挤迫的沙滩里[02:14.74]金啡色的肌肤里[02:16.28]闪烁暑天的汗水[02:20.23]我却觉冷又寒[02:21.16]缩起双肩苦笑着[02:22.96]北风仿佛身边四吹[02:26.96]只因心中温暖[02:27.96]都跟她消失去[02:29.19]今天只得一串泪水[02:33.64]说爱我百万年的她[02:35.55]今爱着谁[02:39.83]我虽不怪她[02:42.51]带走旭日[02:46.48]却一生怪她[02:49.39]只带走痴痴的心[02:50.75]剩低眼泪[02:53.73]狂呼我空虚 空虚[02:57.33]恨极为她心碎[03:00.43]明知结局[03:02.40]何必去做玩耍器具[03:06.93]狂呼我空虚 空虚[03:10.77]怒骂是她不对[03:13.85]强忍眼泪 从此我愿[03:18.71]独在痛苦中活下去[03:23.50]狂呼我空虚 空虚[03:27.35]恨极为她心碎[03:30.58]明知结局[03:32.44]何必去做玩耍器具[03:36.77]狂呼我空虚 空虚[03:40.58]怒骂是她不对[03:43.79]强忍眼泪 从此我愿[03:48.65]独在痛苦中活下去\n"
	},{
		"name":"爱情陷阱",
		"singer":"谭咏麟",
		"time":"3:53",
		"img":"http://p1.music.126.net/5Ea7YhWKlj7ki6gW6gGNlQ==/109951166316203403.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E7%B2%A4%E8%AF%AD/%E7%88%B1%E6%83%85%E9%99%B7%E9%98%B1.mp3",
		"lrc":"[id:$00000000][ar:谭咏麟][ti:爱情陷阱][by:][hash:1779f79c9730c67cf1d9a92cff9c2a7f][al:][sign:][qq:][total:231000][offset:0][00:00.21]谭咏麟 - 爱情陷阱[00:01.59]作词：潘源良[00:02.45]作曲：芹尺广明[00:20.41]拨着大雾默默地[00:21.72]在觅我的去路[00:23.40]但愿路上幸运[00:24.56]遇着是你的脚步[00:26.55]我要再见你[00:27.96]只想将心声透露 爱慕[00:32.97]独自望着路上[00:34.24]密密画满的记号[00:36.12]像是混乱[00:36.93]又像特别为了指我路[00:39.22]到处去碰 到处去看[00:40.94]堕入陷阱 方知太糊涂[00:44.70]真心被俘虏 仿佛遭圈套[00:48.61]探索这爱路[00:52.45]你那美态已叫我醉倒[00:57.58]我堕入情网 你却在网外看[01:01.75]始终不释放[01:05.02]你笑笑看看我 像是望着猎物[01:08.26]我心已伤[01:11.68]我堕入情网 你却在网外看[01:16.27]始终不释放[01:19.53]恨 爱 心中激荡[01:25.93]这陷阱 这陷阱 这陷阱[01:28.31]偏我遇上[01:51.17]拨着大雾[01:52.33]默默地在觅我的去路[01:54.56]但愿路上[01:55.32]幸运遇着是你的脚步[01:57.71]我要再见你[01:59.03]只想将心声透露 爱慕[02:04.15]独自望着路上[02:05.31]密密画满的记号[02:07.29]像是混乱[02:08.05]又像特别为了指我路[02:10.49]到处去碰 到处去看[02:12.22]堕入陷阱 方知太糊涂[02:15.93]真心被俘虏 仿佛遭圈套[02:19.59]探索这爱路[02:23.60]你那美态已叫我醉倒[02:28.79]我堕入情网 你却在网外看[02:33.05]始终不释放[02:36.15]你笑笑看看我 像是望着猎物[02:39.35]我心已伤[02:43.01]我堕入情网 你却在网外看[02:47.45]始终不释放[02:50.61]恨 爱 心中激荡[02:57.11]这陷阱 这陷阱 这陷阱[02:59.39]偏我遇上[03:02.29]我堕入情网 你却在网外看[03:06.58]始终不释放[03:09.76]你笑笑看看我 像是望着猎物[03:12.83]我心已伤[03:16.76]我堕入情网 你却在网外看[03:20.98]始终不释放[03:24.19]恨 爱 心中激荡[03:30.71]这陷阱 这陷阱 这陷阱[03:32.99]偏我遇上[03:37.10]这陷阱 这陷阱 这陷阱[03:39.22]偏我遇上\n"
	},
	{
		"name":"風になれ",
		"singer":"大黑摩季",
		"time":"5:54",
		"img":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002I6KpC4Igjd2.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E5%A4%A7%E9%BB%92%E6%91%A9%E5%AD%A3%20-%20%E9%A2%A8%E3%81%AB%E3%81%AA%E3%82%8C.mp3",
		"lrc":"[id:$00000000][ar:大黒摩季][ti:風になれ][by:aqua千世][hash:795bb01b5d857b207b71072fd5dc83ae][al:(null)][sign:][qq:][total:352000][offset:0][00:30.14]道のない道を行けば[00:34.05]色んなことで迷う[00:39.53]方のない愛を信じれば[00:43.67]方が欲しくなる[00:47.62]どうしてあれもこれも[00:52.84]欲しくなるのだろう[00:57.24]何も望まない貴方は[01:02.63]とても綺麗だから[01:08.88]風になれ[01:10.95]この願い[01:13.60]夢を追いかけて[01:18.62]心の抜くままに[01:23.57]溢れる思いままに[01:27.94]何処までも何処まてでも[01:32.24]自由に飛んで行きたい[01:37.67]限りあるこの今を駆け抜けて[01:44.04]fly in the sky[01:55.51]余計な言葉を言わず[01:59.76]悲しくても笑ったり[02:04.83]優しいふりしたりするのは[02:09.22]誰の為なんだろう[02:13.26]貴方に伝えたいこと[02:18.11]沢山沢山あるのに[02:22.91]言葉や常識に邪魔をされて[02:28.17]上手く言えないから[02:34.49]風になれ[02:36.47]この気持ち[02:39.13]時も追い越して[02:44.27]揺れてる胸の中へ[02:48.76]まっすぐに飛んで行け[02:53.43]いつまでもいつの日も[02:58.01]貴方を思っています[03:03.27]それだけこれだけは本当です[03:09.66]fly in the sky\n"
	},
	{
		"name":"風姿花伝",
		"singer":"谷村新司",
		"time":"5:40",
		"img":"http://p1.music.126.net/IbdETavu_XNsij9OgcSzwQ==/19172184253589771.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E8%B0%B7%E6%9D%91%E6%96%B0%E5%8F%B8%2C%E3%82%A2%E3%83%AA%E3%82%B9%20-%20%E9%A2%A8%E5%A7%BF%E8%8A%B1%E4%BC%9D.mp3",
		"lrc":"[00:00.00] 作词 : 谷村新司[00:01.00] 作曲 : 谷村新司[00:21.00][00:25.40]風は叫ぶ人の世の哀しみを[00:35.40]星に抱かれた    静寂の中で[00:45.40]胸を開けば燃ゆる血潮の赤は[00:55.40]共に混ざりて大いなる流れに[01:06.00][01:08.00]人は夢見る　故に儚く[01:18.00]人は夢見る　故に生きるもの[01:30.00][01:30.40]嗚呼  嗚呼  誰も知らない[01:40.40]嗚呼  嗚呼  明日散る花さえも[01:50.50][01:56.10][02:01.50][02:11.50][02:21.00][02:25.40]固(かた)い契り   爛漫の花の下[02:35.40]月を飲み干(ほ)す   宴(うたげ)の盃(さかずき)[02:46.00]君は帰らず     残されて佇(たたず)めば[02:56.00]肩にあの日の     誓いの花吹雪(はなふぶき)[03:07.00][03:08.30]人は信じて　そして破れて[03:18.40]人は信じて　そして生きるもの[03:30.00][03:31.00]嗚呼  嗚呼  誰も知らない[03:41.00]嗚呼  嗚呼  明日散る花さえも[03:51.00][04:01.00][04:11.00]国は破れて  城も破れて[04:21.00]草は枯れても  風は鳴き渡る[04:33.00][04:33.40]嗚呼  嗚呼  誰も知らない[04:43.40]嗚呼  嗚呼  風のその姿を[04:53.40]嗚呼  嗚呼　花が伝える[05:03.40]嗚呼  嗚呼  風のその姿を[05:16.00][05:23.50][05:28.50][05:33.50][05:39.00]\n"
	},
	{
		"name":"僕が死のうと思ったのは",
		"singer":"中島美嘉",
		"time":"6:22",
		"img":"http://p1.music.126.net/SO-nCavxDWC8nbbmrkMsOQ==/109951165946280367.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E5%83%95%E3%81%8C%E6%AD%BB%E3%81%AE%E3%81%86%E3%81%A8%E6%80%9D%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF.mp3",
		"lrc":"[00:28.27]僕が死のうと思ったのは[00:34.27] ウミネコが桟橋で鳴いたから[00:39.23]波の随意に浮かんで消える[00:45.63]過去も啄ばんで飛んでいけ[00:50.94]僕が死のうと思ったのは[00:56.71]誕生日に杏の花が咲いたから[01:02.41]その木漏れ日でうたた寝したら[01:08.23]虫の死骸と土になれるかな[01:14.26]薄荷飴[01:15.71]漁港の灯台[01:16.56]錆びたアーチ橋[01:18.41]捨てた自転車[01:19.61]木造の駅のストーブの前で[01:23.26]どこにも旅立てない心[01:26.17]今日はまるで昨日みたいだ[01:28.20]明日を変えるなら今日を変えなきゃ[01:31.70]分かってる 分かってる けれど[01:39.83]僕が死のうと思ったのは[01:45.93]心が空っぽになったから[01:51.18]満たされないと泣いているのは[01:56.98] きっと満たされたいと願うから[02:25.61]僕が死のうと思ったのは[02:31.71] 靴紐が解けたから[02:36.92]結びなおすのは苦手なんだよ[02:42.52] 人との繋がりもまた然り[02:48.32]僕が死のうと思ったのは[02:53.97]少年が僕を見つめていたから[02:59.78]ベッドの上で土下座してるよ[03:05.59]あの日の僕にごめんなさいと[03:11.49]パソコンの薄明かり[03:14.49]上階の部屋の生活音[03:18.15]インターフォンのチャイムの音[03:19.55] 耳を塞ぐ鳥かごの少年[03:23.16]見えない敵と戦ってる[03:25.66] 六畳一間のドンキホーテゴールはどうせ醜いものさ[03:35.79]僕が死のうと思ったのは[03:42.11]冷たい人と言われたから[03:48.31]愛されたいと泣いているのは[03:53.68] 人の温もりを知ってしまったから[04:22.79]僕が死のうと思ったのは[04:28.24] あなたが綺麗に笑うから[04:33.89]死ぬことばかり考えてしまうのは[04:39.82]きっと生きる事に真面目すぎるから[04:45.57]僕が死のうと思ったのは[04:51.33]まだあなたに出会ってなかったから[04:56.78]あなたのような人が生まれた[05:02.47]世界を少し好きになったよ[05:08.53]あなたのような人が生きてる[05:14.20]世界に少し期待するよ\n"
	},
	{
		"name":"旅人のうた",
		"singer":"中岛美雪",
		"time":"6:36",
		"img":"http://p1.music.126.net/QpneccAFVg4Iz-cYMjU1xA==/109951164387933643.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E4%B8%AD%E5%B3%B6%E3%81%BF%E3%82%86%E3%81%8D%20-%20%E6%97%85%E4%BA%BA%E3%81%AE%E3%81%86%E3%81%9F.mp3",
		"lrc":"[id:$00000000][ar:中島みゆき][ti:旅人のうた (Live)][by:][hash:6637c597f58922667fa6ffb781845f65][al:][sign:][qq:][total:397000][offset:0][00:00.00]中島みゆき - 旅人のうた(Live)[00:01.80]作词：中島みゆき[00:02.91]作曲：中島みゆき[00:30.02]男には男の[00:34.98]ふるさとがあるという[00:39.88]女には女の[00:44.85]ふるさとがあるという[00:49.80]なにも持たないのは[00:54.80]さすらう者ばかり[00:59.66]どこへ帰るのかも[01:04.70]わからない者ばかり[01:09.04]愛よ伝われ[01:13.96]ひとりさすらう旅人にも[01:18.90]愛よ伝われ[01:23.93]ここへ帰れと[01:29.07]あの日々は消えても[01:34.02]まだ夢は消えない[01:38.99]君よ歌ってくれ[01:43.82]僕に歌ってくれ[01:48.73]忘れない忘れないものも[01:55.05]ここにあるよと[01:58.73]あの愛は消えても[02:03.68]まだ夢は消えない[02:08.68]君よ歌ってくれ[02:13.59]僕に歌ってくれ[02:18.38]忘れない忘れないものも[02:24.69]ここにあるよと[02:58.48]西には[03:00.40]西だけの正しさが[03:05.57]あるという[03:08.35]東には東の正しさが[03:15.48]あるという[03:18.11]なにも知らないのは[03:23.17]さすらう者ばかり[03:28.13]日ごと夜ごと[03:31.22]変わる風向きに[03:35.41]まどうだけ[03:37.58]風に追われて[03:42.37]消えかける歌を[03:45.89]僕は聞く[03:47.44]風をくぐって僕は応える[03:57.56]あの日々は消えても[04:02.42]まだ夢は消えない[04:07.32]君よ歌ってくれ[04:12.41]僕に歌ってくれ[04:17.32]忘れない忘れないものも[04:23.49]ここにあるよと[04:27.19]あの愛は消えても[04:32.10]まだ夢は消えない[04:37.29]君よ歌ってくれ[04:42.05]僕に歌ってくれ[04:46.87]忘れない忘れないものも[04:53.25]ここにあるよと[04:56.90]あの日々は消えても[05:01.82]まだ夢は消えない[05:06.78]君よ歌ってくれ[05:11.75]僕に歌ってくれ[05:16.66]忘れない忘れないものも[05:22.89]ここにあるよと[05:26.59]あの愛は消えても[05:31.49]まだ夢は消えない[05:36.40]君よ歌ってくれ[05:41.41]僕に歌ってくれ[05:46.27]忘れない忘れないものも[05:52.77]ここにあるよと\n"
	},
	{
		"name":"御機嫌如何 [Live]",
		"singer":"中岛美雪",
		"time":"4:28",
		"img":"http://p1.music.126.net/Jd5f7eWSsdgG51UllSdRXA==/619025046449584.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E4%B8%AD%E5%B3%B6%E3%81%BF%E3%82%86%E3%81%8D%20-%20%E5%BE%A1%E6%9C%BA%E5%AB%8C%E5%A6%82%E4%BD%95%5BLive%5D.mp3",
		"lrc":"[00:00.000] 作词 : 中島みゆき[00:01.000] 作曲 : 中島みゆき[00:09.62][00:42.40]もしも 離れ離れになっても 変わらないと[00:50.07]あれほど誓った ことばが風に溶けてゆく[00:58.43]なさけないものですね あなたを忘れました[01:06.03]女は意外と 立ちなおれるものなのでしょう[01:13.95]御機嫌如何ですか[01:17.98]私は あいかわらずです[01:21.70]泣いてる日もあります 笑う日だってあります[01:30.27]氷の女発の 手紙をしたためます[01:37.89]あなたも 私を もう気づかわないでいいわ[01:47.56][02:18.48]そうよ日々の暮らしは 心とは別にゆく[02:25.97]泣きすぎて 血を吐いて 喉でそれでも水を飲む[02:34.00]人形たちのような ヒロインじゃあるまいし[02:41.93]嘆いていないわ うぬぼれないでほしいのよ[02:50.02]御機嫌如何ですか[02:53.93]私は あいかわらずです[02:57.83]泣いてる日もあります 笑う日だってあります[03:06.12]氷の女発の 手紙をしたためます[03:13.92]あなたも 私を もう気づかわないでいいわ[03:21.93]御機嫌如何ですか[03:25.92]私は あいかわらずです[03:29.82]御機嫌如何ですか[03:33.92]私を 覚えていますか[03:38.18]氷の女発の 手紙をしたためます[03:45.89]涙で 濡らした 切手を最後に貼ります\n"
	},
	{
		"name":"一期一会",
		"singer":"中岛美雪",
		"time":"5:32",
		"img":"http://p1.music.126.net/Jd5f7eWSsdgG51UllSdRXA==/619025046449584.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E4%B8%80%E6%9C%9F%E4%B8%80%E4%BC%9A.mp3",
		"lrc":"[id:$00000000][ar:中岛みゆき][ti:一期一会][by:ゆう][hash:bee19702b7759330e834866c4c99c2e3][al:][sign:][qq:][total:330000][offset:0][00:04.17]中島みゆき[00:06.02]歌詞｜曲：中島みゆき[00:24.32]見たこともない空の色[00:30.07]見たこともない海の色[00:36.07]見たこともない野を越えて[00:42.07]見たこともない人に会う[00:47.93]急いで道をゆく人もあり[00:54.29]泣き泣き 道をゆく人も[00:59.44]忘れないよ远く離れても[01:05.54]短い日々も 浅い縁(えにし)も[01:11.54]忘れないで私のことより[01:17.25]あなたの笑颜を 忘れないで[01:48.24]見たこともない月の下[01:54.11]見たこともない枝の下[02:00.16]見たこともない轩の下[02:06.18]見たこともない酒を汲む[02:11.94]人間好きになりたいために[02:18.14]旅を続けてゆくのでしょう[02:23.19]忘れないよ远く離れても[02:29.45]短い日々も 浅い縁も[02:35.41]忘れないで私のことより[02:41.41]あなたの笑颜を 忘れないで[03:16.49]一期一会の はかなさつらさ[03:22.59]人恋しさをつのらせる[03:27.90]忘れないよ远く離れても[03:33.85]短い日々も 浅い縁(えにし)も[03:39.45]忘れないで私のことより[03:45.90]あなたの笑颜を 忘れないで[03:53.90]忘れないよ远く離れても[03:59.41]短い日々も 浅い縁(えにし)も[04:04.71]忘れないで私のことより[04:11.46]あなたの笑颜を 忘れないで[04:17.51]あなたの笑颜を 忘れないで\n"
	},
	{
		"name":"竹の歌",
		"singer":"中岛美雪",
		"time":"3:33",
		"img":"http://p1.music.126.net/Jd5f7eWSsdgG51UllSdRXA==/619025046449584.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E7%AB%B9%E3%81%AE%E6%AD%8C.mp3",
		"lrc":"[id:$00000000][ar:中岛美雪][ti:竹の歌 (竹之歌)(网友自制)][by:][hash:0f34fdb84f7f1d664a60a6e4d6dff76f][al:][sign:][qq:][total:213055][offset:0][00:00.06]中島みゆき - 竹の歌(网友自制)[00:02.12]作词：中島みゆき[00:03.34]作曲：中島みゆき[00:22.00]遙かな山から[00:25.75]吹きつける風に[00:29.39]ひれ伏しながら[00:32.78]けして折れはせぬ[00:36.72]押し寄せる雲から[00:40.52]打ちやまぬ雨に[00:44.31]ひれ伏しながら[00:47.50]けして折れはせぬ[00:51.55]私がなりたいものはといえば[00:58.93]地下に根を張る あの竹林[01:06.28]月の日 火の日[01:10.02]水の日 木の日[01:13.76]金に踊って 土と日に還る[01:21.14]私が住みたい国はといえば[01:28.53]地下に根を張る[01:32.33]あの竹の国[02:05.57]ゆく夏来る夏[02:09.16]照りつける熱に[02:12.91]埋ずもれながら[02:16.19]けして消えはせぬ[02:20.31]青に黄に緑に[02:24.01]移りゆく旗に[02:27.70]移ろいながら[02:30.99]けして消えはせぬ[02:35.20]私が覚えて残せるものは[02:42.49]地下に根を張る[02:46.19]あの竹の歌[02:49.83]月の日 火の日[02:53.57]水の日 木の日[02:57.26]金に踊って 土と日に還る[03:04.66]私が住みたい国はといえば[03:11.95]地下に根を張る[03:15.75]あの竹の国[03:19.39]月の日 火の日[03:23.13]水の日 木の日[03:26.82]金に踊って 土と日に還る\n"
	},
	{
		"name":"with",
		"singer":"中岛美雪",
		"time":"3:33",
		"img":"http://p2.music.126.net/3IZ3bRcgJ63NdwI7r8DWkw==/576144092966690.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/with.mp3",
		"lrc":"[id:$00000000][ar:中岛美雪][ti:With 现场版 中日字幕][by:][hash:176236d7cfce9f8eb7d61cd103a8c8e6][al:][sign:][qq:][total:298109][offset:0][00:00.00]中島みゆき - With[00:01.07]作词：中島みゆき[00:02.29]作曲：中島みゆき[00:15.88]僕のことばは[00:19.49]意味をなさない[00:22.24]まるで遠い砂漠を[00:25.74]旅してるみたいだね[00:30.43]ドアのあかない[00:34.06]ガラスの城で[00:36.80]みんな戦争の仕度を[00:40.95]続けてる[00:44.73]旅をすること[00:47.04]自体おりようとは[00:49.84]思わない[00:51.92]手帳にはいつも[00:54.85]旅立ちとメモしてある[00:57.89]けれど[00:59.05]With そのあとへ[01:01.53]君の名を綴っていいか[01:06.24]With 淋しさと虚しさと[01:10.57]疑いとのかわりに[01:13.70]With そのあとへ[01:16.08]君の名を綴っていいか[01:20.78]With 淋しさと虚しさと[01:25.06]疑いとのかわりに[01:28.25]With[01:43.10]生まれる前に僕は夢みた[01:49.47]誰が僕と寒さを[01:53.06]分かちあってゆくだろう[01:57.69]時の流れは僕に教えた[02:04.05]みんな自分のことで 忙しいと[02:11.99]誰だって旅くらい[02:15.65]ひとりでもできるさ[02:18.08]でもひとりきり泣けても[02:22.22]ひとりきり[02:23.44]笑うことはできない[02:26.32]With そのあとへ[02:28.75]君の名を綴っていいか[02:33.50]With 淋しさと虚しさと[02:37.80]疑いとのかわりに[02:40.94]With そのあとへ[02:43.32]君の名を綴っていいか[02:48.03]With 淋しさと虚しさと[02:52.28]疑いとのかわりに[02:55.52]With[03:03.31]僕のことばは[03:06.71]意味をなさない[03:09.49]まるで遠い砂漠を[03:13.03]旅してるみたいだね[03:16.18]けれど[03:17.19]With そのあとへ[03:19.69]君の名を綴っていいか[03:24.40]With 淋しさと虚しさと[03:28.70]疑いとのかわりに[03:31.84]With そのあとへ[03:34.17]君の名を綴っていいか[03:38.92]With 淋しさと虚しさと[03:43.22]疑いとのかわりに[03:46.36]With そのあとへ[03:48.68]君の名を綴っていいか[03:53.44]With 淋しさと虚しさと[03:57.90]疑いとのかわりに[04:00.93]With そのあとへ[04:03.31]君の名を綴っていいか[04:07.93]With 淋しさと虚しさと[04:12.25]疑いとのかわりに[04:15.49]With\n"
	},
	{
		"name":"帰れない者たちへ",
		"singer":"中岛美雪",
		"time":"5:18",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909125126251895.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E5%B8%B0%E3%82%8C%E3%81%AA%E3%81%84%E8%80%85%E3%81%9F%E3%81%A1%E3%81%B8.mp3",
		"lrc":"[id:$00000000][ti:帰れない者たちへ][ar:中岛美雪][00:00.74]帰れない者たちへ - 中島みゆき[00:03.73]作詞：中島みゆき[00:05.36]作曲：中島みゆき[00:28.27]帰れない者たちが 月を見る十三夜[00:39.48]「帰る気もないのね」と[00:45.03]手紙読む十三夜[00:51.72]冷たい肌です 涙が浸みて[01:02.86]冷たい人です 恩知らずで[01:13.09]帰れない者たちが 月に泣く十三夜[01:46.90]帰れない歳月 さいげつ)を[01:52.43]夢だけがさかのぼる[01:58.02]足跡も探せずに 影と泣く十三夜[02:10.30]異人の形 なり)です 旅した者は[02:21.43]戻れぬ関 せき)です よそ者には[02:31.83]帰れない歳月 さいげつ)を[02:37.38]夢だけがさかのぼる[03:28.94]冷たい肌です 涙が浸みて[03:40.02]冷たい人です 恩知らずで[03:50.45]帰れない者たちが 月に泣く十三夜[04:01.62]帰れない者たちが 月に泣く十三夜\n"
	},
	{
		"name":"月光",
		"singer":"鬼束ちひろ",
		"time":"5:09",
		"img":"http://p1.music.126.net/XC8PSYpBgTBZxEVNF9Mnqg==/109951166237739084.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E6%9C%88%E5%85%89.mp3",
		"lrc":"[id:$00000000][ar:鬼束ちひろ][ti:月光][by:][hash:1d601fabf3034631f1ea7fc94c57208a][al:][sign:][qq:][total:311160][offset:0][00:13.09]I am GOD'S CHILD[00:16.54]この腐敗した世界に[00:21.29]堕とされた[00:25.49]How do I live on such a field[00:28.84]こんなもののために[00:32.80]生まれたんじゃない[01:05.02]突風に埋もれる足取り[01:10.62]倒れそうになるのを[01:17.12]この鎖が 許さない[01:24.07]心を開け渡したままで[01:29.97]貴方の感覚だけが[01:33.64]散らばって[01:36.24]私はまだ上手に[01:39.59]片付けられずに[01:43.95]I am GOD'S CHILD[01:47.40]この腐敗した世界に[01:52.41]堕とされた[01:56.65]How do I live on such a field[02:00.28]こんなもののために[02:04.03]生まれたんじゃない[02:14.08]理由をもっと[02:16.08]喋り続けて[02:19.65]私が眠れるまで[02:25.70]効かない薬ばかり[02:29.15]転がってるけど[02:32.35]ここに声も無いのに[02:35.45]一体何を信じれば[02:40.20]I am GOD'S CHILD[02:43.55]哀しい音は背中に[02:47.65]爪跡を付けて[02:52.75]I can't hang out this world[02:56.00]こんな思いじゃ[02:59.29]どこにも居場所なんて無い[03:07.09]不愉快に冷たい壁とか[03:13.34]次はどれに弱さを許す[03:18.83]最後になど[03:20.36]手を伸ばさないで[03:22.21]貴方なら救い出して[03:25.75]私を 静寂から[03:31.55]時間は痛みを[03:34.65]加速させて行く[03:45.84]I am GOD'S CHILD[03:49.24]この腐敗した世界に[03:54.04]堕とされた[03:58.30]How do I live on such a field[04:01.70]こんなもののために[04:05.64]生まれたんじゃない[04:11.29]I am GOD'S CHILD[04:14.10]哀しい音は背中に[04:19.17]爪跡を付けて[04:23.97]I can't hang out this world[04:27.62]こんな思いじゃ[04:30.27]どこにも居場所なんて無い[04:43.05]How do I live on such a field\n"
	},
	{
		"name":"ロンリーチャップリン",
		"singer":"鈴木聖美-WOMAN",
		"time":"4:49",
		"img":"http://p1.music.126.net/4nhuVtlkX1_sWfAko4IiIg==/109951166200598659.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%83%AD%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%81%E3%83%A3%E3%83%83%E3%83%97%E3%83%AA%E3%83%B3.mp3",
		"lrc":"[00:00.000] 作词 : Fumiko Okada[00:01.000] 作曲 : Masayuki Suzuki[00:17.87]遠くを見る目に 風が映る[00:25.47]いつかそんなことがあったね[00:34.71]窗辺にもたれた あなたの顔[00:42.44]私だけに见せる哀愁[00:51.64]ロンリー?チャップリン[00:56.01]時が過ぎ あなたが消えても[01:04.46]きっと待つわ[01:10.72]少年のように ほほえんで[01:18.54]あなたの帰る場所は[01:22.60]私の胸でしょうね[01:27.78]見果てぬ夢が ある限り[01:35.40]Oh,Do What you wanna do again[01:39.41]Oh,Do What you wanna do again[02:01.61]コバルト色した 空をながめ[02:09.16]指を折って月日を数える[02:18.46]あなたは私を 恋人じゃない[02:26.23]友達さというけど違うわ[02:35.37]ロンリー?チャップリン[02:39.69]あなたから 愛され私は[02:48.01]変わったの[02:54.56]二人をつなぐ あのメロディー[03:02.12]どこから聞こえるのか[03:06.28]いつかわかるでしょうね[03:11.36]見果てぬ夢が ある限り[03:19.07]Oh,Do What you wanna do again[03:23.14]Oh,Do What you wanna do again[03:53.84]二人をつなぐ あのメロディー[04:01.41]どこから聞こえるのか[04:05.56]いつかわかるでしょうね[04:10.43]見果てぬ夢が ある限り[04:18.26]Oh,Do What you wanna do again[04:22.41]Oh,Do What you wanna do again\n"
	},
	{
		"name":"春よ、来い",
		"singer":"池田绫子",
		"time":"4:45",
		"img":"http://p2.music.126.net/0_rg75YieW-409sJHRnMhg==/5788928720432742.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E6%B1%A0%E7%94%B0%E7%B6%BE%E5%AD%90%20-%20%E6%98%A5%E3%82%88%E3%80%81%E6%9D%A5%E3%81%84.mp3",
		"lrc":"[id:$00000000][ti:春よ、来い (春天，来吧)][ar:池田綾子 (いけだ あやこ)][00:00.53]春よ、来い (春天，来吧) - 池田綾子 (いけだ あやこ)[00:01.94]词：池田綾子[00:02.16]曲：松任谷由実[00:24.95]淡き光立つ俄雨[00:30.34]いとし面影の沈丁花[00:36.28]溢るる涙の蕾から[00:41.73]ひとつひとつ香り始める[00:47.73]それはそれは[00:50.77]空を越えて[00:53.75]やがてやがて[00:56.69]迎えに来る[00:59.82]春よ遠き春よ[01:05.71]瞼閉じればそこに[01:11.68]愛をくれし君の[01:18.03]なつかしき声がする[01:36.70]君に預けし[01:39.44]我が心は[01:42.33]今でも返事を待っています[01:48.49]どれほど月日が流れても[01:53.80]ずっとずっと待っています[01:59.84]それはそれは[02:02.71]明日を越えて[02:05.72]いつかいつか[02:08.75]きっと届く[02:11.77]春よまだ見ぬ春[02:17.60]迷い立ち止まるとき[02:23.68]夢をくれし君の[02:29.82]眼差しが肩を抱く[02:36.03]夢よ浅き夢よ[02:41.76]私はここにいます[02:47.71]君を想いながら[02:53.96]ひとり歩いています[03:00.19]流るる雨のごとく[03:06.38]流るる花のごとく[03:14.26]春よ遠き春よ[03:20.52]瞼閉じればそこに[03:26.67]愛をくれし君の[03:33.10]なつかしき声がする[03:38.69]春よまだ見ぬ春[03:44.68]迷い立ち止まるとき[03:50.64]夢をくれし君の[03:57.03]眼差しが肩を抱く[04:02.75]春よまだ見ぬ春\n"
	},
	{
		"name":"人间模様",
		"singer":"石川さゆり",
		"time":"4:36",
		"img":"http://p2.music.126.net/G6PSbxxc7hD7mk9s-IlD7Q==/885106860403758.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E7%9F%B3%E5%B7%9D%E3%81%95%E3%82%86%E3%82%8A%20-%20%E4%BA%BA%E9%97%B4%E6%A8%A1%E6%A7%98.mp3",
		"lrc":"[00:22.63]上手に口説いて くれたなら[00:29.80]今すぐ返事が 出来るのに[00:36.90]大事な時には うつむいて[00:43.94]お酒の匂い 嗅いでいる[00:51.02]ジョークもいわずに 歌わずに[00:58.17]静かに笑って いるけれど[01:05.25]少ない言葉は すべてみな[01:12.33]真実なのは わかってる[01:18.62]蝶々でないし 孔雀でないし[01:34.77]香り自慢の 花でなし[01:41.15]ただの人間 ただの男の[01:48.68]そんなあんたが大好きなのさ[02:16.62]少しはきれいに 飾ったら[02:23.75]結構もてると 思うのに[02:30.78]かまわぬ身なりで 野暮をする[02:37.86]もてない方が 気楽だと[02:45.05]何かがあったら 手をひろげ[02:52.13]私を守ってくれそうな[02:59.21]何かがあったら 抱き上げて[03:06.73]私を運びそうなひと[03:13.01]蝶々でないし 孔雀でないし[03:28.84]香り自慢の 花でなし[03:35.45]ただの人間 ただの男の[03:43.04]そんなあんたが大好きなのさ[03:56.70]ただの人間 ただの男の[04:04.53]そんなあんたが大好きなのさ\n"
	},
	{
		"name":"影法師",
		"singer":"ふきのとう",
		"time":"3:35",
		"img":"http://p1.music.126.net/ngeUWijhDFuONQzPGmUTdw==/880708813848722.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%81%B5%E3%81%8D%E3%81%AE%E3%81%A8%E3%81%86%20-%20%E5%BD%B1%E6%B3%95%E5%B8%88.mp3",
		"lrc":"[00:06.56]影法师[00:11.32]作词：山木康世[00:14.09]作曲：山木康世[00:27.51]おまえの小さな想い出を　おかっぱ头の面影を[00:35.79]も一度见たくて远まわり　夕焼けこやけ町[00:44.61]今でも覚えてるか[00:48.34]好きだと一言いえず[00:52.77]一人后ろ姿见ていた[00:57.01]一人ぼっち　影法师[01:04.56]おまえの小さな想い出を　浴衣姿の面影を[01:12.88]も一度见たくて远まわり　夕焼けこやけ町[01:21.38]今でも覚えてるか[01:26.80]自転车の后ろに乗せて[01:30.12]夏祭りサーカス见物に[01:35.74]手をつないだ　影法师[02:05.82]おまえの小さな想い出を　涙でにじんだ面影を[02:14.09]も一度见たくて远まわり　夕焼けこやけ町[02:22.73]今でも覚えてるか[02:26.98]本気で爱していたよ[02:31.50]嫁に行く姿见送った[02:36.04]离ればなれ　影法师[02:40.97]今でも覚えてるか[02:44.08]本気で爱していたよ[02:48.78]嫁に行く姿见送った[02:53.57]离ればなれ　影法师[02:57.66]离ればなれ　影法师[03:02.23]离ればなれ　影法师\n"
	},
	{
		"name":"風来坊",
		"singer":"ふきのとう",
		"time":"4:03",
		"img":"http://p1.music.126.net/ngeUWijhDFuONQzPGmUTdw==/880708813848722.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%81%B5%E3%81%8D%E3%81%AE%E3%81%A8%E3%81%86%20-%20%E9%A3%8E%E6%9D%A5%E5%9D%8A.mp3",
		"lrc":"[id:$00000000][ar:ふきのとう][ti:风来坊][by:][hash:d7b18977d66ef19f1ee77fb3a3ad21b9][al:][sign:][qq:][total:0][offset:0][00:00.00]ふきのとう - 風来坊[00:06.75]词：山木康世[00:13.50]曲：山木康世[00:20.25]この空どこまで高いのか[00:24.26]青い空[00:25.47]お前と見上げたかった[00:29.57]飛行機雲のかかる空[00:33.80]風来坊[00:35.04]サヨナラがよく似合う[00:39.12]歩き疲れて[00:41.44]立ち止まり[00:43.76]振り向き振り向き[00:46.16]来たけれど[00:47.85]雲がちぎれ[00:50.88]消えるだけ[00:52.70]空は高く高く[01:00.12]この風どこまで強いのか[01:04.57]北の風[01:05.84]お前と防ぎたかった[01:09.94]ピューピュー[01:11.28]身体を刺す風[01:14.20]風来坊[01:15.38]うつむきがよく似合う[01:19.66]歩き疲れて[01:22.03]立ち止まり[01:24.44]振り向き振り向き[01:26.82]来たけれど[01:28.75]背中丸め直すだけ[01:33.49]風は強く強く[01:43.80]この道どこまで遠いのか[01:47.91]恋の道[01:49.10]お前と暮らしたかった[01:53.24]振られ捨てられ[01:55.67]気付く道[01:57.46]風来坊[01:58.68]強がりがよく似合う[02:02.84]歩き疲れて[02:05.23]立ち止まり[02:07.61]振り向き振り向き[02:09.97]来たけれど[02:11.88]瞳熱くうるむだけ[02:16.63]道は遠く遠く[02:40.80]この坂どこまで続くのか[02:45.24]上り坂[02:46.42]お前と歩きたかった[02:50.61]誰でも[02:51.82]一度は上る坂[02:54.77]風来坊[02:56.01]独りがよく似合う[03:00.16]歩き疲れて[03:02.54]立ち止まり[03:04.88]振り向き振り向き[03:07.31]来たけれど[03:09.10]影が長く[03:12.14]伸びるだけ[03:14.00]坂は続く続く[03:18.89]坂は続く続く\n"
	},
	{
		"name":"涙をたばねて",
		"singer":"小川範子",
		"time":"4:14",
		"img":"http://p2.music.126.net/PHxFB1KtOUaLPNoCVLrtsQ==/636617232493977.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E5%B0%8F%E5%B7%9D%E7%AF%84%E5%AD%90%20-%20%E6%B6%99%E3%82%92%E3%81%9F%E3%81%B0%E3%81%AD%E3%81%A6.mp3",
		"lrc":"[00:00.000] 作词 : 川村真澄[00:01.000] 作曲 : 中崎英也[00:18.78]偶然のように 手渡すつもりの[00:27.01]白い 花束[00:33.85]待ちぶせたパティオ 自動ドアの音[00:42.03]胸が 胸が 痛くなる[00:49.50]だけど あなた 気づかない横顔[00:58.12]急ぎ足 すれ違う[01:04.78]ねえ 好きですか つぼみだけのブーケ[01:12.38]話しかける言葉 ずっと迷ったのに[01:19.90]ねえ 見えますか わたしの指先[01:27.60]流れ出ないように[01:32.18]涙をたばねて あなたに送るわ[01:52.06]きっかけを待った とまどいの季節[02:00.08]これで終わりね[02:07.78]あなたの左を 歩くその女性(ひと)は[02:15.32]とてもとても 白い肌[02:22.32]いつか わたし夢に見た光景[02:31.34]遠くから見送った[02:38.12]ねえ 好きですか 赤と白のチェック[02:45.62]あなたのシャツまねて こっそり買ったのに[02:53.23]ねえ 見えますか 車道の向こうから[03:00.89]コート脱いだ胸に[03:05.45]涙をたばねて 飾っているのよ[03:24.94]ねえ 好きですか つぼみだけのブーケ[03:33.20]話しかける言葉 ずっと迷ったのに[03:40.80]ねえ 見えますか わたしの指先[03:48.34]流れ出ないように[03:52.92]涙をたばねて あなたに送るわ\n"
	},
	{
		"name":"ルージュ",
		"singer":"ちあきなおみ",
		"time":"4:02",
		"img":"http://p2.music.126.net/m7EyTzmkyNw5mjF2pE_zOg==/674000627838719.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%81%A1%E3%81%82%E3%81%8D%E3%81%AA%E3%81%8A%E3%81%BF%20-%20%E3%83%AB%E3%83%BC%E3%82%B8%E3%83%A5.mp3",
		"lrc":"[id:$00000000][ar:ちあきなおみ][ti:ルージュ][by:牧野凌风][hash:593113bec030238070c26b4402d98e12][al:][sign:QQ1252544382][qq:][total:243000][offset:0][00:14.37]口をきくのがうまくなりました[00:20.57]どんな酔いしれた人にでも[00:26.85]口をきくのがうまくなりました[00:33.32]ルージュひくたびにわかります[00:39.08]あの人追いかけてこの街へ着いた顷は[00:45.34]まだルージュはただひとつ うす桜[00:51.79]あの人追いかけてくり返す人违い[00:58.06]いつか泣き惯れて[01:05.08]口をきくのがうまくなりました[01:11.29]ルージュひくたびにわかります[01:41.82]つくり笑いがうまくなりました[01:49.65]心驯染めない人にでも[01:55.78]つくり笑いがうまくなりました[02:02.23]ルージュひくたびにわかります[02:08.19]生まれた时から渡り鸟も渡る気で[02:14.40]翼をつくろうことも知るまいに[02:20.65]気がつきゃ镜も忘れかけた うす桜[02:27.07]おかしな色と笑う[02:33.99]つくり笑いがうまくなりました[02:39.95]ルージュひくたびにわかります[02:55.79]生まれた时から渡り鸟も渡る気で[03:02.04]翼をつくろうことも知るまいに[03:08.40]気がつきゃ镜も忘れかけた うす桜[03:14.71]おかしな色と笑う[03:21.56]つくり笑いがうまくなりました[03:28.01]ルージュひくたびにわかります\n"
	},
	{
		"name":"長い間",
		"singer":"夏川りみ",
		"time":"4:58",
		"img":"http://p1.music.126.net/72YNJ7p0VYuPPQtpbiZlVQ==/109951164515083162.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E9%95%B7%E3%81%84%E9%96%93.mp3",
		"lrc":"[ti:長い間 (长久)][ar:夏川りみ (夏川里美)][al:歌さがし~アジアの風~][by:][offset:0][kana:111111111111111111111なが1あいだ1ま1きゅう1し1ご(27088,213)と(27301,243)1はい1いっ1しょ1さ(40183,324)み(40507,377)1お(41707,300)も(42007,262)1あ1じゅ1わ1き1きみ1こえ1ひさ1あ1とき1きみ1え1がお1むね1き1むね1な(86281,233)か(86514,314)1あい1こと1い1こと1ば1しん2きょう1ま1わたし1え1がお1わす1そば1わら1そば1す1なお1あい1こと1い1き1む(204553,262)ね(204815,219)1な(205258,252)か(205510,337)1あい1こと1い1わら1そば1す1なお1あい1こと1い1き1むね1な(239289,209)か(239498,367)1あい1こと1い1わら1そば1す1なお1あい1こと1い][00:00.00]長い間 (长久) - 夏川りみ (夏川里美)[00:05.68]詞：玉城千春[00:11.36]曲：玉城千春[00:17.04]長い間 待たせてごめん[00:24.63]また急に仕事が入った[00:32.34]いつも一緒にいられなくて[00:40.18]淋しい思いをさせたね[00:49.05]逢えないとき 受話器からきこえる[00:56.75]君の声がかすれてる[01:04.03]久しぶりに逢った時の[01:11.81]君の笑顔が胸をさらっていく[01:19.78]気づいたのあなたがこんなに[01:25.57]胸の中にいること[01:29.81]愛してる まさかねそんな事言えない[01:56.11]あなたのその言葉だけを信じて[02:03.60]今日まで待っていた私[02:11.14]笑顔だけは 忘れないように[02:18.92]あなたの側にいたいから[02:27.04]笑ってるあなたの側では 素直になれるの[02:34.59]愛してる でもまさかねそんな事言えない[03:18.82]気づいたのあなたがこんなに[03:24.55]胸の中にいること[03:28.74]愛してる まさかねそんな事言えない[03:36.86]笑ってるあなたの側では 素直になれるの[03:44.79]愛してる でもまさかねそんな事言えない[03:52.95]気づいたのあなたがこんなに[03:58.59]胸の中にいること[04:02.92]愛してる まさかねそんな事言えない[04:10.82]笑ってるあなたの側では 素直になれるの[04:18.69]愛してる でもまさかねそんな事言えない\n"
	},
	{
		"name":"思い出通り雨 ",
		"singer":"ふきのとう",
		"time":"3:52",
		"img":"http://p1.music.126.net/ktYt6KvQ3a9fOXapn6zbdQ==/826832744087599.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%81%B5%E3%81%8D%E3%81%AE%E3%81%A8%E3%81%86%20-%20%E6%80%9D%E3%81%84%E5%87%BA%E9%80%9A%E3%82%8A%E9%9B%A8.mp3",
		"lrc":"[id:$00000000][ar:ふきのとう][ti:思い出通り雨 (回忆是阵雨)][by:][hash:d870932e6800bdba2cbb1ae81d3a43d7][al:][sign:][qq:][total:234527][offset:0][00:00.16]ふきのとう - 思い出通り雨[00:01.98]作词：山木康世[00:03.00]作曲：山木康世[00:27.01]君の目は寂しそうに[00:31.41]遠くを見てる[00:35.91]あの人を追いかけて[00:40.31]遠くを見てる[00:44.21]思い出通り雨[00:48.67]も一度 降れ降れ[00:53.07]気まぐれ通り雨[00:57.57]優しく 降ってやれ[01:02.63]君はただひとりぼっち[01:06.98]ベンチに座る[01:11.49]あの人と話をした[01:15.84]ベンチに座る[01:19.78]思い出通り雨[01:24.29]も一度 降れ降れ[01:28.62]気まぐれ通り雨[01:33.12]優しく 降ってやれ[01:58.14]君の手は悲しそうに[02:02.55]手紙を捨てる[02:07.05]あの人の匂いのする[02:11.46]手紙を捨てる[02:15.30]思い出通り雨[02:19.80]も一度 降れ降れ[02:24.24]気まぐれ通り雨[02:28.65]優しく 降ってやれ[02:40.51]君は今 雨の中を[02:44.76]歩き始める[02:49.26]あの人を忘れようと[02:53.71]歩き始める[02:57.56]思い出通り雨[03:02.02]も一度 降れ降れ[03:06.47]気まぐれ通り雨[03:10.88]優しく 降ってやれ[03:15.43]思い出通り雨[03:19.83]も一度 降れ降れ[03:24.19]気まぐれ通り雨[03:28.69]優しく 降ってやれ\n"
	},
	{
		"name":"千里を越え",
		"singer":"夏川りみ",
		"time":"4:49",
		"img":"http://p2.music.126.net/605xoOOtEUT5V8LskOZBgA==/109951164514917091.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E5%8D%83%E9%87%8C%E3%82%92%E8%B6%8A%E3%81%88.mp3",
		"lrc":"[00:00.000] 作词 : 上田　知華[00:01.000] 作曲 : 都志見　隆[00:20.630][00:33.240]迷路（めいろ）みたいな[00:37.480]にぎわう街を抜（ぬ）けて[00:42.370]飈は行く旅人（たびびと）の心を[00:48.070]せつなくなでてく[00:51.770]道を尋（たず）ねたその優しげな人に[01:00.830]幼（おさな）い日[01:02.800]別れた面影（おもかげ）が重なった[01:09.690]暖かい微笑（ほほえ）みは[01:14.140]私に似てるでしょうか?[01:18.890]果てしないあの海は[01:23.300]今でも青く 続（つづ）いてますか[01:27.660]愛よ走れ 千里を越え[01:33.220]あなたの住む故郷(くに)へ[01:36.900]潮（しお）の匂いのする丘（おか）へ[01:42.490]あなたの住むところへ[01:56.090]河はどんなに[02:00.460]離れても分かれても[02:05.150]いつの日か巡（めぐ）り会える時を[02:11.090]信じているでしょう[02:14.510]ほこりを巻いて[02:18.870]走り去る子供たち[02:23.760]遠い日がまるで波のように[02:29.610]押し寄せた[02:32.690]涙を見せないのは[02:37.080]あなたに似てるでしょうか?[02:41.760]果てしないあの空の[02:46.260]夕暮（ゆうく）れ色を覚えてますか?[02:50.840]愛よ走れ 千里を越え[02:56.210]あなたの住む故郷(くに)へ[02:59.970]その手を取り駆（か）けた丘へ[03:05.380]あなたの住むところへ[03:28.140]暖かい微笑みは[03:32.500]私に似てるでしょうか?[03:37.120]果てしないあの海は[03:41.610]今でも青く 続（つづ）いてますか[03:46.190]愛よ走れ 千里を越え[03:51.480]あなたの住む故郷(くに)へ[03:55.270]ここでこうして生きています[04:00.760]あなたを想いながら…[04:04.610]愛よ走れ 千里を越え[04:09.880]あなたの住む故郷(くに)へ[04:13.700]潮の匂いのする丘へ[04:19.160]あなたの住むところへ[04:33.460]おわり\n"
	},
	{
		"name":"愛よ愛よ",
		"singer":"夏川りみ",
		"time":"4:39",
		"img":"http://p2.music.126.net/iGqjyDKrr5r8gXrtCLAvRA==/807041534787688.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E6%84%9B%E3%82%88%E6%84%9B%E3%82%88.mp3",
		"lrc":"[id:$00000000][ar:夏川里美][ti:爱よ爱よ][by:vampireの瞳][hash:d7720a6bd5495ece0d4f837e2931cd8d][al:(null)][sign:][qq:][total:280000][offset:0][00:27.07]远く远く登る坂道[00:33.61]足を止めれば 追い越されてく[00:40.21]梦を见れば 花火のように[00:46.76]残る夜空の暗さがしみる[00:53.35]あなたがそっと微笑むだけで[00:59.91]温かくなる人がいるから[01:06.44]がんばらないで[01:09.77]たまには胸に[01:13.05]つかえた想い闻かせてほしい[01:19.70]爱(かな)よ爱(かな)よ いとしい人よ[01:26.31]この胸で眠りなさい[01:45.98]重い荷物 一人でしょって[01:52.47]息が切らせば 先を越される[01:59.02]急いでゆけば 短い命[02:05.65]のんびりゆけば 长い道のり[02:12.22]七色の虹 追いかけていた[02:18.82]远いあの日を 思いだして[02:25.36]祭りの夜を 待ちわびていた[02:31.93]あの时[02:33.62]めきを忘れないで[02:38.21]爱(かな)よ爱(かな)よ[02:41.84]泣きたい夜は[02:45.07]この胸で[02:47.61]泣けばいい[03:17.95]あなたが笑顔 忘れるだけで[03:24.51]心が痛む 人がいるから[03:31.05]がんばらないで[03:34.34]たまには人に すべて任せる[03:40.89]勇気を出して[03:44.01]爱(かな)よ爱(かな)よ[03:47.61]いとしい人よ[03:50.79]この胸で眠りなさい[03:57.23]爱(かな)よ爱(かな)よ[04:00.79]いとしい人よ この胸で眠りなさい\n"
	},
	{
		"name":"青春",
		"singer":"長渕剛",
		"time":"5:32",
		"img":"http://p2.music.126.net/moNQ3tgS-COX7cvPGwkrEQ==/881808325476627.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E9%95%B7%E6%B8%95%E5%89%9B%20-%20%E9%9D%92%E6%98%A5.mp3",
		"lrc":"[id:$0100D280][ar:長渕剛][ti:青春][by:][hash:610736a25ecb5fd76eb57ca25c35dd74][al:][sign:][qq:][total:332841][offset:0][00:00.60]長渕剛 - 青春[00:01.60]词：長渕剛[00:02.60]曲：長渕剛[00:41.73]泣くも　笑うも　どうせ[00:43.93]最後は 自分なんだ　　[00:49.13]わかっちゃいるけど　[00:52.38]誰かにすがりたい[00:56.08]標識を失いながら　[00:59.40]彷徨う悲しき青春　[01:02.95]言葉がつたないだけです　[01:06.40]どうかわかってくれよと[01:09.45]まちがいだらけの空に　[01:16.47]死にかけた青春が　[01:18.82]一匹　飛んで行く[01:23.92]Oh　それでも　[01:27.29]十字路に突っ立ち[01:30.79]生き抜く標識を　探し当て[01:37.04]負けた者たちの泣き言は　[01:40.79]ひとひらの枯れ葉さ[01:44.18]信じるのさ[01:45.98]永遠と未来と明日を[01:51.13]信じるのさ[01:52.88]永遠と未来と明日を　[02:12.12]行くも行かぬもどうせ[02:14.32]最後は 自分なんだ　　[02:19.47]我慢がならない　[02:22.27]その一瞬の為に　[02:26.47]標識を失いながら　[02:29.85]彷徨う悲しき青春　[02:33.45]優しさが欲しいだけです　[02:36.85]どうかわかってくれよと　[02:39.75]まちがいだらけの空に[02:46.93]死にかけた青春が　[02:49.18]一匹　飛んで行く　[02:54.33]Oh　それでも[02:57.78]十字路に突っ立ち[03:01.23]生き抜く標識を　[03:03.83]探し当て[03:07.50]負けた者たちの泣き言は　[03:11.20]ひとひらの枯れ葉さ[03:14.59]信じるのさ[03:16.39]永遠と未来と明日を[03:21.54]信じるのさ[03:23.34]永遠と未来と明日を　[03:56.54]まちがいだらけの空に[04:03.41]死にかけた青春が　[04:05.61]一匹　飛んで行く[04:10.86]Oh　それでも　[04:14.26]十字路に突っ立ち[04:17.81]生き抜く標識を　探し当て[04:24.00]負けた者たちの泣き言は　[04:27.65]ひとひらの枯れ葉さ[04:31.16]信じるのさ[04:32.86]永遠と未来と明日を[04:38.06]信じるのさ[04:39.86]永遠と未来と明日を　\n"
	},
	{
		"name":"GOOD-BYE青春",
		"singer":"長渕剛",
		"time":"3:27",
		"img":"http://p1.music.126.net/BUQXu9EqYWA0W3vqoT56cA==/2341959767182876.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E9%95%B7%E6%B8%95%E5%89%9B%20-%20GOOD-BYE%E9%9D%92%E6%98%A5.mp3",
		"lrc":"[id:$00000000][ar:長渕剛 (ながぶち つよし)][ti:GOOD-BYE青春][by:][hash:1186ad360e761225066c1093b17967f5][al:][sign:][qq:][total:0][offset:0][00:00.00]GOOD-BYE青春 - 長渕剛 (ながぶち つよし)[00:08.91]词：秋元康[00:17.83]曲：長渕剛[00:26.74]Good bye 青春[00:28.02]いい事なんかなかった季節に[00:30.87]夢だけ置き去りに[00:34.08]白い手紙を破りすてれば[00:36.76]ヒラヒラこぼれて[00:38.17]ジグソーパズルのようさ[00:44.34]Good bye 青春[00:45.50]答えを探して[00:46.82]あてのない風にふかれて[00:48.91]立ち止まる[00:51.96]夜明け間近に[00:53.20]ひざをかかえて[00:54.67]ざんげのウオッカじゃ[00:56.26]なんだか酔えないみたい[01:01.75]誰のせいでもなくて[01:04.12]背中がとても寒くて[01:06.56]俺のぬけがらだけが宙に舞う[01:10.17]Lie lie lie lie[01:11.95]ああこのまま悲しみよ[01:15.74]雨になれ[01:16.91]ああこのまま悲しみよ[01:20.64]雨になれ[01:47.81]Good bye 青春[01:48.91]いったいいくつもの涙を流せば[01:51.81]君の胸にささる?[01:55.26]窓の向こうに朝が届けば[01:57.63]東のあたりは[01:59.27]ため息みたいに白い[02:05.53]Good bye 青春[02:06.53]退屈なんて[02:07.89]おちこんだ時の言い訳[02:10.17]だったんだね[02:13.16]熱い想いはただの幻[02:15.90]こぼれた朝陽に[02:17.15]打ちくだかれたシルエット[02:22.91]誰のせいでもなくて[02:25.22]背中がとても寒くて[02:27.73]俺のぬけがらだけが宙に舞う[02:31.29]Lie lie lie lie[02:33.04]ああこのまま悲しみよ[02:36.76]雨になれ[02:38.13]ああこのまま悲しみよ[02:41.62]雨になれ[02:46.06]Lie lie lie lie[02:47.03]Lie lie lie lie[02:48.28]Lie lie lie lie[02:49.48]Lie lie lie lie[02:50.73]Lie lie lie lie[02:53.74]Lie lie lie lie[02:55.02]Lie lie lie lie[02:56.29]Lie lie lie lie[02:57.42]Lie lie lie lie[02:58.54]Lie lie lie lie[03:03.57]Lie lie lie lie[03:04.70]Lie lie lie lie[03:05.99]Lie lie lie lie[03:07.35]Lie lie lie lie[03:08.81]Lie lie lie lie[03:11.96]Lie lie lie lie[03:13.07]Lie lie lie lie[03:14.37]Lie lie lie lie[03:15.60]Lie lie lie lie\n"
	},
	{
		"name":"とんぼ",
		"singer":"長渕剛",
		"time":"6:10",
		"img":"http://p2.music.126.net/lwqgKpQknnPJSicKiSGYHw==/849922488271136.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%81%A8%E3%82%93%E3%81%BC-%E9%95%B7%E6%B8%95%E5%89%9B.mp3",
		"lrc":"[id:$00000000][ar:長渕剛][ti:とんぼ][by:wangfaqi][hash:6056bc4851620c5553bd7418aaf69f26][al:][sign:][qq:][total:370473][offset:0][00:34.51]コツコツとアスファルトに刻む[00:38.80]足音を踏みしめるたびに[00:43.32]俺は俺で在り続けたい[00:47.52]そう願った[00:52.02]裏腹な心たちが見えて[00:56.26]やりきれない夜を数え[01:00.61]のがれられない闇の中で[01:04.97]今日も眠ったふりをする[01:09.73]死にたいくらいに憧れた[01:13.92]花の都　大東京[01:18.35]薄っぺらのボストンバッグ[01:21.39]北へ北へ向かった[01:26.91]ざらついたにがい砂を噛むと[01:31.21]ねじふせられた正直さが[01:35.61]今ごろになってやけに骨身にしみる[01:44.53]ああしあわせのとんぼよ どこへ[01:53.23]お前はどこへ飛んで行く[02:02.22]ああしあわせのとんぼが ほら[02:10.51]舌を出して 笑ってらあ[02:32.51]明日からまた冬の風が　[02:36.68]横っつらを吹き抜けて行く[02:41.17]それでもおめおめと生きぬく[02:44.98]俺を恥らう[02:50.07]裸足のまんまじゃ寒くて[02:54.23]凍りつくような夜を数え[02:58.60]だけど俺はこの街を愛し[03:02.87]そしてこの街を憎んだ[03:07.65]死にたいくらいに憧れた[03:11.82]東京のバカヤローが[03:16.14]知らん顔して黙ったまま[03:19.71]突っ立ってる[03:24.79]ケツの座りの悪い都会で[03:29.00]憤りの酒をたらせば[03:33.62]半端な俺の骨身にしみる[03:42.76]ああしあわせのとんぼよ どこへ[03:50.99]お前はどこへ飛んで行く[04:00.17]ああしあわせのとんぼが ほら[04:08.41]舌を出して 笑ってらあ[04:17.75]ああしあわせのとんぼよ どこへ[04:25.83]お前はどこへ飛んで行く[04:34.97]ああしあわせのとんぼが ほら[04:43.45]舌を出して 笑ってらあ\n"
	},
	{
		"name":"初恋",
		"singer":"村下孝藏",
		"time":"3:41",
		"img":"http://p1.music.126.net/cZQRd_1c_c18mbkYjr7q8A==/109951165054406427.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E5%88%9D%E6%81%8B.mp3",
		"lrc":"[00:00.000] 作词 : 村下孝蔵[00:01.000] 作曲 : 村下孝蔵[00:08.90]五月雨は緑色[00:16.36]悲しくさせたよ一人の午後は[00:23.92]恋をして淋しくて[00:31.31]届かぬ想いを暖めていた[00:40.78]好きだよと言えずに　初恋は[00:48.17]ふりこ細工の心　　[00:54.99]放課後の校庭を　走る君がいた[01:02.73]遠くで僕はいつでも君を探してた[01:11.27]浅い夢だから　胸をはなれない[01:31.61]夕映えはあんず色[01:39.35]帰り道一人口笛吹いて　[01:46.39]名前さえ呼べなくて[01:53.92]とらわれた心見つめていたよ[02:03.40]好きだよと言えずに　初恋は[02:10.75]ふりこ細工の心[02:17.64]風に舞った花びらが　水面を乱すように　[02:25.56]愛という字書いてみては　[02:29.35]ふるえてたあの頃[02:34.09]浅い夢だから　胸をはなれない[02:42.25]放課後の校庭を　走る君がいた[02:50.02]遠くで僕はいつでも君を探がしてた[02:58.20]浅い夢だから　胸をはなれない[03:15.25]胸をはなれない　胸をはなれない[03:23.01]今もはなれない　今もはなれない\n"
	},
	{
		"name":"なごり雪(残雪)",
		"singer":"森 惠",
		"time":"3:25",
		"img":"http://p2.music.126.net/6wABNecUxOOTKOSQwGDnfw==/18638921115851713.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%81%AA%E3%81%94%E3%82%8A%E9%9B%AA.mp3",
		"lrc":"[00:14.40]汽車を待つ君の横で僕は，[00:17.87]時計を気にしてる，[00:21.07]季節はずれの雪が降ってる，[00:27.96]東京で見る雪はこれが最後ねと，[00:34.83]さみしそうに君はつぶやく，[00:41.26]なごり雪も降る時を知り，[00:48.26]ふざけすぎた季節のあとで，[00:55.26]今春が来て君はきれいになった，[01:03.10]去年よりずっときれいになった，[01:25.62]動き始めた汽車の窓に顔をつけて，[01:32.61]君は何か言おうとしている，[01:39.50]君の口びるがさようならと動くことが，[01:46.43]こわくて下をむいてた，[01:52.78]時がゆけば幼い君も，[01:59.55]大人になると気づかないまま，[02:06.55]今春が来て君はきれいになった，[02:14.53]去年よりずっときれいになった，[02:36.26]君が去ったホームにのこり，[02:43.15]落ちてはとける雪を見ていた，[02:50.16]今春が来て君はきれいになった，[02:58.05]去年よりずっときれいになった，[03:05.33]去年よりずっときれいになった，[03:12.50]去年よりずっときれいになった，\n"
	},
	{
		"name":"てまりうた",
		"singer":"ハンバート ハンバート",
		"time":"4:01",
		"img":"http://imge.kugou.com/stdmusic/150/20150719/20150719031901965991.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%83%88%20%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%83%88%20-%20%E3%81%A6%E3%81%BE%E3%82%8A%E3%81%86%E3%81%9F.mp3",
		"lrc":"[id:$00000000][ti:てまりうた][ar:ハンバート ハンバート (Humbert Humbert)][00:00.06]てまりうた - ハンバート ハンバート (Humbert Humbert)[00:03.34]词：佐藤良成[00:04.62]曲：佐藤良成[00:12.56]はははよゆかんと[00:15.86]ひひ日が暮れる[00:19.22]ここは稲荷さまの[00:22.78]とととおり道[00:26.38]いい石灯箭に[00:29.89]ひひ灯がともる[00:33.23]てててまりがてんと[00:36.88]ここころがった[00:40.43]参れ参れ鳥居をくぐれ[00:47.18]ほれほれほれもっと中へ[00:54.34]飛んだ跳んだ泥飛び跳ねた[01:01.04]飲んだ呑んだ闇のみ込んだ[01:08.18]がらんがらんがらん[01:11.66]人気のない路に[01:14.88]からんからんからん[01:18.58]下駄の音が響く[02:00.59]はははよゆかんと[02:04.00]ひひ日が暮れる[02:07.02]ここはもぐらさまの[02:10.67]とととおり道[02:14.41]やや山のかげに[02:17.63]ひひ陽が落ちる[02:21.03]ああ足のしたで[02:24.66]こここえがする[02:28.52]入れ入れ入れ穴蔵へ[02:34.88]ほれほれ掘れもっと深く[02:42.21]飛んだ跳んだ泥鳶跳ねた[02:48.86]飲んだ呑んだ闇蚤込んだ[02:56.07]がらんがらんがらん[02:59.42]夜露が裾濡らし[03:02.88]からんからんからん[03:06.47]いやに足が重い[03:09.83]がらんがらんがらん[03:13.43]人気のない路に[03:16.66]からんからんからん[03:20.39]下駄の音が響く\n"
	},
	{
		"name":"荒神さま",
		"singer":"ハンバート ハンバート ",
		"time":"2:58",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909124732677517.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%83%88%20%E3%83%8F%E3%83%B3%E3%83%90%E3%83%BC%E3%83%88%20-%20%E8%8D%92%E7%A5%9E%E3%81%95%E3%81%BE.mp3",
		"lrc":"[id:$00000000][ar:ハンバート ハンバート][ti:荒神さま][by:阳子][hash:cc608b0d2157f16b894e3c6ae17cd5c9][al:(null)][sign:][qq:][total:177000][offset:0][00:00.09]荒神さま - ハンバート ハンバート[00:14.10]押し入れの隙間から[00:19.32]ひそひそと声がする[00:24.74]天井の節穴から[00:30.14]声だけが聞こえてくる[00:35.73]眠れずに起き出して[00:41.14]耳を澄ますと[00:46.41]おめえ[00:47.03]さんざんたらふく食って[00:49.36]お礼も言えねえのか[00:52.09]おめえ[00:52.68]さんざん贅沢して[00:54.64]働きもしねえで[00:57.05]おめえ[00:57.68]食うもの食って[00:59.17]ごろごろして[01:00.52]殿様気取りか[01:03.36]黙っておれば[01:05.64]このごくつぶし[01:20.57]生垣の向こうから[01:25.63]ひそひそと声がする[01:31.33]縁側の下からも[01:36.76]声だけが聞こえてくる[01:42.51]眠れずに起き出して[01:47.74]耳を澄ますと[01:53.17]おめえ[01:53.87]さんざんたらふく食って[01:56.05]お礼も言えねえのか[01:58.51]おめえ[01:59.33]さんざん贅沢して[02:01.29]働きもしねえで[02:03.67]おめえ[02:04.31]食うもの食って[02:05.77]ごろごろして[02:07.09]殿様気取りか[02:09.79]黙っておれば[02:12.31]このごくつぶし[02:14.69]おめえ[02:15.36]さんざんたらふく食って[02:17.57]お礼も言えねえのか[02:20.30]おめえ[02:20.97]さんざん贅沢して[02:23.15]働きもしねえで[02:25.61]おめえ[02:26.34]食うもの食って[02:27.87]ごろごろして[02:29.14]殿様気取りか[02:31.92]黙っておれば[02:34.33]このごくつぶし\n"
	},
	{
		"name":"Believe",
		"singer":"岡村孝子",
		"time":"4:59",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909134301667505.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E5%B2%A1%E6%9D%91%E5%AD%9D%E5%AD%90%20-%20Believe.mp3",
		"lrc":"[id:$00000000][ti:Believe][ar:冈村孝子][00:01.00]Believe - 冈村孝子[00:03.18]词：冈村孝子[00:04.80]曲：冈村孝子[00:25.75]最后の言叶を[00:31.31]人の波に消されて[00:36.80]これですべてが终わったね[00:41.85]何もかも[00:47.22]あふれる泪を[00:52.57]ぬぐうこともできずに[00:58.38]远く去りゆく[01:01.16]面影に别れを告げた[01:08.87]あなたのすべてを谁よりも[01:14.40]知っていると思ってた[01:19.83]优しくなれずに最后まで[01:25.44]伤つけ合った[01:30.20]さよなら 二人が[01:35.94]见つけた言叶だけが[01:41.31]远く旅立つ[01:44.24]生き方の行方を见てる[02:10.89]こぼれる阳ざしが[02:16.33]少し强くなっても[02:21.67]まるで 明日が见え[02:25.60]なくて 泣きたくなる[02:32.36]着なれた上着を[02:37.85]いつかぬぎすてるよう[02:43.36]きっと谁もが进むのね[02:48.43]悲しいけれど[02:54.08]もいちどあの日にもどれたら[02:59.89]爱を素直に信じた[03:04.68]あなた ふたりでどこまでも[03:10.63]步いてゆくと[03:15.54]今では こんなに[03:21.16]远く生きてるけれど[03:26.68]あの日のぬくもりを消せずに[03:31.87]崩れそうよ[03:37.18]もういちど明日を信じたい[03:42.94]どんなことに出会っても[03:47.96]息づく时间をいつだって[03:53.83]感じていたい[03:58.57]さよなら私が[04:04.37]决めた答えだから[04:09.55]想い出 抱きしめて[04:12.99]心の瞳をとじた\n"
	},
	{
		"name":"常夜灯",
		"singer":"玉置浩二",
		"time":"4:02",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909112216155844.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E7%8E%89%E7%BD%AE%E6%B5%A9%E4%BA%8C%20-%20%E5%B8%B8%E5%A4%9C%E7%81%AF.mp3",
		"lrc":"[id:$00000000][ti:常夜灯][ar:玉置浩二][00:00.50]玉置浩二 - 常夜灯[00:08.68]作詞：玉置浩二·須藤晃[00:12.69]作曲：玉置浩二[00:16.31]街角に立って 口笛吹いてくれよ[00:24.00]夜のパズルに迷い込まないように[00:31.88]答えはいつだって 未来を照らしている[00:39.69]星に手が届く はずもないのに[00:47.58]やりたいようにやっていいんだよ[00:55.41]悲しいくらいでちょうどいいんだよ[01:19.03]どこまでも続いてるまっすぐなこの道[01:26.76]たどりついた先には光が待っているようだ[01:34.75]腹ペコになって吠えてる心よ[01:39.27]走り出してくれよ![01:42.70]今よりもう少しいい夢みせて[01:50.58]やりたいようにやっていいんだよ[01:58.27]淋しいぐらいがちょうどいいんだよ[02:06.21]やりたいようにやっていいんだよ[02:14.08]本気になって愛していいんだよ[02:23.14]常夜灯に群がる虫ケラたちのように[02:29.83]何千何百回もくり返して言うだろ?[02:39.77]やりたいようにやっていいんだよ[02:47.27]悲しいくらいでちょうどいいんだよ[02:55.38]やりたいようにやっていいんだよ[03:03.15]淋しいぐらいがちょうどいいんだよ\n"
	},
	{
		"name":"アオイトリ",
		"singer":"諫山実生",
		"time":"5:19",
		"img":"http://p2.music.126.net/Y2crOKJ6yBquHyCSzOdOOw==/823534209204515.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E8%AB%AB%E5%B1%B1%E5%AE%9F%E7%94%9F%20-%20%E3%82%A2%E3%82%AA%E3%82%A4%E3%83%88%E3%83%AA.mp3",
		"lrc":"[00:53.67]小さな足跡 風に吹かれて消えた[01:02.67]夢を見失い立ち止まる旅の途中で[01:11.70]鳥かごを披けて 自由を手に入れたのに[01:20.67]どうして私は 今もまだ迷っているの[01:29.62]雨音に消えゆくその声を追いかけた[01:37.97]もしも叶うなら すぐに逢いたい[01:51.50]行かないで これ以上遠くへ行かないで[02:00.47]響き渡る歌が 貴方聴こえるてしょう[02:22.86]知らず知らずに ここまで歩いてきた[02:31.92]悪戯な時は 私の心惑わせる[02:40.89]待ちぼうけ 迷子になった子供のように[02:49.15]どんなに探しても 見つけられない[03:02.48]届かない空に アオイトリ飛び去ってゆく[03:11.54]錆び什いたこの胸通り過ぎるように[03:21.22]寂しさの海に 沈みゆく白い花は[03:29.52]いつの日も貴方に 想い寄せるのでしょう[03:57.76]いつまでも歩いて行く道は遠いけど[04:06.34]独りで飛べるように強くなりたい[04:19.75]行かないで これ以上遠くへ行かないで[04:28.87]離れたくないのは「ワタシ」だったみたい[04:38.16]ゆっくりと翼を 目を瞑り広げてゆく[04:46.77]忘れてた飛び方 やっと思い出すの\n"
	},
	{
		"name":"星",
		"singer":"谷村新司",
		"time":"4:33",
		"img":"http://p1.music.126.net/FZX7XAjsmEPGyVOqm4H7aQ==/109951166361039007.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%97%A5%E8%AF%AD/%E8%B0%B7%E6%9D%91%E6%96%B0%E5%8F%B8%20-%20%E6%98%9F.mp3",
		"lrc":"[00:00.000] 作词 : 谷村新司[00:01.000] 作曲 : 谷村新司[00:24.11]目を閉じて 何も見えず[00:29.47]哀しくて 目を開ければ[00:34.96]荒野に 向かう道より[00:40.36]他に 見えるものはなし[00:45.70]ああ 砕け散る 運命の星たちよ[00:56.49]せめて密やかに この身を照らせよ[01:08.34]我は行く 蒼白き頬のままで[01:18.88]我は行く さらば昴よ[01:51.21]呼吸をすれば 胸の中[01:56.41]こがらしは 吠き続ける[02:01.82]されど 我が胸は熱く[02:07.22]夢を 追い続けるなり[02:12.58]ああ さんざめく 名も無き星たちよ[02:23.74]せめて鮮やかに その身を終われよ[02:35.47]我も行く 心の命ずるままに[02:45.85]我も行く さらば昴よ[03:18.29]ああ いつの日か 誰かがこの道を[03:28.86]ああ いつの日か 誰かがこの道を[03:40.84]我は行く 蒼白き頬のままで[03:51.30]我は行く さらば昴よ[04:02.27]我は行く さらば昴よ\n"
	}
],
/*分类4《来疯狂吧》*/
[
	{
		"basic":true,
		"name":"来疯狂吧",
		"singer":"none",
		"img":"http://p1.music.126.net/LMR2pAU9U62pYfAPdY5-FQ==/109951165827930264.jpg"
	},
	{
		"name":"Eifersucht",
		"singer":"Rammstein",
		"time":"3:35",
		"img":"http://imge.kugou.com/stdmusic/150/20210828/20210828113901613280.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Eifersucht-Rammstein.mp3",
		"lrc":"[id:$00FBED11][ar:rammstein][ti:eifersucht][by:][hash:e98f74ebecf7ee2bc8ae9187d5f2d43a][al:][sign:][qq:][total:217417][offset:0][00:37.87]Bin ich schoner[00:39.17]Zerschneid mir das gesicht[00:41.80]Bin ich starker[00:42.72]Brich feige mein genick[00:45.48]Bin ich kluger[00:46.82]Tote mich und iss mein hirn[00:48.81]Hab ich dein weib[00:50.32]Tote mich und iss mich ganz auf[00:58.97]Dann iss mich ganz auf[01:07.37]Bin ich ehrlicher[01:09.09]Beiss mir die zunge ab[01:11.28]Bin ich reicher[01:12.92]Dann nimm mir alles[01:14.87]Bin ich mutiger[01:16.21]Tote mich und iss mein herz[01:18.29]Hab ich dein weib[01:19.90]Tote mich und iss mich ganz auf[01:28.34]Dann iss mich ganz auf[01:32.16]Doch leck den teller ab[01:35.95]Es kocht die eifersucht[01:40.31]Eifersucht[01:44.02]Eifersucht[01:47.12]Eifersucht[01:51.35]Eifersucht[01:55.14]Eifersucht[01:58.76]Eifersucht[02:02.23]Eifersucht[02:20.83]Hab ich so glatte haut[02:22.87]Zieh sie in streifen ab[02:24.70]Hab ich die klaren augen[02:26.49]Nimm mir das licht[02:28.42]Hab ich die reine seele[02:29.92]Tote sie in flammen[02:32.16]Habe ich dein weib dann[02:33.63]Tote mich und iss mich ganz auf[02:42.11]Dann iss mich ganz auf[02:45.92]Doch leck den teller ab[02:49.65]Es kocht die eifersucht[02:54.11]Eifersucht[02:57.79]Eifersucht[03:01.43]Eifersucht[03:05.13]Eifersucht[03:08.89]Eifersucht[03:12.82]Eifersucht[03:16.04]Eifersucht[03:19.96]Eifersucht[03:23.71]Eifersucht[03:27.30]Eifersucht[03:31.00]Eifersucht\n"
	},
	{
		"name":"Zick zack",
		"singer":"Rammstein",
		"time":"4:04",
		"img":"http://p1.music.126.net/QU919aFjaEbg1QHcKuOuFQ==/109951167259653481.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Zick%20Zack.mp3",
		"lrc":"[00:00.00] 作词 : Till Lindemann/Richard Z. Kruspe/Paul Landers/Oliver Riedel/Christoph Doom Schneider/Doktor Christian Lorenz[00:01.00] 作曲 : Till Lindemann/Richard Z. Kruspe/Paul Landers/Oliver Riedel/Christoph Doom Schneider/Doktor Christian Lorenz[00:14.49]Schöner, größer, härter[00:21.42]Straffer, glatter, stärker[00:31.38]Deine Brüste sind zu klein[00:35.10]Zwei Pfund Silikon sind fein[00:38.96]Säcke schneiden von den Augen[00:42.57]Nase fräsen, Fett wegsaugen[00:46.32]Wir entfernen rasch zwei Rippen[00:49.89]Schlauchboot basteln aus den Lippen[00:53.48]In die Wangen, in die Stirn[00:57.18]Botox rein bis ins Gehirn[01:00.88]Zick Zack, Zick Zack, schneid es ab[01:07.42]Zick Zack, Zick Zack, kurz und knapp[01:14.83]Alles Schlaffe überm Kinn[01:19.31]Kann man in den Nacken ziehen[01:23.06]Implantate ins Gefräß[01:26.84]Und wir liften das Gesäß[01:30.49]Messer, Tupfer, Vollnarkose[01:34.14]Sieben Kilo Reiterhose und[01:37.86]Bauchfett in die Biotonne[01:41.43]Der Penis sieht jetzt wieder Sonne[01:45.41]Zick Zack, Zick Zack, schneid das ab[01:52.34]Tick Tack, Tick Tack, du wirst alt[01:56.48]Deine Zeit läuft langsam ab[01:60.00]Wer schön sein will, der muss auch leiden[02:03.75]Aus- und weg- und abschneiden[02:07.78]Nadel, Faden, Schere, Licht[02:11.04]Doch ohne Schmerzen geht es nicht[02:16.63][02:37.90]Wangen straffen, Jochbein schnitzen[02:42.65]Sondermüll in Lippen spritzen[02:46.21]Falten rascheln am Skalpell[02:49.84]Vorhaut weg, sehr aktuell[02:53.40]Ist die Frau im Mann nicht froh[02:57.02]Alles ganz weg, sowieso[03:00.77]Zick Zack, Zick Zack, schneid das ab[03:08.24]Tick Tack, Tick Tack, du bist alt[03:11.94]Deine Zeit läuft langsam ab[03:15.62]Wer schön sein will, der muss auch leiden[03:19.45]Eitelkeit ist nie bescheiden[03:23.03]Nadel, Faden, Schere, Licht[03:26.72]Doch ohne Schmerzen geht es nicht[03:31.12]Schöner, größer, härter[03:36.66]Straffer, glatter, stärker[03:43.40]\n"
	},
	{
		"name":"Los",
		"singer":"Rammstein",
		"time":"4:23",
		"img":"http://p1.music.126.net/ga8qoyR4a4NGnwpr0vfklQ==/2551966488083588.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Rammstein%20-%20Los.mp3",
		"lrc":"[00:07.13]Wir waren namenlos[00:09.17]Und ohne Lieder[00:11.15]Recht wortlos[00:13.13]Waren wir nie wieder[00:14.88]Etwas sanglos[00:16.75]Sind wir immer noch[00:18.66]Dafuer nicht klanglos[00:20.64]Man hoert uns doch[00:22.49]Nach einem Windstoss[00:24.36]Ging ein Sturm los[00:26.23]Einfach beispiellos[00:28.39]Es wurde Zeit[00:30.93]Los  【双关：zeitlos】[00:45.31]Sie waren sprachlos[00:47.63]So sehr schockiert[00:49.73]Und sehr ratlos[00:51.58]Was war passiert[00:53.50]Etwas fassungslos[00:55.30]Und garantiert[00:57.65]Verstaendnislos[00:59.38]Das wird zensiert[01:01.12]Sie sagten grundlos[01:03.04]Schade um die Noten[01:05.01]So schamlos[01:06.99]Das gehoert verboten[01:08.84]Es ist geistlos[01:10.70]Was sie da probieren[01:12.67]So geschmacklos[01:14.54]Wie sie musizieren[01:16.70]Ist es hoffnungslos[01:20.42]Sinnlos[01:24.76]Hilflos[01:28.09]Sie sind gott[01:32.95]Los  【双关：gottlos】[01:47.81]Wir waren namenlos[01:49.65]Wir haben einen Namen[01:51.70]Waren wortlos[01:53.74]Die Worte kamen[01:55.54]Etwas sanglos[01:57.47]Sind wir immer noch[01:59.33]Dafuer nicht klanglos[02:01.37]Das hoert man doch[02:03.22]Wir sind nicht fehlerlos[02:05.07]Nur etwas haltlos[02:06.94]Ihr werdet lautlos[02:08.98]Uns nie los[02:49.74]Wir waren namenlos[02:51.87]Und ohne Lieder[02:53.74]Recht wortlos[02:55.67]Waren wir nie wieder[02:57.59]Etwas sanglos[02:59.38]Sind wir immer noch[03:01.35]Dafuer nicht klanglos[03:03.04]Man hoert uns doch[03:05.09]Nach einem Windstoss[03:07.03]Ging ein Sturm los[03:08.82]Einfach beispiellos[03:10.86]Wurde zeitlos[03:44.05]Wir waren los[03:59.53]Wir waren los\n"
	},
	{
		"name":"Asche zu Asche",
		"singer":"Rammstein",
		"time":"3:51",
		"img":"http://p1.music.126.net/LMR2pAU9U62pYfAPdY5-FQ==/109951165827930264.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Asche%20zu%20Asche.mp3",
		"lrc":"[00:00.000] 作词 : Till Lindemann/PAUL LANDERS/Doktor Christian Lorenz/Christoph Doom Schneider/Oliver Riedel/Richard Z. Kruspe[00:01.000] 作曲 : Till Lindemann/PAUL LANDERS/Doktor Christian Lorenz/Christoph Doom Schneider/Oliver Riedel/Richard Z. Kruspe[00:34.40]Warmer Körper[00:35.78](Warmer Körper)[00:37.24]Heißes Kreuz[00:38.61](Heißes Kreuz)[00:40.03]Falsches Urteil[00:41.41](Falsches Urteil)[00:42.84]Kaltes Grab[00:44.26](Kaltes Grab)[00:45.70]Auf dem Kreuze lieg ich jetzt[00:48.12]Sie schlagen mir die Nägel ein[00:51.42]Das Feuer wäscht die Seele rein[00:53.74]Und übrig bleibt ein Mundvoll[00:56.93]Asche[01:02.18][01:08.26]Ich komm wieder[01:09.67](Ich komm wieder)[01:11.10]In zehn Tagen[01:12.55](Ich komm wieder)[01:13.90]Als dein Schatten[01:15.34](Ich komm wieder)[01:16.64]Und werd dich jagen[01:18.10](Ich komm wieder)[01:19.54]Heimlich werd ich auferstehen[01:22.36]Und du wirst um Gnade flehen[01:24.89]Dann knie ich mich in dein Gesicht[01:27.66]Und steck den Finger in die[01:30.77]Asche[01:34.01]Asche[01:36.49]Asche[01:39.30]Asche[01:42.12]Asche zu Asche[01:44.99]Asche zu Asche[01:47.79]Asche zu Asche[01:50.28]Und Staub zu Staub[01:53.76][02:27.42]Heimlich werd ich auferstehen[02:30.08]Und du wirst um Gnade flehen[02:32.54]Dann knie ich mich in dein Gesicht[02:35.34]Und steck den Finger in die[02:38.43]Asche zu Asche[02:41.29]Asche zu Asche[02:44.19]Asche zu Asche[02:46.68]Und Staub zu Staub[02:49.92]Asche zu Asche[02:52.76]Asche zu Asche[02:55.50]Asche zu Asche[02:58.06]Und Staub zu Staub[03:01.24]Asche zu Asche[03:04.04]Asche zu Asche[03:06.83]Asche zu Asche[03:09.26]Und Staub zu Staub[03:12.49]Asche zu Asche[03:15.25]Asche zu Asche[03:18.04]Asche zu Asche[03:20.57]Und Staub zu Staub[03:23.84]Zu Staub(Ich komm wieder)[03:26.29]Zu Staub[03:34.86]Zu Staub(Ich komm wieder)[03:38.95]Zu Staub[03:45.65]Ja[03:46.50]\n"
	},
	{
		"name":"Feur Frei!",
		"singer":"Rammstein",
		"time":"3:35",
		"img":"http://p1.music.126.net/DlbKGu3yuG5EHPn4cCyCFQ==/1364493947951718.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Feuer%20Frei%21.mp3",
		"lrc":"[00:00.000] 暂无歌词\n"
	},
	{
		"name":"Herzeleid",
		"singer":"Rammstein",
		"time":"3:44",
		"img":"http://p1.music.126.net/LMR2pAU9U62pYfAPdY5-FQ==/109951165827930264.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Herzeleid.mp3",
		"lrc":"[00:00.000] 作词 : Till Lindemann/PAUL LANDERS/Doktor Christian Lorenz/Christoph Doom Schneider/Oliver Riedel/Richard Z. Kruspe[00:00.000] 作曲 : Till Lindemann/PAUL LANDERS/Doktor Christian Lorenz/Christoph Doom Schneider/Oliver Riedel/Richard Z. Kruspe[00:00.000]Bewahret einander vor Herzleid[00:16.191]denn kurz ist die Zeit, die ihr beisammen seid[00:46.188][00:47.445]Denn wenn euch auch viele Jahre vereinen[01:05.948]einst werden sie wie Minuten euch scheinen[01:23.696][01:25.185]Herzeleid[02:30.180][02:31.938]Bewahret einander vor der Zweisamkeit[03:16.638][03:17.396]Herzeleid\n"
	},
	{
		"name":"Ich will",
		"singer":"Rammstein",
		"time":"3:40",
		"img":"http://p1.music.126.net/-3q0aRH_yOfBGVs1mB3BWA==/1769114209101298.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Ich%20will.mp3",
		"lrc":"[00:01.01]ich will[00:05.51]ich will[00:06.44][00:08.12]ich will[00:09.97][00:11.40]ich will[00:12.94][00:15.48]ich will[00:16.20][00:19.25]ich will[00:20.00][00:23.02]ich will[00:23.74][00:26.72]（ich will）[00:27.43][00:28.17]ich will dass ihr mir vertraut[00:30.27][00:30.80]（ich will）[00:32.08]ich will dass ihr mir glaubt[00:34.42]（ich will）[00:35.68]ich will eure blicke spuren[00:37.98]（ich will）[00:39.29]jeden herzschlag kontrollieren[00:40.11][00:42.03]（ich will）[00:43.22]ich will eure stimmen horen[00:44.85][00:45.48]（ich will）[00:46.95]ich will die ruhe storen[00:49.50]（ich will）[00:50.73]ich will dass ihr mich gut seht[00:53.01]（ich will）[00:54.39]ich will dass ihr mich versteht[00:56.02][01:11.81]（ich will）[01:12.53][01:13.25]ich will eure phantasie[01:14.17][01:15.56]（ich will）[01:16.88]ich will eure energie[01:18.15][01:19.24]（ich will）[01:20.08][01:20.65]ich will eure hande sehen[01:22.28][01:23.06]（ich will）[01:24.29]in beifall untergehen[01:25.07][01:28.09]seht ihr mich?[01:30.06][01:31.92]versteht ihr mich?[01:33.58][01:35.55]fuhlt ihr mich?[01:38.34][01:39.34]hort ihr mich?[01:41.40]konnt ihr mich horen?[01:42.90][01:44.62]wir horen dich![01:45.83]konnt ihr mich sehen?[01:47.84]wir sehen dich![01:48.93]konnt ihr mich fuhlen?[01:49.60]wir fuhlen dich![01:51.77]ich versteh' euch nicht[01:56.04][01:56.64]konnt ihr mich hören?[01:57.88][01:58.56]wir hören dich![01:59.84]konnt ihr mich sehen?[02:02.09]wir sehen dich![02:03.12][02:04.17]konnt ihr mich fuhlen?[02:05.85]wir fuhlen dich![02:06.67][02:07.53]ich versteh' euch nicht![02:10.44][02:11.82]ich will[02:12.53][02:14.17][02:15.71]ich will[02:16.02]ich will[02:19.84][02:22.99]ich will[02:24.55][02:25.19][02:28.01]wir woll' dass ihr uns vertraut[02:28.09][02:34.09][02:34.40]wir woll' dass ihr uns alles glaubt[02:37.47][02:40.01][02:41.94]wir woll' eure hande sehen[02:47.13][02:49.42]wir woll' in beifall untergehen[02:52.30][02:55.25]ja--[02:56.37][02:58.92]konnt ihr mich horen?[03:00.65]wir hören  dich[03:01.46][03:02.17]konnt ihr mich sehen?[03:02.99][03:03.91]wir sehen dich[03:04.87][03:05.57][03:05.67]konnt ihr mich fuhlen?[03:07.62]wir fuhlen dich[03:08.63][03:09.79]ich versteh' euch nicht[03:13.60]konnt ihr uns hören?[03:15.66]wir hören euch[03:16.51][03:17.14]konnt ihr uns sehen?[03:18.70]wir sehen euch[03:19.76][03:20.89]konnt ihr uns fuhlen?[03:22.69]wir fuhlen euch[03:23.62][03:24.79]wir verstehen euch nicht![03:27.35][03:28.53]ich will[03:29.67][03:32.23]ich will\n"
	},
	{
		"name":"RADIO",
		"singer":"Rammstein",
		"time":"4:37",
		"img":"http://p2.music.126.net/Xx9-WC9acSWkFK1WpxgKww==/109951164025785987.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/RADIO.mp3",
		"lrc":"[00:36.25]Wir durften nicht dazugehören[00:40.33]Nichts sehen, reden oder hören[00:44.07]Doch jede Nacht für ein, zwei Stunden[00:47.59]Bin ich dieser Welt entschwunden[00:51.32]Jede Nacht ein bisschen froh[00:54.51]Mein Ohr ganz nah am Weltempfänger[00:58.61]Radio, mein Radio[01:05.50]Ich lass' mich in den Äther saugen[01:11.01]Meine Ohren werden Augen[01:14.54]Radio, mein Radio[01:20.22]So höre ich, was ich nicht seh'[01:25.38]Stille heimlich fernes Weh[01:36.85]Wir durften nicht dazugehören[01:40.40]Nichts sehen, reden oder stören[01:43.89]Jedes Liedgut war verboten[01:47.14]So gefährlich fremde Noten[01:50.96]Doch jede Nacht ein wenig froh[01:54.77]Mein Ohr ganz nah am Weltempfänger[01:58.64]Radio, mein Radio[02:05.62]Ich lass' mich in den Äther saugen[02:11.01]Meine Ohren werden Augen[02:14.58]Radio, mein Radio (mein Radio)[02:21.32]So höre ich, was ich nicht seh'[02:25.68]Stille heimlich fernes Weh[02:58.75]Jede Nacht ich heimlich stieg[03:01.80]Auf den Rücken der Musik[03:05.27]Leg' die Ohren an die Schwingen[03:09.15]Leise in die Hände singen[03:12.77]Jede Nacht und wieder flieg'[03:15.99]Ich einfach fort mit der Musik[03:19.58]Schwebe so durch helle Räume[03:23.27]Keine Grenzen, keine Zäune[03:45.09]Radio, Radio[03:51.56]Radio, Radio[03:59.01]Radio, mein Radio (mein Radio)[04:06.64]Ich lass' mich in den Äther saugen[04:11.04]Meine Ohren werden Augen[04:14.52]Radio, mein Radio (mein Radio)[04:20.32]So höre ich, was ich nicht seh'[04:25.26]Stille heimlich fernes Weh\n"
	},
	{
		"name":"Amerika",
		"singer":"Rammstein",
		"time":"3:42",
		"img":"http://p1.music.126.net/7pWJRyb91zPHV5aXLqIa1g==/840026883665221.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Rammstein%20-%20Amerika.mp3",
		"lrc":"[00:00.510]We're all living in Amerika[00:04.160]Amerika ist wunderbar[00:08.200]We're all living in Amerika[00:11.730]Amerika[00:13.650]Amerika[00:15.760]We're all living in Amerika[00:19.440]Amerika ist wunderbar[00:23.430]We're all living in Amerika[00:27.070]Amerika[00:28.930]Amerika[00:31.260]Wenn getanzt wird will ich führen[00:34.720]Auch wenn ihr euch alleine dreht[00:38.530]Lasst euch ein wenig kontrollieren[00:42.360]Ich zeige euch wie's richtig geht[00:46.190]Wir bilden einen lieben Reigen[00:49.960]Die Freiheit spielt auf allen Geigen[00:53.830]Musik kommt aus dem Wei?en Haus[00:57.700]Und vor Paris steht Mickey Mouse[01:05.590]We're all living in Amerika[01:09.110]Amerika ist wunderbar[01:13.100]We're all living in Amerika[01:16.820]Amerika[01:18.680]Amerika[01:20.750]Ich kenne Schritte die sehr nützen[01:24.420]Und werde euch vor Fehltritt schützen[01:28.260]Und wer nicht tanzen will am Schluss[01:32.020]Weiss noch nicht dass er tanzen muss[01:35.860]Wir bilden einen lieben Reigen[01:39.680]Ich werde euch die Richtung zeigen[01:43.500]Nach Afrika kommt Santa Claus[01:47.300]Und vor Paris steht Mickey Mouse[01:55.170]We're all living in Amerika[01:58.900]Amerika ist wunderbar[02:02.790]We're all living in Amerika[02:06.500]Amerika[02:08.370]Amerika[02:10.450]We're all living in Amerika[02:14.220]Coca Cola[02:16.140]Wonderbra[02:18.080]We're all living in Amerika[02:21.760]Amerika[02:23.700]Amerika[02:25.940]This is not a love song[02:29.640]This is not a love song[02:33.420]I don't sing my mother tongue[02:36.750]No, this is not a love song[03:00.350]We're all living in Amerika[03:03.840]Amerika ist wunderbar[03:07.870]We're all living in Amerika[03:11.480]Amerika[03:13.310]Amerika[03:15.480]We're all living in Amerika[03:19.270]Coca Cola[03:21.270]Sometimes war[03:23.100]We're all living in Amerika[03:26.720]Amerika[03:28.640]Amerika[03:32.120][03:33.210][03:37.150][03:45.110]\n"
	},
	{
		"name":"Du Hast",
		"singer":"Rammstein",
		"time":"3:54",
		"img":"http://p2.music.126.net/_cc3VK5I-5E6R1e__mNZpg==/801543976693958.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Rammstein%20-%20Du%20Hast.mp3",
		"lrc":"[00:00.000] 作词 : Rammstein[00:31.300]Du[00:32.300]Du hast[00:34.300]Du hast mich[00:38.300]Du[00:40.300]Du hast[00:42.300]Du hast mich[00:46.300]Du[00:48.300]Du hast[00:50.300]Du hast mich[00:54.300]Du[00:55.300]Du hast[00:57.300]Du hast mich[01:17.299]Du[01:18.299]Du hast[01:20.299]Du hast mich[01:22.299]Du hast mich[01:24.299]Du hast mich gefragt[01:26.299]Du hast mich gefragt[01:28.299]Du hast mich gefragt und ich hab nichts gesagt[01:32.300]Willst du bis der Tod euch scheidet[01:36.300]Treu ihr sein für alle Tage...[01:42.300]Nein[01:45.300]Nein[01:48.300]Willst du bis der Tod euch scheidet[01:51.300]Treu ihr sein für alle Tage...[01:57.300]Nein[02:01.299]Nein[02:18.300]Du[02:20.300]Du hast[02:22.300]Du hast mich[02:26.300]Du[02:27.300]Du hast[02:29.300]Du hast mich[02:34.300]Du[02:35.300]Du hast[02:37.300]Du hast mich[02:40.300]Du hast mich[02:41.300]Du hast mich gefragt[02:43.300]Du hast mich gefragt[02:45.300]Du hast mich gefragt und ich hab nichts gesagt[03:04.300]Willst du bis der Tod euch scheidet[03:08.300]Treu ihr sein für alle Tage...[03:14.300]Nein[03:18.300]Nein[03:20.300]Willst du bis zum Tod der Scheidet[03:23.300]sie lieben auch in schlechten Tagen....[03:29.300]Nein[03:33.300]Nein[03:35.300]Willst du bis der Tod euch scheidet[03:39.300]Treu ihr sein[03:45.300]Nein[03:49.300]Nein\n"
	},
	{
		"name":"Engel",
		"singer":"Rammstein",
		"time":"7:39",
		"img":"http://p1.music.126.net/DlbKGu3yuG5EHPn4cCyCFQ==/1364493947951718.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Rammstein%20-%20Engel.mp3",
		"lrc":"[00:42.70]Wer zu Lebzeit gut auf Erden[00:47.58]Wird nach dem Tod ein Engel werden[00:52.70]Den Blick gen Himmel fragst du dann[00:57.55]Warum man sie nicht sehen kann[00:59.91]...[01:03.30]Erst wenn die Wolken schlafen gehen[01:08.52]Kann man uns am Himmel sehen[01:13.12]Wir haben Angst und sind allein[01:18.30]Gott weiß ich will kein Engel sein[01:22.53].  .  .[01:44.80]Sie leben hinterm Sonnenschein[01:50.21]Getrennt von uns unendlich weit[01:55.10]Sie müssen sich an Sterne krallen (ganz fest)[01:58.62]Damit sie nicht vom Himmel fallen[02:03.49]...[02:05.71]Erst wenn die Wolken schlafen gehen[02:11.10]Kann man uns am Himmel sehen[02:15.56]Wir haben Angst und sind allein[02:20.40]Gott weiß ich will kein Engel sein[02:24.90].  .  .[03:15.75]Erst wenn die Wolken schlafen gehen[03:21.04]Kann man uns am Himmel sehen[03:25.81]Wir haben Angst und sind allein[03:30.75]Gott weiß ich will kein Engel sein[03:40.79]Gott weiß ich will kein Engel sein[03:50.80]Gott weiß ich will kein Engel sein[04:00.75]Gott weiß ich will kein Engel sein[04:10.83]Gott weiß ich will kein Engel sein\n"
	},
	{
		"name":"Hallelujah",
		"singer":"Rammstein",
		"time":"3:42",
		"img":"http://p1.music.126.net/Pi3ZqfEwvo4qO1pTw6ZiAA==/1673456697485199.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Rammstein%20-%20Hallelujah.mp3",
		"lrc":"[00:00.00][00:14.140]Er ist fromm und sehr sensibel[00:21.080]an seiner Wand ein Bild des Herrn[00:28.470]er wischt die Flecken von der Bibel[00:36.080]das Abendmahl verteilt er gern[00:58.499]Er liebt die Knaben aus dem Chor[01:05.525]sie halten ihre Seelen rein[01:12.766]doch Sorge macht ihm der Tenor[01:17.135]so muss er ihm am nachsten sein[01:20.436]auf seinem Nachttisch still und stumm[01:23.956]ein Bild des Herrn er dreht es langsam um[01:33.052][01:36.608]Wenn die Turmuhr zweimal schlagt[01:39.126]hallelujah[01:42.325]faltet er die Hande zum Gebet[01:45.897]hallelujah[01:49.596]er ist ohne Weib geblieben[01:53.325]hallelujah[01:56.974]so muss er seinen Nachsten lieben[02:00.677]hallelujah[02:04.796][02:05.257]Der junge Mann darf bei ihm bleiben[02:08.497]die Sunde nistet uberm Bein[02:11.977]so hilft er gern sie auszutreiben[02:15.578]bei Musik und Kerzenschein[02:23.497][02:35.742]Wenn die Turmuhr zweimal schlagt[02:38.351]hallelujah[02:41.872]faltet er die Hande zum Gebet[02:45.772]hallelujah[02:49.382]er ist ohne Weib geblieben[02:53.834]hallelujah[02:56.672]so muss er seinen Nachsten lieben[03:00.391]hallelujah[03:04.100]Wenn die Turmuhr zweimal schlagt[03:07.722]hallelujah[03:11.401]nimmt er den Jungen ins Gebet[03:15.100]hallelujah[03:18.891]er ist der wahre Christ[03:22.661]hallelujah[03:26.113]und weiss, was Nachstenliebe ist[03:29.763]hallelujah[03:31.442]Dreh dich langsam um[03:31.442]dreh dich um[03:31.442]\n"
	},
	{
		"name":"Links 2 3 4",
		"singer":"Rammstein",
		"time":"4:54",
		"img":"http://p1.music.126.net/DlbKGu3yuG5EHPn4cCyCFQ==/1364493947951718.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Rammstein%20-%20Links%202%203%204.mp3",
		"lrc":"[01:14.83]Kann man Herzen brechen[01:18.43]Können Herzen sprechen[01:21.92]Kann man Herzen quälen[01:25.78]Kann man Herzen stehlen[01:29.88]Sie wollen mein Herz am rechten Fleck[01:32.65]Doch sehe ich dann nach unten weg[01:35.99]Da schlägt es links[01:37.69][01:44.42]Links[01:45.15][01:51.79]Können Herzen singen[01:55.50]Kann ein Herz zerspringen[01:58.93]Können Herzen rein sein[02:02.12]Kann ein Herz aus Stein sein[02:06.61]Sie wollen mein Herz am rechten Fleck[02:09.72]Doch sehe ich dann nach unten weg[02:13.16]Da schlägt es links[02:14.69][02:17.65]Links[02:18.61][02:21.15]Links[02:22.07][02:24.78]Links[02:25.67][02:26.83]Links  zwo, drei, vier[02:28.65]Links  zwo, links zwei, links zwo, drei, vier[02:32.24]Links[02:33.42][02:35.90]Links  zwo, links zwei, links  zwo, drei, vier[02:39.64]Links[02:40.79][02:41.74]Links  zwo, drei, vier[02:43.27][02:47.08]Kann man Herzen fragen[02:51.16]Ein Kind darunter tragen[02:55.05]Kann man es verschenken[02:59.12]Mit dem Herzen denken[03:02.21]Sie wollen mein Herz am rechten Fleck[03:05.14]Doch sehe ich dann nach unten weg[03:09.61]Da schlägt es in der linken Brust[03:13.35]Der Neider hat es schlecht gewusst[03:16.69]Links[03:18.90][03:20.36]Links[03:21.15][03:23.85]Links[03:24.72][03:27.46]Links[03:28.32][03:31.28]Links[03:32.03][03:34.95]Links[03:35.75][03:38.61]Links[03:39.52][03:42.29]Links[03:43.28][03:44.34]Links  zwo, drei, vier[03:46.29][04:15.78]Links  zwo, links  zwo, links  zwo, drei, vier[04:19.29]Links[04:20.27][04:22.92]Links  zwo, links  zwo, links  zwo, drei, vier[04:26.65]Links[04:27.35][04:30.32]Links  zwo, links  zwo, links  zwo, drei, vier[04:34.29]Links  zwo, links  zwo, links  zwo, drei, vier[04:37.59]Links  zwo, links  zwo, links  zwo, drei, vier[04:39.55]Links  zwo, links  zwo, links  zwo, drei, vier[04:45.08]Links[04:46.44]\n"
	},
	{
		"name":"Spielt Mit Mir",
		"singer":"Rammstein - The Very Best Of",
		"time":"4:45",
		"img":"http://p1.music.126.net/DlbKGu3yuG5EHPn4cCyCFQ==/1364493947951718.jpg?param=130y130",
		"src":"http://p2.music.126.net/_cc3VK5I-5E6R1e__mNZpg==/801543976693958.jpg?param=130y130",
		"lrc":"[00:36.99]Wir teilen Zimmer und das Bett[00:43.19]Bruderlein komm sei so nett[00:49.63]Bruderlein komm fass mich an[00:55.78]rutsch ganz dicht an mich heran[01:02.29]Vor dem Bett ein schwarzes Loch[01:08.06]und hinein fallt jedes Schaf[01:14.22]bin schon zu alt und zahl sie doch[01:20.36]denn ich find keinen Schlaf[01:38.48]Unterm Nabel im Geast[01:44.97]wartet schon ein weisser Traum[01:51.08]Bruderlein komm halt dich fest[01:57.25]und schuttel mir das Laub vom Baum[02:03.01]Spiel ein Spiel - mit mir[02:09.76]gib mir deine Hand und[02:15.71]spiel mit mir - ein Spiel[02:21.89]spiel mit mir - ein Spiel[02:28.04]spiel mit mir - weil wir alleine sind[02:34.22]spiel mit mir - ein Spiel[02:38.41]Vater Mutter Kind[03:17.21]Dem Bruderlein schmerzt die Hand[03:23.32]er dreht sich wieder an die Wand[03:29.48]der Bruder hilft mir dann und wann[03:35.53]damit ich schlafen kann[03:41.39]Spiel ein Spiel - mit mir[03:47.58]gib mir deine Hand[03:54.06]spiel mit mir - ein Spiel[04:00.22]spiel mit mir - ein Spiel[04:06.35]spiel mit mir - weil wir alleine sind[04:12.44]spiel mit mir - ein Spiel[04:41.41]Vater Mutter Kind\n"
	},
	{
		"name":"Sehnsucht",
		"singer":"Rammstein",
		"time":"4:04",
		"img":"http://p1.music.126.net/8oWlbk83wCQKZP9OzaAEHw==/2540971372216261.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Sehnsucht-Rammstein.mp3",
		"lrc":"[id:$00000000][ar:Rammstein][ti:Sehnsucht][by:][hash:25eeff7256221dfd2c4d8cea6e50d181][al:][sign:][qq:][total:0][offset:0][00:00.10]Sehnsucht (怀旧) - Rammstein (战车乐队)[00:38.59]Lass mich deine Traene reiten[00:40.21]Uebers Kinn nach Afrika[00:45.35]Wieder in den Schoss der Loewin[00:47.25]Wo ich einst zuhause war[00:52.25]Zwischen deine langen Beinen[00:53.83]Such den Schnee vom letzten Jahr[00:59.07]Doch es ist kein Schnee mehr da[01:19.61]Lass mich deine Traene reiten[01:21.34]Ueber Wolken ohne Glueck[01:26.45]Der grosse Vogel schiebt den Kopf[01:28.05]Sanft in sein Versteck zurueck[01:33.32]Zwischen deine langen Beinen[01:34.84]Such den Sand vom letzten Jahr[01:40.17]Doch es ist kein Sand mehr da[01:46.96]Sehnsucht versteckt[01:50.00]Sich wie ein Insekt[01:53.41]Im Schlafe merkst du nicht[01:57.78]Dass es dich sticht[02:00.70]Gluecklich werd ich nirgendwo[02:03.64]Der Finger rutscht nach Mexiko[02:07.25]Doch er versinkt im Ozean[02:10.94]Sehnsucht ist so grausam[02:14.41]Sehnsucht[02:17.86]Sehnsucht[02:21.26]Sehnsucht[02:24.66]Sehnsucht[02:31.66]Sehnsucht[02:34.93]Sehnsucht versteckt[03:12.16]Sich wie ein Insekt[03:15.56]Im Schlafe merkst du nicht[03:19.74]Dass es dich sticht[03:22.88]Gluecklich werd ich nirgendwo[03:25.83]Der Finger rutscht nach Mexiko[03:29.28]Doch er versinkt im Ozean[03:33.17]Sehnsucht ist so grausam[03:36.57]Sehnsucht[03:40.03]Sehnsucht[03:43.43]Sehnsucht[03:46.83]Sehnsucht[03:50.29]Sehnsucht[03:54.17]Sehnsucht Sehnsucht\n"
	},
	{
		"name":"Spieluhr",
		"singer":"Rammstein",
		"time":"4:47",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909124843977030.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Rammstein%20-%20Spieluhr.mp3",
		"lrc":"[id:$00000000][ar:Rammstein][ti:Spieluhr (Dj Ps Reiter Mix][by:][hash:aaa9c76d4ac91a523ef03c869ac9eb38][al:][sign:][qq:][total:0][offset:0][00:00.12]Ein kleiner Mensch stirbt nur zum Schein[00:06.41]Wollte ganz alleine sein[00:09.68]Das kleine Herz stand still für Stunden[00:14.59]So hat man es für tot befunden[00:17.72]Es wird verscharrt in nassem Sand[00:21.64]Mit einer Spieluhr in der Hand[00:41.96]Der erste Schnee das Grab bedeckt[00:46.05]Hat ganz sanft das Kind geweckt[00:49.13]In einer kalten Winternacht[00:53.70]Ist das kleine Herz erwacht[01:05.04]Als der Frost ins Kind geflogen[01:08.62]Hat es die Spieluhr aufgezogen[01:12.50]Eine Melodie im Wind[01:16.19]Und aus der Erde singt das Kind[01:19.56]Hoppe hoppe Reiter[01:23.81]Und kein Engel steigt herab[01:27.05]Mein Herz schlägt nicht mehr weiter[01:30.79]Nur der Regen weint am Grab[01:34.69]Hoppe hoppe Reiter[01:38.91]Eine Melodie im Wind[01:41.97]Mein Herz schlägt nicht mehr weiter[01:46.21]Und aus der Erde singt das Kind[01:59.64]Der kalte Mond in voller Pracht[02:03.44]Hört die Schreie in der Nacht[02:06.88]Und kein Engel steigt herab[02:10.97]Nur der Regen weint am Grab[02:14.43]Zwischen harten Eichendielen[02:18.49]Wird es mit der Spieluhr spielen[02:22.26]Eine Melodie im Wind[02:26.01]Und aus der Erde singt das Kind[02:29.38]Hoppe hoppe Reiter[02:33.65]Und kein Engel steigt herab[02:36.68]Mein Herz schlägt nicht mehr weiter[02:40.75]Nur der Regen weint am Grab[02:44.51]Hoppe hoppe Reiter[02:48.78]Eine Melodie im Wind[02:51.84]Mein Herz schlägt nicht mehr weiter[02:56.24]Und aus der Erde singt das Kind[02:59.83]Hoppe hoppe Reiter[03:06.97]Mein Herz schlägt nicht mehr weiter[03:15.12]Am Totensonntag hörten sie[03:18.75]Aus Gottes Acker diese Melodie[03:22.57]Da haben sie es ausgebettet[03:26.29]Das kleine Herz im Kind gerettet[03:44.94]Hoppe hoppe Reiter[03:49.30]Eine Melodie im Wind[03:52.45]Mein Herz schlägt nicht mehr weiter[03:56.65]Und auf der Erde singt das Kind[03:59.97]Hoppe hoppe Reiter[04:04.27]Und kein Engel steigt herab[04:07.55]Mein Herz schlägt nicht mehr weiter[04:11.27]Nur der Regen weint am Grab[04:15.08]Hoppe hoppe Reiter[04:19.36]Eine Melodie im Wind[04:22.51]Mein Herz schlägt nicht mehr weiter[04:25.94]Und aus der Erde singt das Kind[04:39.96]Der kalte Mond in voller Pracht[04:43.91]Hört die Schreie in der Nacht[04:47.37]Und kein Engel steigt herab[04:51.49]Nur der Regen weint am Grab[04:54.89]Zwischen harten Eichendielen[04:59.05]Wird es mit der Spieluhr spielen[05:02.79]Eine Melodie im Wind[05:06.55]Und aus der Erde singt das Kind[05:09.99]Hoppe hoppe Reiter[05:14.21]Und kein Engel steigt herab[05:17.29]Mein Herz schlägt nicht mehr weiter[05:21.27]Nur der Regen weint am Grab[05:24.97]Hoppe hoppe Reiter[05:29.24]Eine Melodie im Wind[05:32.35]Mein Herz schlägt nicht mehr weiter[05:36.74]Und aus der Erde singt das Kind[05:40.09]Hoppe hoppe Reiter[05:47.63]Mein Herz schlägt nicht mehr weiter[05:55.50]Am Totensonntag hörten sie[05:59.31]Aus Gottes Acker diese Melodie[06:03.05]Da haben sie es ausgebettet[06:06.86]Das kleine Herz im Kind gerettet[06:25.41]Hoppe hoppe Reiter[06:29.73]Eine Melodie im Wind[06:32.77]Mein Herz schlägt nicht mehr weiter[06:37.19]Und auf der Erde singt das Kind[06:40.58]Hoppe hoppe Reiter[06:44.91]Und kein Engel steigt herab[06:48.03]Mein Herz schlägt nicht mehr weiter[06:51.92]Nur der Regen weint am Grab[06:55.71]Hoppe hoppe Reiter[06:59.81]Eine Melodie im Wind[07:03.04]Mein Herz schlägt nicht mehr weiter[07:06.70]Und auf der Erde singt das Kind\n"
	},
	{
		"name":"Gimme! Gimme Gimme",
		"singer":"Beseech",
		"time":"5:02",
		"img":"http://p2.music.126.net/VwdjaTzBgdz5zhTxz0hIrQ==/109951163796525023.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Beseech%20-%20Gimme%21%20Gimme%20Gimme.mp3",
		"lrc":"[01:04.19]Half past twelve[01:05.57][01:06.26]And I'm watching the late show in my flat all alone[01:10.38][01:10.94]How I hate to spend the evening on my own[01:14.57][01:16.82]Autumn winds[01:19.38]Blowing outside my window as I look around the room[01:24.76]And it makes me so depressed to see the gloom[01:29.01][01:31.44]There's not a soul out there[01:38.63]No one to hear my prayer[01:42.19]Gimme gimme gimme a man after midnight[01:51.82]Won't somebody help me chase the shadows away[01:58.01]Gimme gimme gimme a man after midnight[02:04.70]Take me through the darkness to the break of the day[02:10.19][02:33.51]Movie stars[02:35.70]Find the end of the rainbow, with a fortune to win[02:40.89]It's so different from the world I'm living in[02:45.14][02:46.64]Tired of T.V.[02:50.01]I open the window and I gaze into the night[02:54.26]But there's nothing there to see, no one in sight[02:59.38][03:02.01]There's not a soul out there[03:04.82][03:05.82]No one to hear my prayer[03:10.70][03:18.74]Gimme gimme gimme a man after midnight[03:23.86]Won't somebody help me chase the shadows away[03:28.37][03:29.86]Gimme gimme gimme a man after midnight[03:34.49][03:35.18]Take me through the darkness to the break of the day[03:39.99][04:03.96]Gimme gimme gimme a man after midnight[04:08.90]Won't somebody help me chase the shadows away[04:14.09][04:15.09]Gimme gimme gimme a man after midnight[04:19.59]Take me through the darkness to the break of the day[04:25.34]Gimme gimme gimme a man after midnight[04:31.65]Won't somebody help me chase the shadows away[04:36.58]Gimme gimme gimme[04:49.78]No one to hear my prayer[04:51.65][04:52.41]\n"
	},
	{
		"name":"Was ist hier los?",
		"singer":"Eisbrecher",
		"time":"3:32",
		"img":"http://p1.music.126.net/MTDUv_iuG2mtQrDc9Q66xg==/109951165981906225.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Eisbrecher%20-%20Was%20ist%20hier%20los%EF%BC%9F.mp3",
		"lrc":"[00:00.00] 作词 : Alexander Dietz/Alexander Wesselsky[00:01.00] 作曲 : Alexander Dietz/Noel Pix/Eike Freese[00:08.02]Wir bauen auf[00:09.88]Und reissen ein[00:11.79]Wir fangen an[00:13.57]Und lassens sein[00:15.65]Wir wollen viel[00:17.47]Wir koennen nicht[00:19.60]Erst kommt die wahrheit[00:21.47]Dann kommt die Pflicht[00:39.27]Erst geht nicht los[00:40.97]Dann faengt nicht an[00:42.91]Und wenn nicht heut[00:44.79]Dann irgendwann[00:46.80]Mal geht nichts rein[00:48.63]Dann kommt nicht raus[00:50.58]Nur heisse Luft[00:52.53]In diesem ehrenwerten Haus[00:56.75]Was ist hier los?-was?[00:58.42]Was ist passiert?-was?[01:00.36]Wie kann es sein[01:01.53]Dass das hier keinen interessiert[01:04.18]Was ist hier los?-was?[01:06.14]Was ist passiert?-was?[01:08.05]Soll das so sein[01:09.15]Dass hier rein gar nichts funktioniert[01:12.08]Was ist hier los?[01:29.53]Was ist hier los?[01:31.44]Was ist passiert?[01:33.32]Der Magen denkt[01:35.76]Das Herz pariert[01:37.72]Was ist hier los?[01:39.60]Ist das normal[01:41.50]Erst kommt das fressen[01:44.13]Und dann kommt die moral[02:01.17]Was ist hier los?-was?[02:02.99]Was ist passiert?-was?[02:05.02]Wie kann es sein[02:06.00]Dass das hier keinen interessiert[02:08.87]Was ist hier los?-was?[02:10.95]Was ist passiert?-was?[02:12.70]Soll das so sein[02:13.77]Dass hier rein gar nichts funktioniert[02:33.46]Wer nicht gewinnt[02:35.19]Und doch verliert[02:37.29]Hat viel gelernt[02:38.97]Und nichts kapiert[02:41.15]Es faengt nie an es endet nie[02:49.83]Was ist hier los?[03:05.20]Was ist hier los?-was?[03:07.07]Was ist passiert?-was?[03:09.01]Wie kann es sein[03:09.93]Wass das hier keinen interessiert[03:12.94]Was ist hier los?-was?[03:14.78]Was ist passiert?-was?[03:16.72]Soll das so sein[03:17.71]Dass hier rein gar nichts funktioniert[03:25.11]Was ist hier los\n"
	},
	{
		"name":"Out of Control",
		"singer":"Battle Beast",
		"time":"3:47",
		"img":"http://p2.music.126.net/3k68hLBau9K0wtONc8DaKg==/18852226369889695.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Out%20Of%20Control.mp3",
		"lrc":"[00:00.000] 作词 : KABANEN, ANTON[00:01.000] 作曲 : KABANEN, ANTON[00:30.22]Welcome to my kingdom madness[00:36.14]You're just in time for the show[00:42.45]Welcome to my world of darkness[00:48.21]A place where unreal becomes real[00:54.43]Come drink my blood, wake the demon in me[01:00.29]Come taste the wine of my sins[01:05.44]Out of control[01:06.68]Without any fear of facing the madman[01:11.54]Out of control[01:12.72]Defying the Gods of Hell[01:16.72]You are out of control[01:30.52]You can't find a shelter in Hellspace[01:36.18]Under my black wings of doom[01:42.50]The wind in the wasteland is howling[01:48.11]It's the wailing of ghosts of the past[01:54.32]Swing 'cross the ocean of pleasure and pain[02:00.19]Into my fatal embrace[02:05.46]Out of control[02:06.50]Without any fear of facing the madman[02:11.25]Out of control[02:12.69]defying the Gods of Hell[02:16.68]You are...[02:17.69]Out of control[02:18.85]Without any fear of facing the madman[02:23.45]Out of control[02:24.55]defying the Gods of Hell[02:28.54]You are out of control, whoa yeah![02:59.52]Out of control[03:00.68]Without any fear of facing the madman[03:05.44]Out of control[03:06.80]defying the Gods of Hell[03:10.54]You are...[03:11.50]Out of control[03:12.38]Without any fear of facing the madman[03:17.29]Out of control[03:18.70]defying the Gods of Hell[03:22.59]You are...[03:25.13]Out of control[03:31.60]Out of control[03:38.29]Out of control\n"
	},
	{
		"name":"Snuff (2012 Remastered)",
		"singer":"Slipknot",
		"time":"4:40",
		"img":"http://p2.music.126.net/22M084XwItIxDIZIZMpp2A==/109951166447487888.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/Snuff%20%282012%20Remaster%29.mp3",
		"lrc":"[00:00.00] 作词 : Corey Taylor/Craig Jones/Paul Gray/Mick Thomson/Joey Jordison/Sid Wilson/Chris Fehn/Jim Root[00:01.00] 作曲 : Corey Taylor/Craig Jones/Paul Gray/Mick Thomson/Joey Jordison/Sid Wilson/Chris Fehn/Jim Root[00:19.54]Bury all your secrets in my skin[00:27.00]Come away with innocence, and leave me with my sins[00:34.66]The air around me still feels like a cage[00:41.56]And love is just a camouflage for what resembles rage again…[01:04.50]So if you love me, let me go.[01:08.13]And run away before I know.[01:12.29]My heart is just too dark to care.[01:16.23]I can't destroy what isn't there.[01:20.00]Deliver me into my Fate[01:24.02]If I'm alone I cannot hate[01:27.86]I don't deserve to have you…[01:31.56]My smile was taken long ago[01:34.81]If I can change I hope I never know[01:52.25]I still press your letters to my lips[02:01.70]And cherish them in parts of me that savor every kiss[02:09.90]I couldn't face a life without your light[02:17.90]But all of that was ripped apart… when you refused to fight[02:24.63]So save your breath, I will not hear.[02:28.10]I think I made it very clear.[02:32.35]You couldn't hate enough to love.[02:36.10]Is that supposed to be enough?[02:39.91]I only wish you weren't my friend.[02:43.70]Then I could hurt you in the end.[02:47.71]I never claimed to be a Saint…[02:51.41]My own was banished long ago[02:55.15]It took the Death of Hope to let you go[03:25.42]So Break Yourself Against My Stones[03:30.25]And Spit Your Pity In My Soul[03:34.20]You Never Needed Any Help[03:37.79]You Sold Me Out To Save Yourself[03:42.08]And I Won't Listen To Your Shame[03:45.90]You Ran Away - You're All The Same[03:49.47]Angels Lie To Keep Control…[03:53.62]My Love Was Punished Long Ago[03:56.95]If You Still Care, Don't Ever Let Me Know[04:04.10]If you still care, don't ever let me know…\n"
	},
	{
		"name":"特斯河之赞",
		"singer":"九宝乐队",
		"time":"3:52",
		"img":"http://p1.music.126.net/Qj4TMvUezm4YAMN85CjaEg==/109951165476480136.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%A7/%E4%B9%9D%E5%AE%9D%E4%B9%90%E9%98%9F%20-%20%E7%89%B9%E6%96%AF%E6%B2%B3%E4%B9%8B%E8%B5%9E%20%28%E9%87%8D%E6%96%B0%E5%BD%95%E5%88%B6%29.mp3",
		"lrc":"[00:00.000] 作词 : 民歌[00:01.000] 作曲 : 民歌[00:02.000] 编曲 : 九宝乐队[00:03.000] 制作人 : 阿斯汗[01:08.52]从布拉乃山奔腾而[01:10.27]下如糖水般甘甜[01:12.02]顺着古老草原流淌的[01:13.78]福佑众生的古老的五条河[01:15.53]没过脚踝，亲润大地[01:17.29]使雀跃的羔羊疲惫[01:18.79]安抚受惊的马驹的[01:20.29]有着神奇法力的五条河[01:22.29]特斯河 特斯河 奔腾的特斯河[01:26.55]特斯河 特斯河 奔腾的特斯河[01:30.81]特斯河 特斯河 奔腾的特斯河[01:35.07]特斯河 特斯河 奔腾的特斯河[01:39.58][01:53.10]用走马的步伐[01:54.85]朝着乌布苏湖奔流[01:56.61]为人畜提供水源的[01:58.36]著名的五条特斯河[02:00.12]祖祖辈辈生活在此[02:01.87]从古至今福泽众生[02:03.37]水貂青鼬分衍生息的[02:05.13]富饶繁盛的五条河[02:06.88]特斯河 特斯河 奔腾的特斯河[02:11.14]特斯河 特斯河 奔腾的特斯河[02:15.40]特斯河 特斯河 奔腾的特斯河[02:19.65]特斯河 特斯河 奔腾的特斯河[02:23.91][03:18.99]特斯河 特斯河 奔腾的特斯河[03:23.00]特斯河 特斯河 奔腾的特斯河[03:27.52]特斯河 特斯河 奔腾的特斯河[03:31.78]特斯河 特斯河 奔腾的特斯河\n"
	}
],
/*分类5《心悦卿兮》*/
[
	{
		"basic":true,
		"name":"幸得识卿",
		"singer":"none",
		"img":"http://imgcache.qq.com/music/photo/album_500/97/500_albumpic_644097_0.jpg"
	},
	{
		"name":"粒子们",
		"singer":"于贞",
		"time":"3:52",
		"img":"http://p2.music.126.net/94GmQM2QkeB0G3TqJ0IFdQ==/109951165081557942.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E4%BA%8E%E8%B4%9E%20-%20%E7%B2%92%E5%AD%90%E4%BB%AC.mp3",
		"lrc":"[ar:于贞]\n[ti:粒子们]\n[al:粒子们]\n][00:00.00]粒子们 - 于贞[00:00.18]词：于贞[00:00.25]曲：于贞[00:00.25]编曲：欧阳俊峰/大蔚[00:00.26]混音：大蔚[00:00.27]母带：Toki[00:00.27]美声和声：李悦[00:00.28]摄影／封面：DUNN[00:00.28]配唱录音：黄磊/大蔚[00:00.29]录音棚：@了子录音棚[00:00.30]出品：米苏西娱乐[00:00.41]粒子们 一个又一个[00:02.21]一个又一个[00:03.68]构成你 严密[00:07.46]是宇宙一步又一步[00:09.34]一步又一步[00:10.59]机关算尽 我结局[00:14.43]天才们 造字造法历[00:16.49]数学和诗句[00:17.68]浪漫主义 我研习[00:21.57]只为了 一点又一点[00:23.44]一点又一点[00:24.77]更了解你[00:26.83]言下之意[00:28.79]在陌生人群地点你出现[00:30.75]自动成陌生人群焦点[00:32.35]而我注意到当我出现[00:34.24]你默默面红开始烧脸[00:36.31]我忍不住朝你那看[00:37.95]你太瞩目当你在看我[00:39.72]我们不如制造混乱[00:41.43]离开人群去外面探索[00:43.55]亲爱的魔鬼[00:45.14]太危险太美[00:47.01]瞳孔到发尾[00:48.56]画夜空不用墨水[00:50.13]为你买 买衣买包[00:51.92]买地买钻买鞋从不在意[00:54.20]受伤受创受尽毁誉[00:55.98]依然为你无所畏惧[00:57.80]Wu 我穿越过了星系无数[01:02.98]多数时间我孤独无处住[01:06.59]从没想过有人[01:07.84]能让我停下脚步[01:11.48]你的态度暧昧难捉摸[01:13.53]举棋不定我太懦弱[01:14.81]承认是我过错[01:16.16]你的爱太活脱热烈就像烈火[01:18.34]在蔓延着让我堕落[01:20.01]我想要爱你越多[01:22.05]越多痛被略过[01:23.54]就算接受审判[01:24.50]我也不会再怯懦[01:25.52]粒子们一个又一个[01:27.75]一个又一个[01:28.90]构成你[01:31.00]严密[01:32.70]是宇宙 一步又一步[01:34.54]一步又一步[01:35.95]机关算尽 我结局[01:39.77]天才们 造字造法历[01:41.76]数学和诗句[01:43.00]浪漫主义[01:45.10]我研习[01:46.99]只为了 一点又一点[01:48.83]一点又一点[01:50.09]更了解你[01:52.31]言下之意[01:55.81]把车开到海边[01:57.57]拉着你手走进海滩[01:59.35]海风大概没有概念[02:01.51]它吹着你的侧脸[02:03.67]雕刻的下颌线[02:05.34]渐 渐渐望向天[02:08.66]整个海面就像画片[02:10.52]和你构成了画面[02:12.39]上联对下联[02:13.96]我和你对祭品撒旦[02:15.93]就直接跳程序[02:17.82]结婚礼不请亲戚[02:19.64]星期一 黑皮衣[02:21.44]森林里开香槟[02:22.94]蜜月旅行去意大利[02:24.65]教堂门口我为你下笔[02:26.48]悄悄推敲字句安排旋律[02:28.22]把我爱你写满整张餐巾[02:30.42]海滩上你叫醒了我[02:31.91]夕阳温暖而你太凉薄[02:33.87]爱不爱我你从来不说[02:35.59]只笑着看我 我自我折磨[02:37.35]恶魔 你是恶魔[02:40.24]我早该知道当你眼中闪烁地火[02:43.83]我没能力阻止你致命的吸引力[02:47.56]像松杉般美丽[02:49.16]在高寒之地[02:50.04]散发神秘香气[02:51.49]粒子们一个又一个[02:52.90]一个又一个[02:54.14]构成你[02:56.37]严密[02:58.00]是宇宙 一步又一步[02:59.87]一步又一步[03:01.21]机关算尽 我结局[03:05.08]天才们 造字造法历[03:06.95]数学和诗句[03:08.33]用心用情用千方百计[03:12.39]演算美轮美奂生死爱别离[03:20.22]顾不上死后能否去天上[03:23.50]高声唱当你醉在我身旁[03:27.17]陪你醉下去随你睡下去[03:29.19]我为你挡众神旨意[03:30.78]像教徒虔诚的唱起[03:33.56]粒子们一个又一个[03:35.54]一个又一个[03:36.81]构成你[03:39.06]严密[03:40.64]是宇宙 一步又一步[03:42.46]一步又一步[03:43.87]机关算尽",
		

	},
	{
		"name":"僕が死のうと思ったのは",
		"singer":"中島美嘉",
		"time":"6:20",
		"img":"http://p2.music.126.net/ECoB5pAS7dnHfFLrsifWPg==/109951165946252774.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%83%95%E3%81%8C%E6%AD%BB%E3%81%AE%E3%81%86%E3%81%A8%E6%80%9D%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%AF.mp3",
		"lrc":"[00:00.00] 作词 : 秋田ひろむ[00:01.00] 作曲 : 秋田ひろむ[00:02.00] 编曲 : 出羽良彰[00:28.08]僕が死のうと思ったのは ウミネコが桟橋で鳴いたから[00:39.13]波の随意に浮かんで消える 過去も啄ばんで飛んでいけ[00:50.67]僕が死のうと思ったのは 誕生日に杏の花が咲いたから[01:02.20]その木漏れ日でうたた寝したら 虫の死骸と土になれるかな[01:12.05][01:14.11]薄荷飴 漁港の灯台 錆びたアーチ橋 捨てた自転車[01:20.07]木造の駅のストーブの前で どこにも旅立てない心[01:25.93]今日はまるで昨日みたいだ 明日を変えるなら今日を変えなきゃ[01:31.60]分かってる 分かってる けれど[01:39.85]僕が死のうと思ったのは 心が空っぽになったから[01:51.40]満たされないと泣いているのは きっと満たされたいと願うから[02:25.71]僕が死のうと思ったのは 靴紐が解けたから[02:37.10]結びなおすのは苦手なんだよ 人との繋がりもまた然り[02:48.39]僕が死のうと思ったのは 少年が僕を見つめていたから[02:59.87]ベッドの上で土下座してるよ あの日の僕にごめんなさいと[03:11.56]パソコンの薄明かり 上階の部屋の生活音[03:18.35]インターフォンのチャイムの音 耳を塞ぐ鳥かごの少年[03:23.94]見えない敵と戦ってる 六畳一間のドンキホーテ[03:29.65]ゴールはどうせ醜いものさ[03:37.79]僕が死のうと思ったのは 冷たい人と言われたから[03:49.34]愛されたいと泣いているのは 人の温もりを知ってしまったから[04:23.78]僕が死のうと思ったのは あなたが綺麗に笑うから[04:34.86]死ぬことばかり考えてしまうのは きっと生きる事に真面目すぎるから[04:46.60]僕が死のうと思ったのは まだあなたに出会ってなかったから[04:57.83]あなたのような人が生まれた 世界を少し好きになったよ[05:09.34]あなたのような人が生きてる 世界に少し期待するよ\n",
		

	},
	{
		"name":"通透",
		"singer":"陈亦云",
		"time":"4:55",
		"img":"http://p1.music.126.net/B81xi9Sk2ey_-50Tsxx43Q==/109951163213935721.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E9%80%9A%E9%80%8F.mp3",
		"lrc":"[00:00.00] 作词 : 陈亦云[00:01.00] 作曲 : 秦天/陈亦云[00:08.75]编曲：艾欣/小艾[00:18.91]从没有一个人像你[00:22.42]闪着泪光走进我的生命里[00:26.17]以为能照亮眼前的黑漆[00:30.27]你说风生水起靠自己[00:34.81]从没有一个人像你[00:38.10]浅浅的话深刻在我的心底[00:42.34]若爱我先试试我的脾气[00:46.22]然后再说久伴不离[00:50.36]等我把脸皮磨厚[00:53.58]再给你想要的温柔[00:58.56]一千次我决定远走[01:01.90]可最后被你看通透[01:06.12]等远山被风遗漏[01:10.16]等大海遗忘了洋流[01:14.42]等春嫁给深秋以后[01:17.41]心才不会为你颤抖[01:22.37]等我把脸皮磨厚[01:25.59]再给你想要的温柔[01:30.60]一千次我决定远走[01:33.72]可最后被你看通透[01:38.30]等远山被风遗漏[01:41.98]等大海遗忘了洋流[01:46.28]等春嫁给深秋以后[01:49.43]心才不会为你颤抖[01:58.26][02:12.83]也许有一个人像你[02:16.63]可惜终究也只能是像而已[02:20.26]谁还能将你的体温代替[02:24.24]想你了解你不必费力[02:28.81]遇见了千千万个自己[02:32.41]哪一个足够完美 配得上你[02:36.62]一个并不完美的自己[02:40.28]可能给的我都给你[02:44.66]等我把脸皮磨厚[02:47.68]再给你想要的温柔[02:52.56]一千次我决定远走[02:55.56]可最后被你看通透[03:00.37]等远山被风遗漏[03:03.93]等大海遗忘了洋流[03:08.28]等春嫁给深秋以后[03:11.42]心才不会为你颤抖[03:16.36]等我把脸皮磨厚[03:19.42]再给你想要的温柔[03:23.63]一千次我决定远走[03:26.86]可最后被你看通透[03:31.48]等远山被风遗漏[03:34.94]等大海遗忘了洋流[03:39.44]等春嫁给深秋以后[03:42.62]心才不会为你颤抖[03:48.70][03:49.61]等余生挥霍足够[03:52.83]脚步依然为你停留[03:57.98]承诺是我绝不占有[04:01.26]只在身后为你固守[04:06.07]等我把脸皮磨厚[04:09.30]再给你想要的温柔[04:14.75]一千次我决定远走[04:17.39]可最后被你看通透[04:24.97]一千次我决定远走[04:28.26]可最后被你看通透[04:39.65][04:46.52]企划： 星空[04:48.12]发行人：桑爱/刘凯[04:49.93]发行方：看见音乐（北京）有限公司\n",
		

	},
	{
		"name":"你的答案",
		"singer":"阿冗",
		"time":"3:39",
		"img":"http://p1.music.126.net/kE5vu_BVgwVHFVAjzKXSjg==/109951166200194461.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E4%BD%A0%E7%9A%84%E7%AD%94%E6%A1%88.mp3",
		"lrc":"[00:00.00] 作词 : 林晨阳/刘涛[00:01.00] 作曲 : 刘涛[00:02.21]编曲 : 谭侃侃[00:03.00](本作品声明：著作权权利保留，未经许可不得翻唱或使用！)[00:25.33]也许世界就这样[00:28.47]我也还在路上[00:31.25]没有人能诉说[00:36.32]也许我只能沉默[00:39.21]眼泪湿润眼眶[00:42.01]可又不甘懦弱[00:45.94]低着头期待白昼[00:50.90]接受所有的嘲讽[00:56.67]向着风拥抱彩虹[01:01.89]勇敢地向前走[01:06.71]黎明的那道光[01:08.88]会越过黑暗[01:11.52]打破一切恐惧我能[01:14.66]找到答案[01:17.29]哪怕要逆着光[01:19.72]就驱散黑暗[01:22.56]丢弃所有的负担[01:25.65]不再孤单[01:28.54]不再孤单[01:39.04]也许世界就这样[01:41.93]我也还在路上[01:44.87]没有人能诉说[01:49.86]也许我只能沉默[01:52.90]眼泪湿润眼眶[01:55.58]可又不甘懦弱[01:59.40]低着头期待白昼[02:04.61]接受所有的嘲讽[02:10.27]向着风拥抱彩虹[02:15.59]勇敢地向前走[02:20.34]黎明的那道光[02:22.47]会越过黑暗[02:25.15]打破一切恐惧我能[02:28.29]找到答案[02:30.92]哪怕要逆着光[02:33.50]就驱散黑暗[02:35.99]丢弃所有的负担[02:39.37]不再孤单[02:42.16]不再孤单[02:50.44]黎明的那道光[02:52.56]会越过黑暗[02:55.34]打破一切恐惧我能[02:58.33]找到答案[03:01.11]哪怕要逆着光[03:03.39]就驱散黑暗[03:06.07]有一万种的力量[03:09.31]淹没孤单[03:12.36]不再孤单[03:14.58]也许世界就这样[03:17.37]我也还在路上[03:20.38]没有人能诉说[03:25.28]也许我只能沉默[03:28.32]眼泪湿润眼眶[03:31.11]可又不甘懦弱[03:35.41]制作人 : 刘涛[03:35.56]吉他 : 谭侃侃[03:36.57]键盘 : 谭侃侃[03:36.73]合声 : 金天 / 胡阁[03:36.93]录音棚 : 北京好乐无荒录音棚[03:37.33]录音师 : 吴佳敏[03:37.49]混音师 : 刘三斤[03:37.69]母带后期混音师 : 刘三斤[03:38.04]监制 : 陶诗[03:38.14]封面设计 : kidult.[03:38.35]OP&SP : 好乐无荒[03:38.55]鸣谢 : 万物体验家 / 不要音乐\n",
		

	},
	{
		"name":"ブルーバード",
		"singer":"いきものがかり",
		"time":"5:09",
		"img":"http://p2.music.126.net/OlX-4S4L0Hdkyy_DQ27zag==/109951164459621658.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E3%83%96%E3%83%AB%E3%83%BC%E3%83%90%E3%83%BC%E3%83%89.mp3",
		"lrc":"[00:00.00] 作词 : Yoshiki Mizuno[00:00.20] 作曲 : Yoshiki Mizuno[00:00.40]飛翔いたら戻らないと言って[00:07.13]目指したのは 蒼い 蒼い あの空[00:14.15][00:25.99]“悲しみ”はまだ覚えられず[00:29.17]“切なさ”は今つかみはじめた[00:32.39]あなたへと抱く この感情も[00:35.45]今“言葉”に変わっていく[00:38.72]未知なる世界の 遊迷(ゆめ)から目覚めて[00:44.97]この羽根を広げ 飛び立つ[00:51.20]飛翔(はばた)いたら 戻らないと言って[00:57.57]目指したのは 白い 白い あの雲[01:03.88]突き抜けたら みつかると知って[01:10.39]振り切るほど 蒼い 蒼い あの空[01:16.58]蒼い 蒼い あの空[01:19.67]蒼い 蒼い あの空[01:23.57][01:29.09]愛想尽きたような音で[01:32.32]錆びれた古い窓は壊れた[01:35.44]見飽きたカゴは ほら捨てていく[01:38.64]振り返ることはもうない[01:41.80]高鳴る鼓動に 呼吸を共鳴(あず)けて[01:48.17]この窓を蹴って 飛び立つ[01:54.48]駆け出したら 手にできると言って[02:00.78]いざなうのは 遠い 遠い あの声[02:07.05]眩しすぎた あなたの手も握って[02:13.34]求めるほど 蒼い 蒼い あの空[02:26.64][02:32.87]墜ちていくと わかっていた[02:39.07]それでも 光を追い続けていくよ[02:46.58]飛翔(はばた)いたら 戻らないと言って[02:52.89]探したのは 白い 白い あの雲[02:59.15]突き抜けたら みつかると知って[03:05.49]振り切るほど 蒼い 蒼い あの空[03:11.79]蒼い 蒼い あの空[03:14.95]蒼い 蒼い あの空[03:19.67]\n",		

	},
	{
		"name":"盗将行",
		"singer":"花粥 / 马雨阳",
		"time":"3:18",
		"img":"http://p2.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E8%8A%B1%E7%B2%A5%2C%E9%A9%AC%E9%9B%A8%E9%98%B3%20-%20%E7%9B%97%E5%B0%86%E8%A1%8C.mp3",
		"lrc":"[00:00.00] 作词 : 姬霄[00:01.00] 作曲 : 花粥[00:08.22]编曲/混音：马雨阳[00:17.61]劫过九重城关[00:20.58]我座下马正酣[00:23.05]看那轻飘飘的衣摆[00:26.37]趁擦肩把裙掀[00:29.27]踏遍三江六岸[00:32.61]借刀光做船帆[00:35.34]任露水浸透了短衫[00:38.79]大盗睥睨四野[00:43.13]枕风宿雪多年[00:46.59]我与虎谋早餐[00:49.08]拎着钓叟的鱼弦[00:52.75]问卧龙几两钱[00:55.27]蜀中大雨连绵[00:58.69]关外横尸遍野[01:01.53]你的笑像一条恶犬[01:04.70]撞乱了我心弦[01:22.40]谈花饮月赋闲[01:25.17]这春宵艳阳天[01:27.67]待到梦醒时分睁眼[01:31.17]铁甲寒意凛冽[01:33.70]夙愿只隔一箭[01:37.10]故乡近似天边[01:40.00]不知何人浅唱弄弦[01:43.40]我彷徨不可前[01:50.71]枕风宿雪多年[01:54.04]我与虎谋早餐[01:56.73]拎着钓叟的鱼弦[02:00.23]问卧龙几两钱[02:02.91]蜀中大雨连绵[02:06.44]关外横尸遍野[02:09.17]你的笑像一条恶犬[02:12.53]撞乱我心弦[02:15.31]烽烟万里如衔[02:18.68]掷群雄下酒宴[02:21.40]谢绝策勋十二转[02:24.93]想为你窃玉簪[02:27.60]入巷间吃汤面[02:31.08]笑看窗边飞雪[02:33.73]取腰间明珠弹山雀[02:37.12]立枇杷于庭前[02:45.14]入巷间吃汤面[02:49.09]笑看窗边飞雪[02:52.60]取腰间明珠弹山雀[02:56.44]立枇杷于庭前\n",		

	},
	{
		"name":"往后余生",
		"singer":"王贰浪",
		"time":"3:51",
		"img":"http://p2.music.126.net/hTiVEeQTUSsc-YGF3o6ItQ==/109951163337847600.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F.mp3",
		"lrc":"[00:00.00] 作词 : 马良[00:01.00] 作曲 : 马良[00:09.42][00:17.07]在没风的地方找太阳[00:23.64]在你冷的地方做暖阳[00:31.20]人事纷纷[00:34.69]你总太天真[00:39.05]往后的余生[00:41.05]我只要你[00:44.74]往后余生[00:48.01]风雪是你[00:51.72]平淡是你[00:55.59]清贫也是你[00:59.27]荣华是你[01:02.78]心底温柔是你[01:07.36]目光所致[01:10.12]也是你[01:13.75][01:30.55]想带你去看晴空万里[01:37.63]想大声告诉你我为你着迷[01:46.09]往事匆匆[01:48.85]你总是会感动[01:52.85]往后的余生[01:54.98]我只要你[01:58.30]往后余生[02:01.90]风雪是你[02:05.83]春华是你[02:09.49]夏雨也是你[02:12.97]秋黄是你[02:16.76]四季冷暖是你[02:21.02]目光所致[02:23.82]也是你[02:29.22][02:57.41]往后余生[03:01.06]风雪是你[03:04.75]平淡是你[03:08.38]清贫也是你[03:12.13]荣华是你[03:15.42]心底温柔是你[03:19.91]目光所致[03:22.72]也是你[03:27.50]目光所致[03:31.19]也是你[03:33.30]总策划：唐晶晶[03:34.30]制作人：王佳依 张燕峰[03:35.77]监制：姚政[03:36.12]编曲：张燕峰[03:37.12]企划：牛雪吟[03:39.74]伴唱：王贰浪[03:41.49]缩混：唐瑜[03:43.30]母带：唐瑜[03:45.66]录音室：KOl Musical Equipment Ltd[03:47.94]网易云音乐特别企划“回声不息”出品[99:00.01]本歌曲来自〖网易音乐人〗[99:00.02]10亿现金激励，千亿流量扶持！[99:00.03]合作：st399@vip.163.com\n",		

	},
	{
		"name":"纸短情长",
		"singer":"花粥",
		"time":"3:06",
		"img":"http://p1.music.126.net/PXE9MfYCgnjHz1vkrpUywQ==/109951163290871736.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%BA%B8%E7%9F%AD%E6%83%85%E9%95%BF.mp3",
		"lrc":"[00:00.00] 作词 : yes[00:01.00] 作曲 : yes[00:10.08]你陪我步入蝉夏 越过城市喧嚣[00:16.37]歌声还在游走 你榴花般的双眸[00:21.59]不见你的温柔 丢失花间欢笑[00:27.56]岁月无法停留 流云的等候[00:33.60]我真的好想你 在每一个雨季[00:38.75]你选择遗忘的 是我最不舍的[00:43.79]纸短情长啊 道不尽太多涟漪[00:49.06]我的故事都是关于你呀[00:53.43]怎么会爱上了他 并决定跟他回家[00:58.45]放弃了我的所有我的一切无所谓[01:03.19]纸短情长啊 诉不完当时年少[01:08.70]我的故事还是关于你啊[01:14.24][01:32.35]你陪我步入蝉夏 越过城市喧嚣[01:38.04]歌声还在游走 你榴花般的双眸[01:42.57]不见你的温柔 丢失花间欢笑[01:47.31]岁月无法停留 流云的等候[01:52.59]我真的好想你 在每一个雨季[01:57.07]你选择遗忘的 是我最不舍的[02:01.98]纸短情长啊 道不尽太多涟漪[02:07.02]我的故事都是关于你呀[02:11.17]怎么会爱上了他 并决定跟他回家[02:16.37]放弃了我的所有我的一切无所谓[02:21.04]纸短情长啊 诉不完当时年少[02:26.42]我的故事还是关于你啊[02:32.46][02:41.11]你陪我步入蝉夏 越过城市喧嚣[02:47.15]歌声还在游走 你榴花般的双眸[02:52.26]不见你的温柔 丢失花间欢笑[02:58.38]岁月无法停留 流云的等候[03:02.09]监制:姚政 唐晶晶[03:03.02]制作人:刘凯波[03:03.94]编曲:刘凯波[03:04.67]吉他:艾宇[03:05.15]Vocal录音:徐真真[03:05.64]Mix&Mastering：刘凯波[03:06.15][99:00.01]本歌曲来自〖网易音乐人〗[99:00.02]10亿现金激励，千亿流量扶持！[99:00.03]合作：st399@vip.163.com\n",		

	},
	{
		"name":"我的名字",
		"singer":"焦迈奇",
		"time":"4:11",
		"img":"http://p1.music.126.net/Ppzb5LV4l9R-yki1BQQB0A==/109951166267072680.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%84%A6%E8%BF%88%E5%A5%87%20-%20%E6%88%91%E7%9A%84%E5%90%8D%E5%AD%97.mp3",
		"lrc":"[00:00.00] 作词 : 焦迈奇[00:00.15] 作曲 : 焦迈奇[00:00.30][00:00.83][00:00.84]拜托你轻声重着我的名字[00:08.98]我学大人的语气应着你[00:17.29]庆幸自己没跑太久[00:20.42]还活在弹丸之地[00:24.12]纯粹的以为世界等同于你[00:32.65][00:50.30]拜托你大声怒斥我的名字[00:57.15]我要赌气向远方跑去[01:04.02]如果没有这些声音[01:06.64]我还搞不清[01:09.61]多远才算是离开的距离[01:15.35][01:17.11]在死缠烂打的青春日子里[01:24.09]无非挣扎得也就那么几个问题[01:29.95][01:34.14]我习惯在包里藏一瓶百无聊赖[01:40.56]打发人间的白云和苍狗[01:43.06]设计睡着的未来[01:47.87]我庆幸那些难堪正中我的下怀[01:54.61]让我怀疑我的存在[01:57.06]最后笑了起来[02:01.17][02:16.02]拜托你轻声重着我的名字[02:22.89]我学大人的语气应着你[02:29.70]庆幸自己没跑太久[02:32.51]还活在弹丸之地[02:35.30]纯粹的以为世界等同于你[02:42.26][02:42.64]我习惯在包里藏一瓶百无聊赖[02:49.24]打发人间的白云和苍狗[02:51.59]设计睡着的未来[02:56.31]我庆幸那些难堪正中我的下怀[03:03.18]让我怀疑我的存在[03:05.35]最后笑了起来[03:10.00][03:24.48]我会懂得舍得记得[03:26.02]你是我是你的[03:27.59]我会懂得舍得记得[03:29.27]你是我是你的[03:31.00]我会懂得舍得记得[03:32.69]你是我是你的[03:34.41]我会懂得舍得记得[03:36.51][03:37.92]我会懂得舍得记得[03:39.53]你是我是你的[03:41.24]我会懂得舍得记得[03:43.13]你是我是你的[03:44.77]我会懂得舍得记得[03:46.48]你是我是你的[03:48.11]我会懂得舍得记得[03:50.61][03:53.98]拜托你轻声重着…[03:57.69][04:03.63]编曲 : 李天衣/许蔚天[04:04.16]制作人 : 许蔚天[04:04.57]鼓 : Hayato[04:04.96]贝斯 : 崔文正[04:05.46]吉他 : 周坤[04:05.92]录音师 : 李卓@TC Faders[04:06.30]混音师 : 李卓@TC Faders[04:06.64]音频编辑 : 李卓@TC Faders[04:07.02]母带制作 : 周天澈@TC Faders[04:07.42]录音棚 : 55 TEC Studio\n",		

	},
	{
		"name":"不在",
		"singer":"韩安旭",
		"time":"4:16",
		"img":"http://p1.music.126.net/duY_T9VXfpnEcsuoQDFPmw==/109951163169037953.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E9%9F%A9%E5%AE%89%E6%97%AD%20-%20%E4%B8%8D%E5%9C%A8.mp3",
		"lrc":"[00:00.00] 作词 : 尤雅琪[00:01.00] 作曲 : 胜屿[00:02.00] 编曲 : 胜屿[00:06.98]不在 - 韩安旭[00:15.72]我累了就紧紧锁住情绪[00:19.07]不再放任它堆积[00:22.76]我痛了就静静屏住呼吸[00:26.10]不给想念留余地[00:28.72]只是下雨时会委屈[00:32.23]只是想起你会哭泣[00:35.90]没关系 真没关系[00:44.61]我终于学会一个人弹琴[00:47.83]只是弹琴没有你[00:51.85]我终于学会一个人做梦[00:55.10]只是做梦没有你[00:57.71]我依旧像从前粗心[01:01.23]时常会忘记星期几[01:05.04]却始终忘不掉你看我的眼睛[01:11.81]穿过了熙攘的人海[01:15.47]想找谁能把你取代[01:19.13]复制你曾给过我的[01:22.76]那种宠爱[01:26.32]掏空了回忆的脑海[01:30.00]寂寞却狠狠扑过来[01:33.79]措手不及 无法躲开[01:40.99]我承认是我太依赖[01:44.45]像个不懂事的小孩[01:48.18]挥霍掉我们的未来[01:51.81]才醒过来[01:55.45]我承认后悔了伤害[01:59.04]抛开你的好我的坏[02:02.83]直到如今学会忍耐 你不在[02:26.46]我终于学会一个人弹琴[02:29.79]只是弹琴没有你[02:33.69]我终于学会一个人做梦[02:36.92]只是做梦没有你[02:39.55]我依旧像从前粗心[02:43.02]时常会忘记星期几[02:46.81]却始终忘不掉你看我的眼睛[02:53.72]穿过了熙攘的人海[02:57.24]想找谁能把你取代[03:00.90]复制你曾给过我的[03:04.61]那种宠爱[03:08.18]掏空了回忆的脑海[03:11.76]寂寞却狠狠扑过来[03:15.51]措手不及 无法躲开[03:22.68]我承认是我太依赖[03:26.32]像个不懂事的小孩[03:30.01]挥霍掉我们的未来[03:33.69]才醒过来[03:37.27]我承认后悔了伤害[03:40.83]抛开你的好我的坏[03:44.70]直到如今学会忍耐 你不在\n",		

	},
	{
		"name":"Pas De Deux of Sands and Seashell",
		"singer":"Music therapy",
		"time":"4:09",
		"img":"http://p2.music.126.net/xsNXU1Vh3tUpaC0vI1UxdA==/109951164036610460.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Music%20therapy%20-%20Pas%20De%20Deux%20of%20Sands%20and%20Seashell.mp3",
		"lrc":"[99:00.00]纯音乐，请欣赏\n",		

	},
	{
		"name":"飞奔向你",
		"singer":"于贞",
		"time":"3:51",
		"img":"http://p1.music.126.net/CBSYnBMVIBMgLwU-SpjmiQ==/109951165356878449.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E4%BA%8E%E8%B4%9E%20-%20%E9%A3%9E%E5%A5%94%E5%90%91%E4%BD%A0.mp3",
		"lrc":"[ar:于贞][ti:飞奔向你][by:haolu_karakal][00:00.00]飞奔向你 - 于贞[00:00.15]词：于贞[00:00.22]曲：于贞[00:00.28]编曲：陈睿凡[00:00.39]制作人：大蔚[00:00.50]吉他：大蔚[00:00.59]混音：黄磊/大蔚[00:00.74]母带：黄磊[00:00.83]封面设计：爆炒-肾花[00:01.03]配唱录音：大蔚@了子录音棚[00:01.29]出品：米苏西娱乐[00:01.50]我用四季来等你[00:05.90]天分用来梦见你[00:10.57]谁用了几千公里[00:15.41]阻止我 奔向你[00:19.74]想要 坐上那班机[00:21.88]想要 飞奔着向你[00:24.15]想唱 情歌给你听[00:26.53]想变成心脏住进你身体[00:28.95]吻你 眼睛和手臂[00:31.19]拥抱 腰肢和身躯[00:33.56]融化 血液和思绪[00:36.31]合二为一和你在一起[00:38.50]喝了吧[00:41.01]伏特加不说话[00:42.25]我却只能把情话都喝下[00:46.86]你叫我喝了吧[00:50.45]喝了它忘记[00:51.41]我没办法承受你在不同时差[00:57.68]我用四季来等你[01:02.50]天分用来梦见你[01:07.07]谁用了几千公里[01:11.82]阻止我 奔向你[01:16.57]这里下雨湿空气[01:21.28]你的城市快换季[01:25.91]重低音听不见你[01:30.88]轻声唱R&B[01:53.99]眼看入了夏 想去海边一起玩耍[01:56.00]看同一片天空 却是不同样的看法[01:58.35]想带上一束花 看你嬉笑怒骂[02:00.73]给你展示为了你我才有的变化[02:03.15]多少天 再多少天 才可以再见一面[02:05.39]早就准备好了笔墨纸砚[02:07.36]把想念变成字词句篇[02:09.30]把心心念念名字写十多万遍[02:12.65]喝了吧[02:15.15]伏特加不说话[02:16.39]我却只能把情话都喝下[02:20.94]你叫我喝了吧[02:24.56]喝了它忘记[02:25.56]我没办法承受你在不同时差[02:31.92]我用四季来等你[02:36.62]天分用来梦见你[02:41.22]谁用了几千公里[02:45.99]阻止我 奔向你[02:50.71]一起做无聊事情[02:55.39]争吵和好孩子气[03:00.05]贫穷愚蠢的年纪[03:05.06]只要我还有你[03:28.60]月明星稀无人区[03:33.09]没人出席的婚礼[03:37.73]你伸手我走向你[03:42.66]你随意 东或西\n",
	},
	{
		"name":"放肆爱",
		"singer":"于贞",
		"time":"3:10",
		"img":"http://p1.music.126.net/sQPsnBxAVE7lY4pGvAOsvg==/109951165014902806.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E4%BA%8E%E8%B4%9E%20-%20%E6%94%BE%E8%82%86%E7%88%B1.mp3",
		"lrc":"[ar:于贞][ti:放肆爱][by:][hash:6f25037c270afd0eb260e217ad48baa1][al:放肆爱][sign:][qq:][total:0][offset:0][00:00.00]放肆爱 - 于贞[00:00.89]词：于贞[00:01.48]曲：于贞[00:02.08]编曲/混音：大蔚[00:03.27]母带：Toki[00:03.86]录音棚：米苏西录音棚[00:05.35]摄影/封面：DUNN[00:06.39]出品：米苏西娱乐[00:08.11]姐妹 预备备[00:10.24]今晚 好机会[00:12.15]微醺 状态 加倍[00:15.97]音响 开最大[00:17.78]香水 用力撒[00:19.65]灯光 暗就暗吧[00:23.16]年上男或者是年下男[00:26.23]你喜欢腹肌男[00:28.14]或是1米93[00:30.71]小奶狗或者是小狼狗[00:33.80]欧美款梳油头[00:35.71]或日系小温柔[00:38.58]看上就大胆上前要他微信[00:42.33]你今晚化了妆还穿了短裙[00:46.09]舞池里MC正在带情绪[00:49.87]现在不跳舞 不行[00:53.39]男人男人 还有更多男人[00:55.07]如果他很烦人 麻烦换人换人[00:56.96]文静不好不好 不要低调低调[00:58.82]别继续闷骚[01:00.93]可爱可爱 当你摇摇摆摆[01:02.67]你的完美身材 值得骄傲起来[01:04.51]或许失恋状态 没事重新再来[01:06.39]请放肆爱[01:09.24]嘿小弟弟 还在长身体[01:12.43]金汤丽 不太适合你[01:16.91]Mojito无酒精 可口可乐加冰[01:20.11]牛奶 补钙 我买单你随意[01:23.55]小哥哥 别傻站着[01:27.55]你看我全身是汗了[01:31.23]别紧张 手别攥着[01:34.97]不会跳舞那就算了[01:39.05]看上就大胆上前要他微信[01:42.83]你今晚化了妆还穿了短裙[01:46.54]舞池里MC正在带情绪[01:50.36]现在不跳舞 不行[01:53.80]男人男人 还有更多男人[01:55.53]如果他很烦人 麻烦换人换人[01:57.43]文静不好不好 不要低调低调[01:59.30]别继续闷骚[02:01.39]可爱可爱 当你摇摇摆摆[02:03.13]你的完美身材 值得骄傲起来[02:04.96]或许失恋状态 没事重新再来[02:06.83]请放肆爱[02:08.97]我们女孩只想被爱被关怀[02:12.77]哪个女孩不受伤害不用猜[02:16.35]只要你愿意为她忍耐不再徘徊[02:20.12]她会第1个保护爱保护爱[02:21.97]哪怕头顶天塌下来[02:23.97]忘记前任忘记压力忘记伤心[02:25.37]忘记平凡忘记出身忘记看不起[02:27.86]随你跳舞随你摇晃随你开心[02:29.38]随你大笑随你拥抱别人或自己[02:31.62]束缚去掉吧 脱下外套吧[02:33.52]还有疑问吗 要什么回答[02:35.35]我看他其实在看你呀[02:37.30]小傻瓜别哑巴[02:39.51]看上就大胆上前要他微信[02:43.26]你今晚化了妆还穿了短裙[02:46.98]舞池里MC正在带情绪[02:50.82]现在不跳舞 不行[02:54.29]男人男人 还有更多男人[02:55.97]如果他很烦人 麻烦换人换人[02:57.87]文静不好不好 不要低调低调[02:59.75]别继续闷骚[03:01.85]可爱可爱 当你摇摇摆摆[03:03.53]你的完美身材 值得骄傲起来[03:05.40]或许失恋状态 没事重新再来[03:07.34]请放肆爱\n",
	},
	{
		"name":"她和她和她",
		"singer":"于贞",
		"time":"4:18",
		"img":"http://p2.music.126.net/DOwVTi9i1aEY1vsQZfe84A==/109951164768868674.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E4%BA%8E%E8%B4%9E%20-%20%E5%A5%B9%E5%92%8C%E5%A5%B9%E5%92%8C%E5%A5%B9.mp3",
		"lrc":"[ar:于贞][ti:她和她和她][by:][hash:4173eef3d34bd551f0d9abf47f651935][al:她和她和她][sign:][qq:][total:0][offset:0][00:00.18]她和她和她 - 于贞[00:00.88]词：于贞[00:00.98]曲：于贞[00:01.08]制作人：大蔚[00:01.24]编曲/混音/母带：大蔚[00:01.51]出品：米苏西娱乐[00:05.21]她也是谁的妈妈[00:11.85]女儿啊 妻子啊 朋友姐妹啊[00:17.40]她和她们的想法[00:23.30]梦想啊 自由啊 不可爱吗[00:30.36]她名字叫做Lisa[00:31.99]Lisa她想留长发[00:33.47]想了很久要是留了[00:34.95]也只能藏在手术帽下[00:36.53]用发卡大褂不怕回答[00:38.95]外面质疑强压[00:40.40]内心不安想法[00:41.89]我说oh[00:42.87]别太在意no[00:44.36]你不仅善良可爱面对专业你是Pro[00:47.14]Oh oh no就[00:48.82]往前走别往后[00:50.44]头发留不留[00:51.63]你做决定就够了[00:53.05]Let me hear you say[00:54.72]Ah oh ah oh ah oh ah oh[00:57.64]Ah oh ah oh ah oh ah oh[01:00.75]想那么多干嘛[01:02.36]你别听谁的话[01:03.95]你已经很棒啦[01:06.64]Ah oh ah oh ah oh ah oh[01:09.55]Ah oh ah oh ah oh ah oh[01:12.92]专心工作 我等你回家轰趴[01:17.48]她也是谁的妈妈[01:23.81]女儿啊 妻子啊 朋友姐妹啊[01:29.31]她和她们的想法[01:35.18]梦想啊 自由啊 不可爱吗[01:43.16]现在是Lina在庭上[01:46.01]陪审团表情严肃的打量[01:48.71]长裤运动鞋梳油头的姑娘[01:50.81]我知道 其实她很紧张[01:54.38]要穿正装最好画个淡妆[01:56.98]但她字里间行 通宵苦想[01:59.95]把案例主张全部通通摆上[02:02.81]没回应 但应该有不错走向[02:06.60]Ah oh ah oh ah oh ah oh[02:09.56]Ah oh ah oh ah oh ah oh[02:12.91]想那么多干嘛[02:14.28]你别听谁的话[02:15.77]你已经很棒啦[02:18.61]Ah oh ah oh ah oh ah oh[02:21.79]Ah oh ah oh ah oh ah oh[02:24.87]专心工作 我等你回家轰趴[02:29.39]她也是谁的妈妈[02:35.66]女儿啊 妻子啊 朋友姐妹啊[02:41.48]她和她们的想法[02:47.33]梦想啊 自由啊 不可爱吗[02:54.10]一堆人说着aiue外国话[02:57.44]Rita在旁边奋笔疾书头皮发麻[03:01.01]轻微腹痛 会场有风[03:03.21]汗流到手中 手不受控[03:05.55]气氛沉重[03:06.39]她的爸妈早就说让她回家[03:09.17]不去相亲不谈恋爱不听话[03:11.56]这次会议很重要[03:12.94]不能分心被毁掉[03:14.40]不要做一般要做更好[03:15.83]要他们看到要他们骄傲[03:18.67]Ah oh ah oh ah oh ah oh[03:21.80]Ah oh ah oh ah oh ah oh[03:24.84]想那么多干嘛[03:26.58]你别听谁的话[03:27.84]你已经很棒啦[03:30.62]Ah oh ah oh ah oh ah oh[03:33.78]Ah oh ah oh ah oh ah oh[03:36.86]专心工作 我等你回家轰趴[03:41.40]她也是谁的妈妈[03:47.83]女儿啊 妻子啊 朋友姐妹啊[03:53.40]她和她们的想法[03:59.14]梦想啊 自由啊 不可爱吗\n",
	},
	{
		"name":"黑夜彩虹",
		"singer":"于贞",
		"time":"4:18",
		"img":"http://p2.music.126.net/IsxDkvXeHmgfMZlhW0Y86Q==/109951165050774193.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E4%BA%8E%E8%B4%9E%20-%20%E9%BB%91%E5%A4%9C%E5%BD%A9%E8%99%B9.mp3",
		"lrc":"[ar:于贞][ti:黑夜彩虹][by:dongmei_karakal][00:00.00]黑夜彩虹 - 于贞[00:02.68]词：于贞[00:03.32]曲：于贞[00:03.84]编曲/混音：大蔚[00:05.16]母带：Toki[00:05.73]摄影/封面：DUNN[00:06.69]录音棚：米苏西录音棚[00:08.72]出品：米苏西娱乐[00:12.80]再长一点 黑夜再长一点[00:15.55]再长一点 黑夜再长一点[00:19.16]光太刺眼 白天危险[00:22.79]今晚就让我尽情失眠[00:25.42]再长一点 黑夜再长一点[00:28.38]再长一点 黑夜再长一点[00:31.86]我没脾气 也没运气[00:35.53]只有夜晚是我唯一[00:38.03]一 出生就被注视着[00:42.17]一双双眼睛盯着望着盼着[00:45.32]走 一岁多会走路了[00:48.75]一双双手搀扶着怕我绊着[00:51.70]出生那天下暴雨[00:53.35]算命的开始算计[00:54.92]他说我命途多舛[00:56.44]但有大机缘但有大机遇[00:58.30]我以为没人相信[00:59.76]算命的胡言乱语[01:01.25]他们信了 他们开始[01:02.95]千方百计 深谋远虑[01:04.33]说深谋远虑[01:05.18]其实不过雕虫小技[01:07.10]都喜欢机会主义 虚情假意[01:09.16]谁都 明白 不用 在意[01:10.96]我思前想后[01:11.92]绝不可以贪图享受[01:13.47]任他们因循守旧 挑肥拣瘦[01:15.69]我是 我的 精神 领袖[01:17.23]我爱做什么 就要做什么[01:19.02]谁来劝我都没有用[01:20.25]但我要做的事没有那么容易[01:21.98]努力不见得成功[01:23.21]所以我变得沉默[01:24.91]不再有话直说[01:26.23]爱上夜晚但我听见妈妈说[01:28.89]关灯[01:29.63]再长一点 黑夜再长一点[01:32.50]再长一点 黑夜再长一点[01:36.00]光太刺眼 白天危险[01:39.43]今晚就让我尽情失眠[01:42.08]再长一点 黑夜再长一点[01:45.03]再长一点 黑夜再长一点[01:48.55]我没脾气 也没运气[01:52.54]只有夜晚是我唯一[01:55.85]话题差异[01:57.36]把戏华丽[01:58.84]一期一聚叫我别在意[02:02.29]不用努力[02:03.72]他们已经[02:05.27]拉开差距[02:07.02]Why[02:08.54]知道我天赋不好[02:10.14]知道我从不着调[02:11.72]想要达到的目标[02:13.03]我还没想好[02:14.76]他们的眼光太高[02:16.39]说三道四劝我上道[02:18.02]劝我把姿态放低[02:19.45]最好低调[02:20.48]但我太执拗[02:21.79]撞墙不回头[02:24.28]身体力行证明不开口[02:27.00]就算低着头[02:28.29]就算要哀求[02:29.87]只希望黑夜里有一首歌[02:33.15]在唱着白日梦想家[02:34.71]或歌颂平常的废话[02:36.55]介意吗我跟着咿呀[02:38.14]黑夜他默认了回答[02:39.80]我看见 星星在右[02:41.86]彩虹在后[02:43.39]今晚我想自由[02:46.53]再长一点 黑夜再长一点[02:49.08]再长一点 黑夜再长一点[02:52.95]光太刺眼 白天危险[02:56.15]今晚就让我尽情失眠\n",
	},
	{
		"name":"人间自救指南",
		"singer":"于贞",
		"time":"3:50",
		"img":"http://p1.music.126.net/VMVBKKf1Xq7UM3-gtJcwOQ==/109951164531500778.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E4%BA%8E%E8%B4%9E%20-%20%E4%BA%BA%E9%97%B4%E8%87%AA%E6%95%91%E6%8C%87%E5%8D%97.mp3",
		"lrc":"[ar:于贞][ti:人间自救指南][by:][hash:71a6b707535a34d92b13e64a8a83fa73][al:][sign:][qq:][total:230556][offset:0][00:00.20]于贞 - 人间自救指南[00:00.96]作词：于贞[00:01.11]作曲：于贞[00:01.31]编曲：Success the beatmaker、大蔚[00:01.62]制作人：大蔚[00:01.77]混音：Toki[00:01.92]封面设计：DUNN[00:02.12]出品：米苏西娱乐[00:13.51]救赎不为了救赎[00:15.99]主谓宾无谓清楚[00:19.63]多长一点温度[00:22.05]得至亲好友宽恕[00:25.69]救赎不为了救赎[00:28.12]主谓宾无谓清楚[00:31.86]多长一点温度[00:34.24]得至亲好友宽恕[00:37.02]末班地铁上脸色不好看[00:39.90]想要起早发现已经过两点[00:42.92]前置镜头里毛孔像秋天[00:45.70]希望袜子早日找到另一半[00:49.04]吃完药期待可以睡得好[00:52.07]获得生存勇气绝招靠洗澡[00:54.94]烟没抽完今年又过到注脚[00:57.68]晚安前最后的火柴终于灭掉[01:02.16]救赎不为了救赎[01:04.65]主谓宾无谓清楚[01:08.29]多长一点温度[01:10.67]得至亲好友宽恕[01:14.30]救赎不为了救赎[01:16.83]主谓宾无谓清楚[01:20.52]多长一点温度[01:22.89]得至亲好友宽恕[01:25.93]送我星宿祝我长寿[01:28.70]我只想在浴缸里开支红酒[01:31.89]插一大束雪柳[01:33.54]把我造型解构[01:35.05]外面不宜久留[01:36.72]梦游到老地方[01:38.13]和小时候打羽毛球[01:40.86]载上自己绕我童年一周[01:43.13]不用太优秀别在意美丑[01:46.57]不开心就脸臭这是你自由[02:02.29]全身心看一本小说[02:03.61]院子里看一场烟火[02:05.12]清理旧上衣整理旧愁绪[02:06.68]然后烧上一把火[02:08.35]曲库更新点个香薰[02:11.34]赤脚踩草坪[02:12.20]躺成人型放松试听[02:14.49]人生可以很要命[02:18.54]像我对他失过礼[02:20.61]何必顾忌就怪异更嬉皮[02:25.07]我拿手好戏[02:32.75]你可以不同凡响[02:34.22]我原来可以不普通[02:35.68]你本来就不一样[02:37.20]我做自己怎么平庸[02:38.77]救自己功德无量[02:40.34]我喂饱灵魂再拥抱[02:41.75]原谅后开始解放[02:43.32]仁慈难道不光荣[02:45.70]我原来可以不普通[02:48.75]我做自己怎么平庸[02:52.34]喂饱灵魂再去爱[02:57.70]救赎不为了救赎[03:00.16]主谓宾无谓清楚[03:03.80]多长一点温度[03:06.22]得至亲好友宽恕[03:09.76]救赎不为了救赎[03:12.23]主谓宾无谓清楚[03:15.88]多长一点温度[03:18.52]得至亲好友宽恕[03:22.05]救赎不为了救赎[03:24.43]主谓宾无谓清楚[03:28.01]多长一点温度[03:30.44]得至亲好友宽恕[03:34.13]救赎不为了救赎[03:36.50]主谓宾无谓清楚[03:40.24]多长一点温度[03:42.72]得至亲好友宽恕\n",
	},
	{
		"name":"chill bill（Cover Rob $tone／J.Davi$／Spooks）",
		"singer":"于贞",
		"time":"2:59",
		"img":"http://p2.music.126.net/oWzx_nFsT5UiNQWzvKDWjA==/109951165975653879.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E4%BA%8E%E8%B4%9E%20-%20chill%C2%A0bill%EF%BC%88Cover%20Rob%20%24tone%20%EF%BC%8F%20J.Davi%24%20%EF%BC%8F%20Spooks%EF%BC%89.mp3",
		"lrc":"[ar:于贞][ti:chill bill (Cover Rob $tone/J.Davi$/Spooks)][by:][hash:71a6b707535a34d92b13e64a8a83fa73][al:][sign:][qq:][total:230556][offset:0][00:00.88]{Verse 1: Rob $tone}[00:36.06]Rob $tone two damn phones[00:37.75]Babylons can't crack the code[00:39.77]Used to sip out styrofoam but figured I should stick to dro (****!)[00:44.68]Backwoods overload don't like to smoke them swishers hoe[00:48.67]If you hit my liquor store it's 50 cents for single Ports[00:53.28]{Hook: Rob $tone}[00:53.61]Said she wanna roll with me and smoke up all my ****[00:57.89]I said baby just buy dutches cause you can't smoke for free[01:01.95]I got some loud but no money babe buy me a Fiji[01:06.58]She said you need a job, ***** **** a job I still get cheese[01:10.76]{Verse 2: J. Davi$}[01:11.62]Two cell phones, Mr. *********-a-thot[01:15.54]Mr. I be on that block[01:17.42]Twelve o seven **** an op[01:19.77]They hear my name they see my squad[01:22.01]Rolling **** up on the spot[01:24.26]I'm with your ***** she on my jock[01:26.43]Ain't got no time to love a thot[01:28.49]Got ****** mad my flow so hot[01:30.79]Got ****** mad my squad won't stop[01:32.93]We in the game won't take no loss[01:34.78]Im sippin water out the Voss[01:37.42]Got lean all in my ******' Sprite[01:39.87]Turnin up on ****** sight[01:41.85]Mr. Kenny Powers bouta take your girlfriend home tonight, *****[01:46.06]{Verse 3: Spooks}[01:46.79]And I'm smokin' on that widow[01:47.76]When you see it out the window[01:48.82]Got a dusty old tee[01:50.28]Lookin' bummy leave it simple[01:51.28]Growin' up I was always in the middle[01:52.83]So I gotta hold it down for my older and my little[01:54.98]And my brothas beside me so **** it we mobbin' deep[01:57.34]Always grimey, no findin' me[01:58.28]But I be in LG[02:00.02]If your lil **** boy lame ass wanna creep[02:02.25]I live by the lemon cause that ***** chose me[02:04.40]{Hook: Rob $tone}[02:04.76]Said she wanna roll with me and smoke up all my ****[02:08.94]I said baby just buy dutches cause you can't smoke for free[02:13.34]I got some loud but no money babe buy me a Fiji[02:17.51]She said you need a job, ***** **** a job I still get cheese\n",
	},
	{
		"name":"原来爱是一场自我教育",
		"singer":"于贞",
		"time":"5:56",
		"img":"http://p1.music.126.net/1_33RQ3URqcFxB-mE7FPkg==/109951163396165441.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E4%BA%8E%E8%B4%9E%20-%20%E5%8E%9F%E6%9D%A5%E7%88%B1%E6%98%AF%E4%B8%80%E5%9C%BA%E8%87%AA%E6%88%91%E6%95%99%E8%82%B2.mp3",
		"lrc":"[00:00.000] 作词 : 于贞[00:01.000] 作曲 : 于贞[00:05.54]編曲：blangger[00:07.22]詞曲：于貞[00:09.77]演唱：于貞；HAILEY[00:12.41]混音：blangger[00:13.89]（寫在前面，如果有愛的本領，[00:17.20]用盡自己最大的能量去愛人吧，[00:20.09]因爲愛[00:21.07]原來[00:21.93]是一場[00:24.23]自我教育）[00:32.59]当我们爱上世间万物，天地众人众神[00:36.66]大脑缺氧痙攣放空开始失去空存[00:40.58]思绪悶沉快普度私語的人[00:43.84]只能在我的身上[00:45.36]找我的过程[00:46.33]回答你疑问[00:48.47]比如我从来没被娇生惯养[00:52.44]也没想过要怎样刺股悬梁[00:56.31]也假装没心慌，过目不忘[01:00.54]是聪明，[01:01.12]在我的傢鄉表扬太夸张[01:12.24]梦想达成之后聲張[01:20.44]耗费太久，勉强接受了自己[01:23.74]有缺点，多愁善感，不堪一击[01:27.79]很贪玩，不大胆，不聪明，没脾氣[01:31.81]肯定了，自知之明是好东西[01:51.62]冒雨在赶我脚下的路。[01:54.58]我预感更大的雾，[01:56.67]我下注這轮盘赌[01:58.76]输家的筹码[02:00.74]全部来自你[02:02.68]努力修来的，[02:04.20]辛苦求来的领悟。[02:06.70]你在嚣张什么[02:07.87]或做对了什么[02:11.07]一个个罪证把你指责[02:13.31]太懒惰[02:15.04]还腆个脸问天神为何没有起色[02:22.71]耕耘才有收获[03:08.13]渴求的那個和那個和那個[03:12.10]抓住了哪個和哪個和哪個[03:17.24]花光了什麼還什麼能怎麼[03:32.51]能怎麼[03:36.02]能怎麼[03:57.06]避開周圍避開傾頹[03:59.05]避開追隨擊敗虛偽[04:01.54]把夢想說給贫嘴那位有罪招惹是非[04:05.82]守住堡壘骨灰一堆之後揮淚[04:09.18]忠告妳聽好[04:10.91]喧鬧不该寫進檢討[04:13.05]沒意志怪什麼環境太喧扰太吵[04:16.96]找藉口不如找辦法上下去求教[04:21.14]做不到還愛比較[04:27.09]太搞笑忠告妳聽好[04:30.03]喧鬧不该寫進檢討[04:32.78]沒意志怪什麼環境太喧扰太吵[04:36.70]找藉口不如找辦法上下求教[04:40.21]做不到就别比較[04:42.09]太搞笑[04:43.21]太搞笑[04:45.80]別被失愛困擾[04:48.70]也不為怕傷害停住腳[04:52.67]忘記傷疤再痛也要跳[04:56.54]要唱到最亮要繼續變好[05:19.20]別被失愛困擾[05:22.36]也不為 怕傷害 停住脚[05:30.05]忘記傷疤再痛也要跳[05:36.97]要唱到最亮[05:40.89]別被失愛困擾[05:44.81]別被失愛困擾\n",
	},
	{
		"name":"纯真博物馆",
		"singer":"于贞",
		"time":"4:07",
		"img":"http://p2.music.126.net/c71gWgKbWPAWGwWBi7BvKA==/109951163398000485.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E4%BA%8E%E8%B4%9E%20-%20%E7%BA%AF%E7%9C%9F%E5%8D%9A%E7%89%A9%E9%A6%86.mp3",
		"lrc":"[00:00.000] 作词 : 于贞[00:01.000] 作曲 : 于贞[00:07.804]词曲：于贞[00:21.118]混音：郭旭[00:31.580]一个闪现，我出现土耳其爱琴海边[00:34.110]雪白色阳光太刺眼晒伤了我左半边脸[00:36.855]裹头巾，从城市东面穿到西海岸[00:39.563]想遇见疯狂的爱情想要做上快船[00:42.194]一个月差两天[00:43.783]We 梅乐 for 44 times.[00:45.385]然后算算，你消失了339天[00:48.172]数时间，为了心安，[00:49.702]去了你的城市，[00:50.918]不为了什么，[00:51.969]只是为了和你坐着聊天[00:53.665]中间整整十个月零七年[00:55.789]后来吃了八年晚饭[00:57.528]积攒你抽过的4213根香烟[01:00.298]看过的电影，带过的耳环，[01:01.891]住过的旅馆，地图上你曾经出现过的地点。[01:04.865]我爱过你爱过触碰过的一切，[01:07.168]爱到将他们放进了我的《纯真博物馆》[01:10.279]他们说这是疯狂[01:11.813]对这就是我的偏执面[01:12.711][01:13.397]没人能把深情没收[01:16.435]也没人在我房间停留[01:18.844]挥不去你轻声咳嗽[01:20.831]夏天太冷，你搓搓手[01:23.546][01:23.940]Autumn ocean sunset are all cold[01:26.945]Music, dancing, perfume, good as gold.[01:29.287]None of em make me stop thinking of you[01:32.142]I need you. I wanna 生一个 baby for you[01:35.002][01:36.537]they all say that we are freaks so,[01:39.519]baby it is just a phase yo[01:41.196]Since when differences have[01:42.465]become disease.[01:43.440]oh they heard it from the state.[01:44.960]and well[01:45.638][01:46.008]Is it being average What you need? or[01:48.672]you like it twelve slices on every pancake.maybe[01:51.690]You should set alarms to your bad dreams.[01:53.530]no you are scared cuz it might sound like waves.[01:56.239]up and down it got you[01:58.166]loosen and tighten may breaks you[01:59.487]seems like even tarzen can not save who[02:01.312]been burried deep though[02:02.705]name one love that quite ambitious as we do[02:04.922]they couldn't[02:06.025]for they play it on the dance floor[02:07.400]we ain't need forever[02:09.204]we want now weighten kilo[02:10.322]crazy phsyco nuts will do[02:11.742]gotta stay weird gotta stay ill[02:12.670]tell your gang not to panic[02:13.655]my face is always this cold[02:15.110]even get dumper than ever[02:16.706]after they get that little chill[02:17.811][02:18.233]没人能把深情没收[02:20.415]也没人在我房间停留[02:20.705]也没人在我房间停留[02:23.037]挥不去你轻声咳嗽[02:25.560]夏天太冷，你搓搓手[02:28.574]Autumn ocean sunset are all cold[02:30.913]Music, dancing, perfume, good as gold.[02:33.429]None of em make me stop thinking of you[02:35.770]I need you. I wanna 生一个 baby for you[02:38.696][02:40.581]I can feel it in my veins[02:43.802]perfectly you know love is pain.[02:50.132][02:50.428]to have you back in my arm[02:54.812]so i stay always the same[02:59.027][03:01.709]I can feel it in my veins[03:05.250]perfectly you know love is pain.[03:11.182][03:11.851]to have you back in my arm[03:16.123]so i stay always the same[03:21.015][03:21.855]没人能把深情没收[03:24.529]也没人在我房间停留[03:27.157]挥不去你轻声咳嗽[03:29.600]夏天太冷，你搓搓手[03:32.495]Autumn ocean sunset are all cold[03:35.684]Music, dancing, perfume, good as gold.[03:37.334]None of em make me stop thinking of you[03:40.163]I need you. I wanna 生一个 baby for you[03:43.331]没人能把深情没收[03:45.764]也没人在我房间停留[03:48.499]挥不去你轻声咳嗽[03:50.903]夏天太冷，你搓搓手[03:53.729]Autumn ocean sunset are all cold[03:56.390]Music, dancing, perfume, good as gold.[03:58.905]None of em make me stop thinking of you[04:01.865]I need you. I wanna 生一个 baby for you\n",
	},
	/*{
		"name":"西游颁奖礼",
		"singer":"于贞",
		"time":"3:33",
		"img":"http://p1.music.126.net/LjL_mKs2478KdIAiIXuOYg==/109951163398022824.jpg",
		"src":"https://public.sn.files.1drv.com/y4mkwt9cqLRxK05Gr6feO6F9jlh77veh-A5IUsmg--siadRm4C1t05KwNW9bejZ3pTlmKgkRnManBxU09VCZNdiA6o8jNB4gfOigSUfT1JCKzc0_6CgAYGZNXje3n4oAGW0Fer90iXWiidnd-5A9Kl7hfz_p6xN0eTezFYpd2aS_9j-nP6xHEuqG7hb94b15JRbnICmGcJip9JXmdQBFjk_yj9EiLofPwZzpA6dBFJzrfE?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 于贞[00:01.000] 作曲 : $upercub/D[00:02.525]词曲：于貞[00:05.251]编曲：supercub；D[00:08.023]混音：supercub[00:10.818]演唱：于貞[00:13.528]人声混音：院长[00:16.314]监制：NIB[00:18.602]录音支持：耍家帮[00:20.843][00:21.458]我正在走的这条路[00:22.825]有羚羊，还有猛虎[00:24.257]十方妖魔八面神通，[00:25.615]三界鬼怪玉帝王母。[00:26.961]通天大道走不通，是不是白骨精过分可恶[00:29.825]个性太野蛮，[00:30.673]情商缺点儿明堂就又被收进葫芦。[00:32.894]但没找过退路，[00:34.071]温柔乡里，无数尸骨。[00:35.509]原地不动，自掘坟墓，[00:36.665]火眼金睛被红布蒙住，[00:38.002]牛鬼蛇神，趁虚而入[00:39.558]喽罗在攀附，想囫囵下肚[00:41.229]大罗神仙是请来的贵人，[00:42.478]当头一棒给我救赎。[00:44.039]我愤怒，暴脾气被金箍给束缚，我不服。[00:46.939]师傅，你为何要把我困住，72变绝不会输。[00:50.009]五指山没把我征服[00:51.678]这些我吃过的苦。你们记住[00:53.165]待我成仙成佛过后要用武力十倍诉诸。[00:55.772]闹过的天宫还没人敢遗忘[00:57.370]猴子猴孙面前讲的话要作数[00:59.647]紫金冠锁子甲全副武装还有我的如意金箍[01:02.606]我的态度 我的路[01:03.950]这九九八十一难你别来拦路[01:07.527][01:27.441]时过境迁，我已千八百岁有多。[01:29.886]纠缠不清，[01:30.443]曾经难搞的对手，现在想来巴结我。[01:33.090]他们要围绕我，[01:34.397]他们要收买我，[01:35.736]交结我，想拜把子[01:37.088]还想用利益关系缠绕我。[01:38.622]可我已不同，官拜斗战胜佛[01:41.515]你想当蛀虫，那么多笔难算账不是福是祸[01:44.085]师傅教诲才懂，修炼是很有用，[01:46.713]至少他们不敢不和你好好说话，[01:48.730]你走时也目光远送。[01:50.170]观音说我没变，还是爱惩恶扬善，[01:52.533]只是我懂的收敛，人情世故尽数看穿[01:55.228]我开始讲禅，传道授业解惑纳贤[01:57.507]徒弟们见面都毕恭毕敬说声师傅早安。[02:00.370]开始想落叶归根，花果山的地形生分[02:03.351]有个毛猴像我当年一样是个混混率性单纯，[02:06.153]身边小弟不少，英姿飒爽，风光得很，[02:08.812]对于曾经坐在山头仰天长啸那个现在的我是否失真。[02:12.279][02:33.590]谢谢魑魅魍魉没有把我活剥生吞。[02:36.264]让我得道加封，让他们看见我忠心耿耿。[02:39.176]还要感谢如来佛祖精心安排的课程[02:41.984]众生皆苦，万相本无，和尚本来要戒荤。[02:44.722]还辛苦了我的师傅唐僧，[02:46.808]一路唠叨提点我，其实见血只用一针[02:50.105]最后不能忘了我的团队[02:52.194]给予我了最大的信任。[02:53.497]我没让你们失望，山长水短终于也成功成仁。[02:57.564]\n",
	},
	{
		"name":"蹦点佛系迪",
		"singer":"于贞",
		"time":"3:45",
		"img":"http://p1.music.126.net/6Zx0xXKKqfvBOS4-2GDghw==/109951163413916948.jpg",
		"src":"https://public.sn.files.1drv.com/y4mkCVvoGtn5O8J_XhSlgz-k1LcZaSIWRE9FdgDqUkkRn9LTjefXifi4dwagIoyNzCOz1DHFspdpmy45xG0o4NPgRGt9MmkUo_XEc1vCsGCShP3FNiaMkMhH2-_jJo4E3Ou7Sb1Esy4PHUJLGM-xYxMsvK9sjBk6AsXaeajCr_af9VlZPOMnCDsYnDkHIXiTpwfTwrA67sdk1HqSkzphg_briUIFZ2YkRNUYnjajmrWyXc?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 于贞[00:00.025] 作曲 : 于贞[00:00.51]词曲录混：于贞[00:01.20]伴奏来自G-swing[00:02.71]蹦迪赛？稳起嗦？[00:05.16]不切咯，不切咯，老咯老咯[00:07.10]年轻八轻嘞莫装疯迷窍哈[00:10.11]切哪儿嘛，又切上次那个地方？那个MC和那个DJ脑壳是旷嘞。[00:15.75]带你切个新地方，不切不是中guei人哈，最多给你啤酒头加两颗枸杞。[00:22.12]板蓝根加冰算了嘛，蹦点佛系迪。[00:25.78]整妖艳点哈，快点！[00:39.16]不了不了 我没心情手举不到头顶[00:43.12]算了算了 你節奏这么简单我丢了feeling[00:46.02]好了好了 不然drop a funky beat[00:50.41]不然 不然[00:52.14]不然换一个dj上来可还行[00:54.07]Hey,boy,leave me alone,[00:55.80]i just want to[00:56.71]Have fun with my own soda pop.[00:58.34]You're not playing Romeo,[00:59.61]don't you try to.[01:00.53]How bout see my middle finger popping.[01:01.70]Hey,boy,leave me alone,[01:03.53]i just want to[01:04.24]Have fun with my own soda pop.[01:05.82]You're not playing Romeo,[01:06.99]don't you try to.[01:08.11]How bout see my middle finger popping.[01:09.82]我要舞池称霸[01:11.60]我是第一顺位火辣[01:13.37]帅哥和妹儿都爱和我耍[01:15.56]都爱和我跳恰恰[01:17.20]我要舞池称霸 我是第一顺位火辣[01:21.01]帅哥和妹儿都爱和我耍[01:22.95]都爱和我跳salsa[01:24.83]dj你在咋子哦？[01:26.41]dj你在咋子哦？[01:28.19]dj你在咋子哦？[01:31.04]咋子哦？[01:39.43]不了不了 我没心情手举不到头顶[01:43.50]算了算了 你節奏这么简单我丢了feeling[01:47.30]好了好了 不然drop a funky beat[01:50.67]不然 不然换一个dj上来可还行[01:54.38]Hey,boy,leave me alone,[01:55.85]i just want to[01:56.83]Have fun with my own soda pop.[01:58.76]You're not playing Romeo,[01:59.83]don't you try to.[02:00.69]How bout see my middle finger popping.[02:02.47]Hey,boy,leave me alone,[02:03.79]i just want to[02:04.51]Have fun with my own soda pop.[02:06.28]You're not playing Romeo,[02:07.66]don't you try to.[02:08.43]How bout see my middle finger popping.[02:24.90]dj你在咋子哦？[02:26.84]dj你在咋子哦？[02:28.62]dj你在咋子哦？[02:31.37]咋子哦？[02:37.04]我要舞池称霸[02:38.36]我是第一顺位火辣[02:40.19]帅哥和妹儿都爱和我耍[02:41.97]都爱和我跳恰恰[02:44.00]我要舞池称霸 我是第一顺位火辣[02:47.82]帅哥和妹儿都爱和我耍[02:49.60]都爱和我跳salsa[02:54.83]Hey,boy,leave me alone,[02:56.20]i just want to[02:57.02]Have fun with my own soda pop.[02:58.65]You're not playing Romeo,[02:59.97]don't you try to.[03:01.14]How bout see my middle finger popping.[03:02.36]Hey,boy,leave me alone,[03:04.20]i just want to[03:05.01]Have fun with my own soda pop.[03:06.68]You're not playing Romeo,[03:07.75]don't you try to.[03:08.66]How bout see my middle finger popping.[03:09.94]dj你在咋子哦？[03:12.08]dj你在咋子哦？[03:14.01]dj你在咋子哦？[03:16.81]咋子哦？[03:22.25]我要舞池称霸[03:23.72]我是第一顺位火辣[03:25.60]帅哥和妹儿都爱和我耍[03:27.48]都爱和我跳桑巴[03:29.98]蹦迪我是专业嘞嘛[03:31.61]是，你吃果盘都是专业嘞，嗨呀[03:42.51]瓜娃子~\n",
	}
	{
		"name":"中流",
		"singer":"于贞,鱼翅Fin",
		"time":"3:56",
		"img":"http://p2.music.126.net/QbQKmv4C3eis3CV3X2xsAg==/109951166288432432.jpg",
		"src":"https://public.sn.files.1drv.com/y4mts3AGJ7qP-514h-GzV4aSz15qsw3KE7KgBcLBHl-i15ld4ILuF08EMklnu_eJgVd2KhEOcy4jbCxct227iqz9b5KMmir3N5cAnRwUXBfOupoyHkTh9okkrFQ55_8apUEpkmb1Xs_kRUSAF8kk_oCbNHsIxvHnP4lmp-zWKSRR3IHixB6P0ez3YQJ887fGtxWiItkyiToHuHtwmHMRFNAAcmfPMlIVSRgfjC-IF5Oxhg?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 鱼翅Fin/EnjiA (魏恩佳)/鲁韵子[00:01.000] 作曲 : 鱼翅Fin/EnjiA (魏恩佳)/BINGO[00:02.000] 编曲 : BINGO[00:03.000] 制作人 : BINGO/高姗[00:22.41]于贞：[00:22.53]看着墙上的世界地图[00:26.25]想要开始新的旅途[00:30.18]开小差时间没把握住[00:33.96]来不及给领导买礼物[00:37.86]熬夜加班吃碗泡面不忘搭配果蔬生鲜[00:41.55]续约单身出租屋三十岁还月光族[00:45.51]是否突然某个瞬间你会不禁感叹时间[00:49.29]磨平锋芒的少年[00:52.23]曾经你也天真无畏啊[00:55.83]撞到了南墙还要怪导航[00:59.85]梦想总会到达的[01:01.95]乐观地相信着[01:03.81]在晚睡中挣扎[01:07.65]而立之年有些许匆忙[01:11.16]踩断了油门前路还漫长[01:15.24]算了不如躺一躺[01:17.34] kpi在前方[01:19.23]喘口气再上场[01:22.77]鱼翅 Fin：[01:26.52]三十来岁的人逐渐发现越努力越惆怅[01:30.12]好不容易越过山丘眼前却还是重峦叠嶂[01:33.93]事业家庭和爱情生生把青年逼成了斜杠[01:37.71]身体经常和心灵吵架说有困难先别上[01:41.58]岁月把想法和行动的速率都放缓内心不再充盈[01:45.39]像一趟束手无策的列车在天地间单调地轰鸣[01:49.32]焦虑如杂草疯长在日历般漫长的铁路[01:53.19]阴霾笼罩着天空像一面随时落下的雨幕[01:55.92]于贞：[01:56.10]曾经你也天真无畏啊[01:59.16]撞到了南墙还要怪导航[02:03.21]梦想总会到达的[02:05.31]乐观地相信着[02:07.20]在晚睡中挣扎[02:11.01]而立之年有些许匆忙[02:14.52]踩断了油门前路还漫长[02:18.66]算了不如躺一躺[02:20.70] kpi在前方[02:22.59]喘口气再上场[02:29.40]藏在桌角早堆积厚的梦[02:33.15]自由执着[02:37.08]当照进现实却虚化成空[02:39.60]鱼翅 Fin：[02:43.08]棱角分明的人慢慢被磨平学会了收起喜怒[02:46.86]日复一日耗尽向上的动力依然难穷千里目[02:50.70]生命是一场持续的动荡人到中流能否顶住[02:54.57]疼痛原来是成熟的重量走出困境才能领悟[02:58.50]疲惫的列车驶向深海打捞渐沉的满月[03:02.25]直到被水包围才发现比海更深的是胆怯[03:06.12]浪花打湿了我的帽檐身边有鱼儿游经[03:09.96]岸边人人都追捧少年可我已云淡风轻[03:12.60]于贞/鱼翅 Fin：[03:12.93]曾经你也天真无畏啊[03:16.02]撞到了南墙还要怪导航[03:20.07]生活像是单行道[03:22.14]幸好头发不少[03:24.03]往前一步就好[03:27.81]而立之年有些许迷茫[03:31.32]穿过风浪才能找到光亮[03:35.43]还好没历尽沧桑[03:37.59]柔软仍在心脏[03:39.42]喘口气再上场[03:40.755] 和声编写 : BINGO[03:42.468] 人声编辑 : BINGO/官硕[03:44.181] 混音 : 官硕[03:45.894] 母带 : 官硕[03:47.607] 录音师 : Mason Lu[03:49.320] 录音棚 : MOTIF AUDIO[03:51.033] 音乐监制 : 陈红[03:52.746] 制作统筹 : 胡霓[03:54.459] 音乐发行 : Amber 吴哲宇[03:56.172] 出品 : 哔哩哔哩音乐制作中心\n",
	},*/
	{
		"name":"第87次减肥失败",
		"singer":"陈近南,W8VES",
		"time":"3:10",
		"img":"http://p1.music.126.net/55yDgTw68V0LYSMvE61h1Q==/109951165787273805.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E7%AC%AC87%E6%AC%A1%E5%87%8F%E8%82%A5%E5%A4%B1%E8%B4%A5-%E9%99%88%E8%BF%91%E5%8D%97.mp3",
		"lrc":"[ar:W8VES、陈近南][ti:第87次减肥失败][by:][hash:bb474b0cc41d8e3155bb6aba5182f18a][al:][sign:][qq:][total:190223][offset:0][00:00.00]W8VES、陈近南 - 第87次减肥失败[00:00.76]作词：陈近南、EnjiA[00:00.96]作曲：陈近南、BINGO[00:01.17]编曲：BINGO[00:01.27]和声编写：BINGO[00:01.42]制作人：BINGO[00:01.57]录音师：斯琴朝格图[00:01.82]录音室：456Studio[00:01.92]混音师：官硕[00:02.13]母带工程师：官硕[00:20.11]Ah ah昨晚我睡得早[00:21.92]马上准备出发[00:22.91]不需要谁陪着跑[00:24.19]Homie男友太渣了[00:25.44]对错都要怪她胖[00:26.55]这种恋爱谈来谈去[00:27.61]也是没个好[00:28.76]我把零食藏进抽屉[00:30.23]接下来别休息[00:31.40]跟我一起熬过这个周期[00:33.35]才不管它今天周几[00:34.81]仰卧起爬楼梯[00:35.92]瘦下来买个小码的球衣[00:37.62]再见了我最爱的可乐糯米鸡[00:39.63]章鱼小丸子[00:40.40]红豆配芋圆和牛奶冰[00:42.08]糖炒板栗草莓蛋糕[00:43.24]芒果冰淇淋[00:44.15]味道都一级棒[00:45.03]但体重绝对要小心[00:46.55]Baby骑个单车[00:47.65]放松心情去换换脑袋[00:49.32]生活的压力煎熬太大[00:50.59]折磨 all day all night[00:51.65]对于减肥的信心[00:52.83]先不急着表态[00:53.84]虽然没纤瘦迷人[00:55.00]至少可爱得搞怪[00:56.26]I'm not afraid 从不喊停[00:58.79]每次跳跃用尽全力[01:01.94]脉搏跳动呼吸[01:03.91]热血汹涌的身体[01:05.65]Take a breath 一鼓作气[01:07.77]打破记录里程累计[01:12.07]全新的自己[01:14.20]跟我一起 run run run[01:16.28]I won't let you down down down[01:18.63]这一分钟并不 漫长[01:20.77]撑过去就有新的 绽放[01:23.17]跟我一起 run run run[01:25.43]I won't let you down down down[01:27.65]你流下汗水的 模样[01:29.92]代表新征程的 启航[01:33.63]要活得漂亮 撕掉伪装[01:36.21]心的方向[01:39.19]筑成了一道道坚固围墙[01:42.63]要恣意绽放[01:44.04]不去在意 旁人目光[01:48.35]你拥有与生俱来光芒[01:51.04]这一次管住嘴巴[01:52.12]绝对能美梦成真[01:53.23]又一个瘦身计划[01:54.29]在脑海里面萌生[01:55.51]但也会量力而行[01:56.67]难道要拼了小命[01:57.73]人生制定个计划[01:58.74]只是为了自己高兴[02:00.08]Ok 我脾气好一点[02:01.23]吃得再少一点[02:02.14]睡得比别人早一点[02:03.20]搭配营养精挑细选[02:04.44]从来不会小心眼[02:05.43]那这样才能跑更远[02:06.74]如果还是不讨喜[02:07.75]那我再学的婊一点[02:08.81]I'm not afraid 从不喊停[02:11.23]每次跳跃用尽全力[02:14.32]脉搏跳动呼吸[02:16.29]热血汹涌的身体[02:18.11]Take a breath 一鼓作气[02:20.27]打破记录里程累计[02:24.46]全新的自己[02:26.52]跟我一起 run run run[02:28.64]I won't let you down down down[02:31.04]这一分钟并不 漫长[02:33.26]撑过去就有新的 绽放[02:35.45]跟我一起 run run run[02:37.73]I won't let you down down down[02:40.06]你流下汗水的 模样[02:42.39]代表新征程的 启航[02:44.93]趁现在 动起来[02:47.22]Girl 坚持住自律[02:49.49]画未来 的轨迹[02:51.73]Boy 保持着自信[02:54.01]趁现在 动起来[02:56.23]Girl 坚持住自律[02:58.47]画未来 的轨迹[03:00.74]Boy 保持着自信\n",
	},
	{
		"name":"偷星",
		"singer":"陈近南",
		"time":"4:03",
		"img":"http://imge.kugou.com/stdmusic/150/20210426/20210426144704874172.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E5%81%B7%E6%98%9F-%E9%99%88%E8%BF%91%E5%8D%97.mp3",
		"lrc":"[ar:陈近南][ti:偷星][by:][hash:4d17818a9317a0e3338c52b538b0e6f6][al:][sign:][qq:][total:243905][offset:0][00:00.00]陈近南 - 偷星[00:00.33]作词：陈近南[00:00.48]作曲：陈近南[00:00.63]编曲：卡斯@ABUCKS[00:00.78]制作人：卡斯@ABUCKS[00:00.99]配唱制作人：恩德Andy18@ABUCKS[00:01.19]录音师：斯琴朝格图[00:01.44]录音室：456Studio[00:01.59]和声：石芮桉[00:01.70]混音师：恩德Andy18@ABUCKS[00:01.90]母带工程师：杨云翔@ABUCKS[00:16.39]Baby why you control my mood[00:18.78]Why I feel your voice like juice[00:20.50]为什么我会失控[00:22.43]Kiss me hard before I go[00:24.65]星空被你偷走[00:26.48]月亮被我占有[00:28.33]你也不用觉得不安全[00:30.51]我为你修补心的漏洞[00:32.96]我发誓你有放电[00:34.53]映着粉红色的光线[00:36.51]扑朔迷离 你的气息[00:38.44]像一张超复古的唱片[00:40.51]I don't need drink 有你[00:42.54]帮我把灵感勾起[00:44.42]求你fall in love with me[00:46.43]你的手是最好的项链[00:48.48]我早就做好了准备低头[00:50.56]不用再跪地求神灵庇佑[00:52.43]把情话写在了雪地上再置身于海浪[00:55.01]陷入进热带气候[00:56.59]你又美味又很可口[00:58.41]我不会轻易放走you better know[01:00.39]感觉不会削减 你唯一的缺点[01:02.52]就是装作听不懂我love song[01:04.32]明月将至 光辉灿烂[01:06.50]我提前准备好两个方案[01:08.33]职业装高跟鞋或双马尾[01:10.46]那种清纯又可人的装扮[01:12.46]你要我害羞或放轻松[01:14.43]晚来的风把头发吹动[01:16.46]你的眼睛映照着霓虹[01:18.53]我永远逃不出这个迷宫[01:20.61]你很温柔但是在你面前[01:21.88]我也装得并不差[01:23.25]趁着夜深喝醉[01:23.96]必须跟你说胡话[01:25.28]我们都疲惫厌倦[01:26.09]周围人心多复杂[01:27.04]一直keep going保持住同样步伐[01:29.08]你的喜怒哀乐让我思绪犹如泉涌[01:31.30]每次挑逗欲拒还迎总是我先脸红[01:33.18]当够了play girl他们夸我清醒风流[01:35.26]但你出现我就只想做你的小甜筒[01:36.60]Baby why you control my mood[01:38.69]Why I feel your voice like juice[01:40.52]为什么我会失控[01:42.65]Kiss me hard before I go[01:44.63]星空被你偷走[01:46.46]月亮被我占有[01:48.48]你也不用觉得不安全[01:50.51]我为你修补心的漏洞[01:52.48]Baby why you control my mood[01:54.56]Why I feel your voice like juice[01:56.48]为什么我会失控[01:58.34]Kiss me hard before I go[02:00.53]星空被你偷走[02:02.45]月亮被我占有[02:04.48]你也不用觉得不安全[02:06.50]我为你修补心的漏洞[02:08.40]只要你在 我就依赖[02:10.44]你是我每首情歌的灵感[02:12.51]你很奇怪 无可替代[02:14.44]整颗心都会被你填满[02:16.52]我像个乞丐 你不一样[02:18.44]傲视阔步的迈向前方[02:20.52]就让我贴近你亲吻你[02:22.10]你的身体 像蛋糕一样甜香[02:24.51]你的呼吸 让空间变狭小拥挤[02:28.42]只有你对我脾气[02:30.33]Now baby let us do it[02:33.45]欲望深不见底 心跳同样频率[02:37.46]我从没这么确定[02:38.98]要为你偷走星星[02:40.95]天空的颜色形同[02:42.78]墨水一样的浓稠[02:44.70]飞机轰鸣声掩盖住[02:46.93]所有情绪洪流[02:48.96]为贴近皓月当空[02:50.78]想登上玉宇琼楼[02:52.71]机关百般的算计[02:54.68]又跌进你的瞳眸[02:56.65]没曾想 谁能够让我改变[02:58.83]温柔都时刻在线[03:00.45]也坑蒙拐骗过 讲脏话不用排练[03:02.83]即兴发挥到顶点[03:04.56]千锤百炼的心脏为你甜腻[03:06.89]热情到无法冷冽[03:08.60]规划好航线却又为你偏离[03:10.88]爱和怨都很真切[03:12.36]Baby why you control my mood[03:14.43]Why I feel your voice like juice[03:16.47]为什么我会失控[03:18.41]Kiss me hard before I go[03:20.38]星空被你偷走[03:22.51]月亮被我占有[03:24.48]你也不用觉得不安全[03:26.52]我为你修补心的漏洞[03:28.19]Baby why you control my mood[03:30.42]Why I feel your voice like juice[03:32.49]为什么我会失控[03:34.52]Kiss me hard before I go[03:36.45]星空被你偷走[03:38.52]月亮被我占有[03:40.50]你也不用觉得不安全[03:42.53]我为你修补心的漏洞[03:44.40]心血来潮你夸我像颗水蜜桃[03:48.30]鲜嫩多汁美妙又独特的味道[03:52.29]时间不多天空眼看就要破晓[03:56.49]快停止颠倒 看城市喧闹\n",
	},
	{
		"name":"名扬四海",
		"singer":"陈近南",
		"time":"4:03",
		"img":"http://p2.music.126.net/Fc9HawQLhDm1vX6kQhA2iw==/109951165490843053.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E5%90%8D%E6%89%AC%E5%9B%9B%E6%B5%B7-%E9%99%88%E8%BF%91%E5%8D%97.mp3",
		"lrc":"[ar:陈近南][ti:名扬四海][by:shixiang_karakal][00:00.00]名扬四海 - 陈近南[00:01.56]词：谢宇伦[00:02.29]曲：谢宇伦[00:02.96]原唱：谢宇伦[00:03.84]出品：新鲜制造[00:15.88]闪光灯定格住时光[00:23.28]我站在最远的地方[00:30.67]掩盖住我表情夸张[00:37.04]这样其实也没什么不好[00:45.40]我并不起眼的模样[00:52.97]从来不渴望你欣赏[01:00.36]请别炫耀你的善良[01:06.52]我不是你放置同情的地方[01:13.42]等到名扬四海那一天[01:17.59]聚光灯为我留出空间[01:21.23]我卖力唱到声嘶力竭[01:24.35]博你笑脸[01:28.32]等到名扬四海那一天[01:32.44]是否能够抓住你视线[01:36.00]你看我有多体面[01:38.89]请别敷衍[01:48.12]其实我生来就这样[01:55.64]丢不掉仅有的倔强[02:02.93]连我都觉得很荒唐[02:09.25]总学不会 他们成功模样[02:16.35]等到名扬四海那一天[02:20.40]聚光灯为我留出空间[02:24.10]我卖力唱到声嘶力竭[02:27.14]博你笑脸[02:31.00]等到名扬四海那一天[02:35.17]是否能够抓住你视线[02:38.89]你看我有多体面[02:41.89]请别敷衍[03:15.68]等到名扬四海那一天[03:19.21]聚光灯为我留出空间[03:22.86]我卖力唱到声嘶力竭[03:26.28]博你笑脸[03:29.69]就算名扬四海那一天[03:34.19]也换不回错过的时间[03:37.83]万众瞩目的瞬间[03:40.71]忽然发现[03:44.98]其实什么都没改变[03:49.14]自我可怜\n",
	},
	{
		"name":"他不是星辰大海",
		"singer":"陈近南",
		"time":"3:38",
		"img":"http://p2.music.126.net/gcRYTN9DVM_FiDm1plII4w==/109951166358928741.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E4%BB%96%E4%B8%8D%E6%98%AF%E6%98%9F%E8%BE%B0%E5%A4%A7%E6%B5%B7.mp3",
		"lrc":"[ar:陈近南][ti:他不是星辰大海][by:zhaoxin_karakal][00:00.00]他不是星辰大海 (Live) (改编自星辰大海) - 陈近南[00:01.76]中文词：瞿子谦/刘涛/温莨[00:02.69]原词曲：瞿子谦/刘涛[00:03.34]改编词：陈近南[00:03.90]改编曲：陈近南[00:04.46]编曲：恩德Andy18@ABUCKS[00:04.92]制作人：恩德Andy18@ABUCKS[00:05.48]配唱制作人：恩德Andy18@ABUCKS[00:06.23]吉他：杨云翔@ABUCKS[00:06.78]和声编写：石芮桉[00:07.44]音乐总监：徐林[00:07.99]Program：Philip Au[00:08.27]混音：王路遥混音团队/恩德Andy18@ABUCKS[00:09.48]母带：杨云翔@ABUCKS[00:10.04]音频编辑：丁晨泽[00:10.69]录音师：依兴驰@ABUCKS[00:11.34]录音棚：A-BUCKS MUSIC LAB[00:11.90]OP：好乐无荒[00:12.36]SP：索尼音乐版权代理（北京）有限公司[00:13.79]我想从噩梦醒来 他不是星辰大海[00:20.61]独自盛开[00:25.35]也许我才是星海 美妙独特的存在[00:36.73]Hi 时间不早了怎么还没睡呢[00:39.23]遗憾的事就在那[00:40.64]不会因失眠而打对折[00:42.13]让我猜猜[00:42.81]是职场冷酷或是爱而未得[00:44.56]算了不问了[00:45.76]反正我们早就清楚这规则[00:47.61]上次跟你提过的男孩[00:49.29]他说我哪都很好[00:50.75]但女孩子要瘦一点[00:52.18]想减肥一定趁早[00:53.68]他可以跟我约会[00:55.11]但恋爱还要待定[00:56.54]如果我一直这么胖他可能没有耐性[00:59.67]他逐渐冷淡我也减少分享欲[01:02.70]可当他约我见面心里还是真想去[01:05.71]以前他夸我活泼[01:06.96]后来嫌我话多聒噪[01:08.42]也试图改变我一切[01:09.86]高高在上地说教[01:11.37]你性格脾气不好 口红颜色也太深[01:14.36]不要质疑我很爱你[01:15.66]我只喜欢你的率真[01:17.00]我陷入各种情绪为他放弃大的底牌[01:20.02]他却让我觉得[01:20.81]我是这世界最差的女孩[01:21.39]从噩梦醒来 他不是星辰大海[01:27.87]不用依赖谁的喝彩我要独自盛开[01:33.20]我才是星海 美妙独特的存在[01:39.40]总有热爱满怀期待 要对自己崇拜[01:46.06]也许你好奇后来我们相处的情境[01:48.90]我离开了他回归属于自己的平静[01:51.88]不是我错过了他 而是他低估了我[01:54.81]像我这种人天生就该是灿烂的花火[01:57.75]我有个朋友他说爱情就像过眼云烟[02:00.60]劝我用心搞事业[02:01.76]才能奔向更远明天[02:03.44]我想那些恋爱失败经历真的太正常[02:06.00]那些男孩挑三拣四以为自己是谁[02:08.15]Jackson Wang[02:09.17]妈妈鼓励我最棒 迟早有个好对象[02:12.19]爸爸说经过最多磨砺的珍珠[02:14.16]一定最亮[02:15.06]他们不图我扬名立万或是学富五车[02:17.59]只想我快乐[02:18.46]把我养大不是为受苦的[02:20.68]相信我 时光匆匆这伤疤总会愈合[02:23.69]离开他不算遗憾而是及时解脱[02:26.52]相信你自己值得 勇敢面对这hard life[02:29.53]你的美胜过了星辰力量强过了大海[02:31.04]从噩梦醒来 他不是星辰大海[02:37.26]不用依赖谁的喝彩你要独自盛开[02:42.66]你才是星海 美妙独特的存在[02:48.84]总有热爱满怀期待要对自己崇拜[02:54.31]从噩梦醒来 他不是星辰大海[03:00.42]不用依赖谁的喝彩你要独自盛开[03:05.85]你才是星海 美妙独特的存在[03:11.93]总有热爱满怀期待要对自己崇拜[03:19.35]你是大海也是恒星[03:24.82]我支持你所有决定\n",
	},
	{
		"name":"New blood DBC 2019 cypher",
		"singer":"杀手耗,Polk,陈近南",
		"time":"7:52",
		"img":"http://p1.music.126.net/fXXuYJxGK5s8ZZr9lWb0fQ==/109951164135245127.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E6%9D%80%E6%89%8B%E8%80%97%2CPolk%2C%E9%99%88%E8%BF%91%E5%8D%97%20-%20New%20blood%20DBC%202019%20cypher.mp3",
		"lrc":"[00:00.000] 作词 : cypher[00:00.529] 作曲 : cypher[00:01.58]New blood[00:02.15]DBC 2019 Cypher[00:03.33][00:04.51]KILLER:[00:06.08]不需要自我介绍[00:07.71]KILLER hao是个猎豹[00:09.32]fake rapper[00:10.46]看见了我全都像吃了泻药[00:12.51]everybody做好准备[00:14.14]请把音响加大分贝[00:15.86]平时不显山不漏水[00:17.35]因为东北在韬光养晦[00:19.03]xu~ WOW！[00:20.28]带着我的东北兄弟来并肩战斗[00:23.50]2019make money把钱全赚够[00:26.81]我出现都 wow wow wow O OMG[00:30.17]你的作品？NO NO NO NO NO太差[00:33.27]随便的碾压你让你们看清楚什么叫变态[00:35.67]24小时 保持着状态[00:37.36]女孩想和我谈一场恋爱[00:39.00]她们的目光欻欻欻[00:40.54]她们的嘴巴blah blah blah[00:42.22]哥们没那么多耐心来听你说[00:43.81]惹急我就会被piapia[00:45.57]SUCK MC 你们继续黑[00:47.14]我们跑的快 你没力气追[00:48.72]爱好GTA 代表DBC[00:50.30]今年东北队 一定会起飞[00:51.93]你们的词句菜[00:53.51]一句比你十句帅[00:55.04]看清楚东北gang[00:57.10]这才是实力派[00:57.86][00:58.12]Polk：[00:58.33]dbc ebk kill the beat you ok？[01:01.29]在你们脸上都写个s13 装13的会流下泪[01:04.29]都是说着大话的mc到处都是冠军[01:07.81]一只手掐住你脖子另一只手让迷雾散去[01:10.95]比狂野男孩还狂在你家小区拿着喇叭[01:14.47]我嘴里都是脏话 不会说脏话的只有哑巴[01:17.57]看哥们赚赚赚money 赚赚赚money[01:21.17]money赚赚赚 XXX射击射击[01:24.51]天使很高傲 但是恶魔并不畏惧[01:27.81]正义的联盟 对抗邪恶们的入侵[01:31.06]搞点beef出了炒作的角色rapper都像土b[01:33.87]我们用头脑和血液战无不胜的第八路军[01:36.61][01:36.83]陈近南:[01:37.52]什么叫做实力派也许你到现在还没有看清[01:40.17]他们都崇拜我多厉害那些bitch说唱像是念经[01:43.43]没人愿意听 也没人看得到[01:45.36]随便怎么蹦鞑怎么聒噪怎么闹[01:46.86]反正用尽毕生绝学也没人对的出我的暗号[01:49.81]SOso~[01:50.47]so come on man快点打住[01:51.98]谁才是Dbc的参天大树[01:53.56]成天说自己酷 浑身都是tattoo[01:55.30]三流的小b们请问你到底哪酷?[01:56.84]装逼的本领刚休弃[01:58.38]把赚来的钞票藏抽屉[02:00.09]跟年轻rapper装忧郁[02:01.62]鱼鳖烂虾都在当0G[02:03.03][02:03.23]书生:[02:03.64]打开日程实在欠了好多歌曲[02:05.06]db又是杀生小心被我波及[02:06.65]想要过来领教 兄弟几个刷街[02:08.26]swag dab 爆掉你的挡风玻璃[02:09.81]bling bling的技巧典型 各色各样的有色眼镜[02:13.06]无时不刻都把你盯紧 要命……[02:16.29]每天都产出五彩缤纷的hot flow like bubble[02:19.60]创作的时候心神合一 灭掉手中的marlboro[02:22.86]那些的垃圾歌曲我从来不会选择去听[02:26.16]hold on dont play disgusting.[02:28.38][02:28.64]摆头杨:[02:30.08]I try a charming pose[02:31.91]开我的卡丁车[02:33.50]押几百个平仄[02:35.13]音乐可别停了[02:36.72]隔壁叫来警车[02:38.42]东北的多弗朗明哥[02:40.03]I know so 帅[02:41.67]随便的rap[02:43.19]小case listen my name[02:44.41]讨伐出征东北队[02:46.24]脚下古城凶鬼退[02:47.73]来来回回打你搭配顶级装备[02:49.61]赶走我的疲惫[02:51.20]虚荣妹不理会[02:52.78]别问我今年几岁[02:54.65]我跟你天生一对[02:55.98][02:56.29]赵宇杰SpicyBoY：[02:56.54]ey This is SpicyBoy[02:57.96]开始流窜 在节奏中遛弯[02:59.08]从来不会偷懒[03:00.03]DBC YOUNG BUG 风水轮流转[03:01.55]my rap like 锦罗玉衣[03:03.19]韵脚flow是我的绫罗绸缎[03:05.24]力量聚积超出了预期[03:06.78]笑看他们还在临摹流汗[03:08.42]wu 到底什么叫做酷[03:09.94]看着我跟着我迈着我的步[03:11.60]带你感受我的态度 我的温度[03:13.59]让他们全部 自愧不如[03:14.96]dururururu 我的新型机枪[03:16.55]充满创造力是天性使然[03:18.13]我的歌词不是心灵鸡汤[03:19.73]当然更不是装逼指南[03:21.40]这首歌让他们全部跪着听完[03:22.62]直到背部痉挛[03:23.55]Northside的贵族兵团[03:24.49]让他们学不会都心烦 把fake清完[03:26.14]埋进坟墓做成废物拼盘 配个金蚕[03:27.88]fake就像电视购物 做不到那言之有物[03:29.53]妄想被天使守护 唱到自己都神智不清[03:31.08]他们渴望一飞冲天而我一步一个脚印[03:33.00]坚持走路 掀起northside说唱文艺复兴[03:34.09][03:34.35]Philo 阿哲:[03:34.60]无形的enemy 讽东北振兴路[03:37.47]觉得本土不行又不努力的愤青怒[03:40.50]用这首cypher 告诉你dbc 阵容多么酷[03:43.73]看我扛起大东北的大旗帜用口水擦亮你的目[03:48.21]Fxxk that fxxk that[03:49.43]看我rock that rock that[03:51.04]拿起笔来画在画在[03:52.64]你的booty fxxk that fxxk that[03:54.70]收回你的虚假hiphop[03:56.13]做真正王者叫我陛下[03:57.73]许多问题被我解决时刻他们看到我的脸庞才知道我如此强大[04:00.83]Oh my party all night[04:02.44]Shake your body alright[04:04.10]引领方向的mr right[04:05.68]万人之上握紧的麦[04:07.19]走出这流量的怪圈[04:08.65]都在玩乐心不在焉[04:10.30]在前方开路我率先[04:11.86]关东旗帜立说唱圈[04:13.86][04:15.30]MAKAI：[04:17.58]我们要我们要we so lit[04:19.17]我马上来了不要着急[04:20.76]面对你我还是看不起[04:22.17]赢或是输不是选择题[04:24.04]657082792是我的微信[04:26.87]和你们形成鲜明的对比[04:28.56]Old school的功底被老子废弃[04:30.15]老子的进步飞快emm[04:31.74]夺命的牛仔穿背带裤[04:33.38]Vvs闪耀搬的moon[04:35.02]要找我合作我说不[04:36.60]出门就做飞机[04:37.80]我是你的唯一[04:38.63]Baby yeah[04:39.46]早已脱离轨迹[04:40.35]奥利给不是特别给力[04:41.90]Ice挂在身上融化成了水滴[04:44.76]制作高级的music shit[04:46.34]火焰烧的更加烈[04:48.06]排队找我要几个月[04:49.65]汹汹的大火不会灭[04:51.30]面对你不屑我说切[04:52.96]0431是我的city[04:54.53]全世界最new的fire band[04:55.48][04:55.79]恶梦Yk：[04:56.54]从来不会让人随意代替我的位置[04:58.27]意大利的货身边带Singapore的妹子[04:59.86]不同花式搭讪还有最豪华的配置[05:01.35]当然Yk站的高度你可能要爬一辈子[05:03.15]PLAY HARD SUPER GANG 灭了软蛋[05:04.48]我用非法 武力般让你胆颤[05:06.22]加我WeChat 不停烦叫我缓慢[05:07.86]想要 feat me 老子每句回复 红色感叹[05:09.57]放心 她们还是爱着我的[05:11.30]黄金 男孩永远不会错的[05:12.78]将近 达到Stephen curry[05:14.51]我是别人家的孩子 让你永远妒忌[05:16.14]不断开始侵入你的内分泌[05:17.68]Show me what u got 像我Tiffany[05:19.22]根本不需要那些个fake homie[05:20.71]Say Sorry 就以为能围着你[05:23.03]做到了number one[05:24.67]无敌的superman[05:26.27]强大的东北gang[05:27.81]随便你来挑战[05:29.51]不用你来喜欢[05:31.15]把你们都击散[05:32.81]其他的不去管[05:34.09]老子扬名又立万[05:35.69][05:36.30][05:48.00]HopeK1ng：[05:48.25]当你再听到我出现的信号 技术过硬的技巧OHH[05:50.42]女孩的心跳都加了速[05:51.86]尖叫的声音再高八度 oops[05:53.70]当我出现 当你遇到 帅气扑面 在你预料[05:56.48]就像是电 影片的预告 少见 的K1NG STYLE 哦~[05:59.51]毫无预兆 WHO 选择的这条 路~[06:02.14]变着花样 热的发烫的金子 马上 就快要藏不住[06:04.92]年轻的BRO 仿佛 纯金的gold[06:07.55]没原因的DOPE 吸引 甜心的girl[06:10.42]肩并肩获得了太多 （认可）坚硬没怠惰 （振作）[06:12.27]掌握着麦克 天性的快乐 坚定的迈过 （剩货）[06:16.65]难听的SHOW 衬托hope 全新的FLOW[06:19.17]去往更高的地方 去抢更多人盯的肉[06:21.54][06:21.74][06:21.95]武生：[06:22.22]DB City继续接力做到everybody know[06:25.39]不断改造再把奶酪分给my bro[06:28.33]眼神就是暗号旁人猜也猜不透[06:31.10]哥几个要拧成一股绳偶尔也爱独秀[06:33.73]that dope[06:34.86]别为了慕名而讨好[06:36.32]伪善者不停地逃跑[06:37.70]为混圈来碰肩的姓名早已被识破后注明在草稿[06:40.70]渺小到壮大逼迫那些奇葩切腹[06:43.33]see how i switching the flow 移花接木[06:46.46]区分开兄弟和利益[06:47.96]这重镇永不会密闭[06:49.40]丢掉那听闻的记忆[06:50.84]风格都中西合璧ye[06:52.29]随时欢迎过来了解下my hometown 近况[06:55.11]改变一些偏见和固有的负面印象[06:58.04]虽然总有少数的人正抹黑它[07:00.57]带你重新认识这里从帅府到圣索菲亚[07:03.40]逐步注入新鲜血液万众瞩目[07:06.94]糊涂或踌躇与我们格格不入[07:08.38][07:08.85]KILLER：[07:09.46]HOMIE这是MDBRO来自奉天[07:12.45]组建underground最华丽的宫殿[07:15.23]我们代表东北一直炸到中原[07:18.61]BRO 我开法拉利你开丰田[07:20.73]Mukdenbro 没人敢说NO[07:23.66]KILLER BZE 欧瑞 KPSOUL[07:26.65]整个周围没人比我玩的dope[07:29.48]闭上臭嘴惹急我你会被揍[07:32.68]井底之蛙永远只能活在井底[07:35.24]说做文化其实都是在想如何盈利[07:37.96]我放下桀骜只想把大家都凝聚[07:41.00]你称王称霸可惜没有show请你[07:43.86]母带：一号线/Buster[07:44.17]Mix by：一号线/Buster\n",
	},
	/*{
		"name":"明明很在意",
		"singer":"杨明,陈近南",
		"time":"3:34",
		"img":"http://p1.music.126.net/VLuuLRqebD5ntn34v6lIKg==/109951165925420239.jpg",
		"src":"https://public.sn.files.1drv.com/y4mj0v0_xvz88_QeHw9TErS9lydzXCV8D6M6l4XAXNBl95zQ3K2BPvUUGaigOgVwjUEdTy3t_PXz4Qqv-Uzez7aE12npagXHii9JyppHSLvK9fflzK7QBg38WCZRgdgfZTPyywK_C-LmKihYtP8CD6Ocj7wy-aQ1rMW9JAP0l5RUM62PRTbrTr85QC0Cwvji5G_hviD81eD6IjRyHx7qE3ORdfoPpytmGeSJNSIfDyJL3o?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 杨明/陈近南[00:01.000] 作曲 : In-Soul[00:08.194]作曲：杨明[00:09.194]编曲：N-soul[00:11.944]混音：李志强[00:14.194]让我多了解你一点[00:16.694]给我更多的时间[00:17.944]让人格底色都重叠[00:19.692]彼此都能逃出梦魇[00:21.695]让我多了解你一点[00:23.445]不屑无谓的誓言[00:25.445]定格在纯色的胶片[00:27.193]这城市为你而失眠[00:28.945]你的青春给了她挥霍[00:30.944]陪她看抖音或刷微博[00:32.945]不同性格巧妙搭配着[00:34.693]逃不开世界的大规则[00:36.195]I know 不同的环境[00:38.444]没有贴心的交际[00:40.195]回头看一路风景[00:41.946]只剩自己的努力[00:43.946]你感受不到她的爱情感受不到她的用心[00:47.446]嘴上说着不是败笔[00:48.696]情话有多么多么的动听[00:51.195]她说她从来不在乎以后[00:53.445]只想要此刻的虚荣[00:54.947]也说过你是她的宇宙 无论你是富贵或者贫穷[00:58.693]让我多了解你一点（让你多了解我一点）[01:02.194]给我更多时间（给你更多的时间）[01:06.194]让人格底色都重叠（人格底色都重叠）[01:09.694]彼此都能逃出梦魇（那就去逃出梦魇）[01:13.444]让我了解你一点（了解我一点）[01:17.194]不屑无谓的誓言（那些无谓的誓言）[01:20.694]定格在纯色胶片（纯色的胶片）[01:24.445]这城市都为你失眠（为你而失眠）[01:28.195]她喜欢偏执的风和温润的雨[01:30.695]柔软的被窝和最好的你[01:32.445]不想交白卷就放过自己[01:34.195]所以适可而止的停下了笔[01:36.196]这感觉多美妙[01:37.444]彼此都体面的微笑[01:39.196]纠缠着小细节的对质[01:40.696]模糊了原告和被告[01:42.694]就当她是年少时候苦练也依然投不进的篮筐[01:46.946]或者她是冬天的霜雪无法陪你在四季如春的南方[01:50.446]生活总会面目全非你爱的姑娘不再画着淡妆[01:54.197]你知道快乐实在太难所以祝她四季安康[01:57.695]让我多了解你一点（让你多了解我一点）[02:01.197]给我更多的时间（给你更多的时间）[02:05.195]让人格底色都重叠（人格底色都重叠）[02:08.698]彼此都能逃出梦魇（那就去逃出梦魇）[02:12.448]让我多了解你一点（了解我一点）[02:15.947]不屑无谓的誓言（那些无谓的誓言）[02:19.948]定格在纯色的胶片（纯色的胶片）[02:23.447]这城市都为你失眠（为你失眠）[02:28.449]如果一切都是意外[02:29.945]不如放她自由自在[02:31.945]她也有旁人青睐[02:33.445]却只爱你精明不市侩[02:35.445]你们是独立的个体[02:37.196]但却有默契又超合拍[02:39.196]其他鲜活艳丽的花朵[02:40.946]全都变得俗不可耐[02:42.946]她明白 所以不如就stay here[02:45.946]say bye ~[02:46.696]不必为谁放下骄傲 baby if you like[02:49.446]或者也许你一直往前走[02:51.447]回头看原地 她还在[02:53.197]放不下的不只是真心和风月[02:54.947]还有对你的偏爱[02:57.447]明明动了心[02:58.947]却装做不在意[03:00.697]还在喃喃自语[03:02.197]删好友耍脾气[03:04.197]触手可及的虚拟[03:07.947]我的爱只能给你[03:11.448]让我多了解你一点[03:13.698]给我更多时间[03:14.946]让人格底色都重叠[03:16.948]彼此都能逃出梦魇[03:18.948]让我多了解你一点[03:20.948]不屑无谓的誓言[03:22.699]定格在纯色的胶片[03:24.449]整城市为你而失眠\n",
	},
	{
		"name":"热爱",
		"singer":"阿达娃,孙瑄阳Xtina,石玺彤 ",
		"time":"4:07",
		"img":"http://p1.music.126.net/XHpKsZh9ezdh1prZlfn_0g==/109951165493158076.jpg",
		"src":"https://public.sn.files.1drv.com/y4mTfxIOH9SjSHGKVva8CRyKQgKSzqe9lChqQbIT_rVHj9LBIXYnDQ34OeMKAsYwbMZdafUVtI4MkzRNEftjH01OeWHXmYCfVVZv6NjTiZONMmm-i1kz2cCxiOIV7jzgiftKaPd5Hx77Ut_RoLX0iIiIWzovF1LXkPeanUka2fnsyYO9iZ1TTVDK5eVUMWePR0iVMuaTRLMu2dO-n2hjwY7lOMH25eFM_ouGyR7NmpxgZE?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 阿达娃Adawa/孙瑄阳Xtina/石玺彤/于贞[00:01.000] 作曲 : 阿达娃Adawa/孙瑄阳Xtina/石玺彤/于贞[00:02.000] 编曲 : BINGO/孙宇辰[00:03.000] 制作人 : 高姗[00:05.270]阿达娃Adawa：[00:10.665]把青春付给信仰丢掉迷惘[00:16.281]把梦填装进现实肆意生长[00:21.683]孙瑄阳Xtina：[00:22.758]一路并肩攀登过意料之外的陡峭[00:25.491]用信念突破每个关卡之后喊出口号[00:28.250]把勇气当作燃料[00:29.608]不知疲倦地弹跳[00:31.166]靠耐心翻山越岭就是成功唯一诀窍[00:33.953]每一道精妙的弧线[00:35.346]每一次取胜的关键[00:36.835]又一次轻松地突破了防线[00:38.389]拿下比分愈发得熟练[00:39.850]没时间害怕[00:40.479]没时间废话[00:41.151]没想过成功要付出的代价[00:42.556]变换着战术向对手轰炸[00:44.091]看得到她们用实力说话[00:45.748]你看得到她们成长的速度[00:47.893]竞赛从不会让步[00:49.360]不给自己留退路[00:51.132]用意志不断磨砺出精湛的技术[00:53.639]做最出色的队伍[00:55.049]世界把她们记住[00:56.832]血液里流淌的渴望[00:58.301]注入不服输的心脏[00:59.630]穿上这一身的倔强[01:01.091]凝结不可挡的力量[01:02.484]是经历过每一次艰难的冒险[01:05.471]才让胜利变得更加的耀眼[01:07.460]阿达娃Adawa：[01:07.783]把青春付给信仰丢掉迷惘[01:13.293]把梦填装进现实肆意生长[01:19.022]一个时代的荣耀[01:22.658]照耀下一代年少[01:25.543]热爱让我 成为了我自己[01:42.730]石玺彤：[01:43.190]一次次的至暗 难免让人难堪[01:45.782]但心无旁骛 做更残酷的训练[01:48.602]为质疑和嘲笑受的伤只是昙花一现[01:51.397]因为不久的将来 我们领奖台上见[01:54.631]受够了败北 尝尽不甘心[01:57.750]练到筋疲力尽咬牙不肯喊停[02:00.396]没十万次扣杀 没资格想赢[02:02.891]唯有看清自己内心才能继续前行[02:06.125]顽强的拼搏精神被点燃[02:08.632]五连冠 听见那连续奏响的国歌[02:11.776]自强不息的精神被点燃[02:14.342]十次夺冠也曾经历了多少挫折[02:17.168]不是一块奖牌一座奖杯那么简单[02:20.014]充满为国争光的民族自豪感[02:22.855]不是一块奖牌一座奖杯那么简单[02:25.674]传承的中国女排精神永不会消散[02:27.877]阿达娃Adawa：[02:28.194]把青春付给[02:29.479]于贞：[02:29.796]一份令人终生骄傲的事业[02:33.275]阿达娃Adawa：[02:33.484]把梦填装进[02:35.528]于贞：[02:35.723]沉甸甸的奖牌我拿下不停歇[02:39.238]阿达娃Adawa：[02:39.436]一个时代的荣耀[02:42.639]照耀下一代年少[02:45.543]于贞：[02:45.720]不被认可的人会用尽全力[02:47.188]站在最高让你不得不相信[02:48.622]命运是自己一步一步用[02:50.573]拼搏建立[02:51.873]不想成为 任何一位[02:54.370]我做我自己就算这信念曾经被击溃[02:56.971]我的气度 叫我别去在意[02:59.334]那输赢只要我尽全力地在赛场上发挥[03:03.867]但我的倔强 和女排的荣光[03:06.403]这不是只有我一个人在挥臂的战场[03:09.419]看我用实力 向世界证明[03:11.582]中国的力量 女子的力量和我的力量[03:13.712]势不可抵挡[03:16.229]阿达娃Adawa：[03:16.466]把青春付给信仰丢掉迷惘[03:22.042]把梦填装进现实肆意生长[03:30.079]合：[03:30.465]把青春付给信仰丢掉迷惘[03:36.193]把梦填装进现实肆意生长[03:41.895]一个时代的荣耀[03:45.485]照耀下一代年少[03:48.312]热爱让我 成为了我自己[03:53.729]我自己[03:55.004] 配唱编写 : 高姗/BINGO[03:56.279] 吉他 : 孙宇辰[03:57.554] 录音 : 师帅[03:58.829] 录音室 : 上海焰音Flame Music Studio[04:00.104] 和声编写 : BINGO/李恩泽[04:01.379] 人声编辑 : 姜皓天@Studio21A/BINGO/高姗[04:02.654] 混音 : Matthew Sim[04:03.929] 混音室 : Bedroom Studio[04:05.204] 母带 : Alex Psaroudakis[04:06.479] 母带工作室 : The Work Shop NYC[04:07.754] 出品 : 哔哩哔哩音乐制作中心\n",
	},
	{
		"name":"Just Love♡",
		"singer":"陈近南",
		"time":"3:06",
		"img":"http://p1.music.126.net/iiWH0GVyPZraUlujV0cWbw==/109951164055315365.jpg",
		"src":"https://public.sn.files.1drv.com/y4muLjtMj3eVEtMgIKe6DNBpSqjzrE3YbJvj3aaxvEUXpTG_o9IMknwmCziK9wkLhgWZyv_dqW6sMwZWc_-jAZ7d0aq3pWwdWB5HGr6q7HFmTlyVe4Agl0duiNKmqu9hM5s5E7c7z-eK-1A_nIJURJWduquHYEpRrCXjUbfa0OGy0-Q-Zeu4IsRxVn-4ZyxXagXjOuZDaTK2n9eNahAnvvy3r5italw4WIGi_HrP0tEtGk?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 陈近南[00:01.000] 作曲 : 陈近南[00:08.32]编曲：Gera（October）[00:10.98]Mix by：张奕[00:14.47]我天生口味独特[00:15.71]偏偏就喜欢你沉默[00:17.39]享受你的亲吻抚摸[00:19.18]夜晚里轻轻咬耳朵[00:21.63]嘘~[00:24.39]我最爱你的酒窝[00:27.20][00:28.48]我天生口味独特[00:30.03]偏偏就喜欢你沉默[00:31.88]享受你的亲吻抚摸[00:33.66]夜晚里轻轻咬耳朵[00:35.65]我低声的说[00:38.78]最爱你的酒窝[00:42.68]你天生目光清澈[00:44.56]却为了我沾染情色[00:46.36]连呼吸都变得灼热[00:48.25]为我升空为我陨落[00:49.99]把黑夜撕破[00:53.31]你和我辗转反侧[00:57.30]阴暗潮湿的小角落 你的味道填满了整个房间[01:01.00]枕头柔软又干净贴着你侧脸 就在我的旁边[01:04.41]每次我贴近你就会脸红暧昧的气氛在我们中间[01:08.11]我天生跳脱又热情 刚好搭配你的腼腆[01:11.69]你从来都不会撒娇[01:13.54]反而很对我的脾气[01:15.48]想成为我的real man[01:17.13]带我探索更多的秘密[01:18.77]可整个世界我都不关心[01:20.62]只有你是解不开的谜题[01:22.35]我见过最迷人的风景大概就是你的眼睛[01:26.07]对你的情话我有那么多[01:28.94]却没说出口[01:30.17]我想和你一起遨游[01:32.60]整个星球 整个宇宙[01:35.71]你任何模样我都喜欢[01:37.56]无措认真或者害羞[01:40.94]So baby请你放轻松[01:43.10]我不会太冲动[01:44.69]想占有你片刻温柔[01:48.01]黑夜白昼 覆水难收[01:49.87]我迷恋你的每个动作[01:52.00]每个微笑每次点头[01:55.47]So honey我为你付出全心[01:58.34]你也不用问我真正爱你的原因[02:01.67]为了你去学习那些我本来就不感兴趣的游戏[02:05.71]只为了在你超神时夸你 ♡♡[02:09.58]So honey我已经证明我的Love♡[02:16.41]你已经见证我的Love♡[02:20.05]口是心非本就是我特色[02:23.17]我还是想在你笑的时候戳你酒窝[02:26.96]提起你的名字我的世界就变粉色[02:30.44]这都是因为我对你无法隐藏的~♡♡♡[02:34.89]你是我触手可及的夏天[02:37.82]是我所有情歌的灵感来源[02:41.46]你是我的Love Love Love Love[02:44.84]最好最爱的♡♡♡♡♡[02:49.30]我天生口味独特[02:50.98]偏偏就喜欢你沉默[02:52.82]享受你的亲吻抚摸[02:54.65]夜晚里轻轻咬耳朵[02:57.05]嘘~[02:59.77]我最爱你的酒窝\n",
	},
	{
		"name":"young life go",
		"singer":"陈近南",
		"time":"4:47",
		"img":"http://p1.music.126.net/K5NZrAL8qiMF3yRv_183zQ==/109951163750756137.jpg",
		"src":"https://public.sn.files.1drv.com/y4mDxJNKTEf99sHwJVfRJ_fxMO_tR0uyoaWVaLa2J_5XCJRZ9c4RUfZisCWCX6Z3dxgtnOlckrpFrRZL7g9zdiDOguhtd9xNs6jIPK9oMOcUNbWpKDx6Kx600u3a4A_mbOk8CG66Fkou_9kgePjGgWvglmnNrD0twL6WW7S7f4KCO0aqkyyBuXCpivZM-v7WTLe020N0-kiezvpmvNAiF-fn4JTO7WMWjoQLmb-JsL10EE?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:02.89]Anything she want she can get[00:05.05]She can get, she want[00:09.21]Anything she want she can get[00:11.50]Anything she want she can get(Wheezy outta here)[00:13.23]She want Chanel, go get it[00:14.61]She want Chanel, go get it[00:16.28]She want this Fendi, go get it[00:18.03]She want a Birkin, go get it[00:19.89]She want this Gucci, she get it[00:21.52]She want this Louis, go get it[00:23.11]Loubs with the spikes, she get it[00:24.82]Everything I got, she gettin' it, yeah[00:27.60]Bentley sedan, she get it[00:29.07]Hop out the Benz, she gettin' it[00:30.91]Hop out the Lamb, she gettin' it[00:32.46]The Porsche  Cayenne, she gettin' it[00:34.20]Hop out the coupe, she get it[00:35.88]Ashanti the shoes, she get it[00:37.71]I put my kids on her titty,[00:39.51]Anything she want she can get it[00:41.25]Anything you see, you can get it[00:42.98]Here go the keys to the Bentley[00:44.60]When I **** her, I got good intentions[00:46.28]I just can't get my palms to stop itching[00:48.01]Water on me like I live with the fishes[00:49.60]I done ordered every color in tennis[00:51.31]Got the diamonds put in by my dentist[00:53.07]I'ma shine when I'm skinnin' and grinnin'[00:54.83]Ice my watch, I'm not wasting my time[00:56.46]Gunna dripping with Uzi and Slime[00:58.23]Connect with my bitch like WiFi[00:59.99]I'm in the DM like ChaCha[01:01.81]I got M's, I can take care of the southside[01:03.49]I've been betting the billionaire ties[01:05.23]Got the Yves Saint Laurent heels in your size[01:06.86]Get the penthouse and fill it with Vibes[01:08.59]Got Marc Jacob's, they cover my eyes[01:10.13]She need help, I'ma send her a dime[01:11.85]I can't pour nothing less than two lines[01:13.62]Oh she really love the back seat reclines[01:15.42]She want me to put that dick in her spine[01:17.02]Take her shopping and keep her from crying[01:18.72]Give you stones you one of a kind[01:20.62]Got Chanel with the C's on both sides[01:21.92]She want Chanel, go get it[01:23.23]She want Chanel, go get it[01:24.87]She want this Fendi, go get it[01:26.59]She want a Birkin, go get it[01:28.34]She want this Gucci, she get it[01:30.06]She want this Louis, go get it[01:31.77]Loubs with the spikes, she get it[01:33.43]Everything I got, she gettin' it, yeah[01:36.09]Bentley sedan, she get it[01:37.71]Hop out the Benz, she gettin' it[01:39.51]Hop out the Lamb, she gettin' it[01:41.13]The Porsche  Cayenne, she gettin' it[01:42.83]Hop out the coupe, she get it[01:44.52]Ashanti the shoes, she get it[01:46.35]I put my kids on her titty,[01:48.08]Anything she want she can get it[01:49.08]she want CHANEL she get it ，Louis V bag and Dior her titty[01:51.55]They locked the door when, we walk in Fendi[01:53.80]Save the hundreds[01:54.63]Them dubs, we spending[01:55.53]Real dope boy, ain't charging no card[01:57.14]New G-Wagon, she already got[01:58.85]Real grown woman, she ain't post her body[02:00.59]Check price tags, you want it, you get it[02:02.36]You a big Thugger fan, You scared to admit it[02:04.04]Getting sixty for a show, I'm handlin business[02:05.70]L.A. for a month, get away from the city[02:07.37]Been sipping this syrup, I'ma need a new kidney[02:09.10]Just tell me where it's at and I'ma go in and get it[02:10.91]'Ever I say, she on it[02:12.43]New Range Rover, she want it[02:14.08]We don't do loans she own it[02:15.72]Running out of space for the bags in her closet[02:17.38]Running through checks every day, no fraud shit[02:19.04]Rose gold Presidential Rollie look polished[02:20.69]Bad lil' bitch, good brain,go to college[02:22.43]You ain't really gotta pay for nothing, I got it[02:24.13]Big bankroll, I ain't toting no wallet[02:25.85]I don't withdraw, nickname deposit[02:27.55]T-Pain, Plies, I call her my shawty[02:29.30]My shawty[02:30.42]She want Chanel, go get it (she want Chanel, go get it)[02:32.09]She want Chanel, go get it (go get it)[02:33.52]She want this Fendi, go get it[02:35.13]She want a Birkin, go get it[02:36.80]She want this Gucci, she get it[02:38.57]She want this Louis, go get it[02:40.26]Loubs with the spikes, she get it[02:41.97]Everything I got, she gettin' it, yeah[02:44.71]Bentley sedan, she get it[02:46.21]Hop out the Benz, she gettin' it[02:47.94]Hop out the Lamb, she gettin' it[02:49.62]The Porsche  Cayenne, she gettin' it[02:51.47]Hop out the coupe, she get it[02:53.24] Ashanti the shoes, she get it[02:54.81]I put my kids on her titty,[02:56.72]Anything she want she can get it\n",
	},
	{
		"name":"你的Hiphop女友",
		"singer":"陈近南",
		"time":"3:55",
		"img":"http://p2.music.126.net/z4lcL-AJJlm3y6E6-ZylrQ==/109951162936940218.jpg",
		"src":"https://public.sn.files.1drv.com/y4mlFly7efUR1TFxyH-8Jr3RSPWb8qV1hENvc877mECqKZyRSB0GGBPzRfjk3-UA9o7pTMxw_4RRdASpN_fOXWNVv89nv7fxxKRUeNbkiFO00XwgAbHpqsTb1Enw8-Q87AMFuwahvDzKn3Q6jclQBncf5QpzslJAfD2L2c0mQGsSRMteSAzTj1NwEn9fcVf2HHLLGjbS1rmG5wMHgrIkx-_G353Zpce5C7uXQm7z6X1lLk?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 陈近南[00:01.000] 作曲 : 陈近南 韩潇/韩潇[00:06.70]后期：江澈Fi9[00:08.66]韩潇：[00:09.39]When you are in the rain[00:15.73]When you are get in pain[00:18.71]Baby you just let it go[00:21.29]Remember nothing can hurt you oh[00:25.06]When you are in the rain[00:28.03]When you are get in pain[00:31.18]Baby you just let it go[00:34.17]Remember nothing can hurt you oh[00:36.99]陈近南：[00:37.41]你想要我吗，你想要我吗[00:40.59]你想要我吗，Baby你想要我吗[00:43.67]女神没有用，不如Hiphop girl[00:46.82]因为她会不离不弃陪伴你左右[00:49.46]Aj和平沿帽是必备[00:50.91]别怕她没有香水气味[00:52.76]每天真正的甜蜜是无法言传只能意会[00:55.69]手段能搞定烂桃花也能够每天给你激情[00:58.53]谁挖墙脚就干倒她一群homi帮她刺探敌情[01:01.75]她一直很酷，但是却只做你的猫咪[01:04.78]不当小人物，却愿意每天等你消息[01:08.20]好多男孩明里暗里一直惦记她的*****[01:11.34]但你清楚她只爱你一个胜过爱她自己[01:14.35]她拿得起也能放得下[01:15.85]但是却总是长不大[01:17.49]只要人越多的时候她就越不爱说话[01:20.37]她身材一流紧跟潮流精准把握各种flow[01:23.78]她从不和你吵架，最多一言不合就battle[01:27.49]韩潇：[01:30.15]When you are in the rain[01:33.52]When you are get in pain[01:36.65]Baby you just let it go[01:39.50]Remember nothing can hurt you oh[01:43.42]When you are in the rain[01:46.08]When you are get in pain[01:49.16]Baby you just let it go[01:51.63]Remember nothing can hurt you oh[01:54.52]陈近南：[01:54.93]她喜欢窝在角落也能和homies讲着八卦[01:58.23]她能和你彻夜畅谈BIG还有Kendrick Lamar[02:01.23]肆意切换hold住造型无论长发还是短发[02:04.36]对你爱闹的兄弟无限包容体贴你的爸妈[02:07.55]会跳舞身体柔软各种姿势都能教会[02:10.96]无论freestyle还是睡觉都陪你all night all day[02:13.68]她懂你的梦想和牵挂把你脾气拿捏到位[02:16.81]你的hiphop女孩才是女友中最高的配备[02:20.78]你想要我吗，你想要我吗[02:23.46]你想要我吗，Baby你想要我吗[02:26.52]女神没有用，不如Hiphop girl[02:29.71]因为她会不离不弃陪伴你左右[02:34.09]韩潇：[03:03.05]这段缺你！[03:13.61]When you are in the rain[03:16.39]When you are get in pain[03:19.52]Baby you just let it go[03:22.12]Remember nothing can hurt you oh[03:25.80]When you are in the rain[03:28.89]When you are get in pain[03:31.99]Baby you just let it go[03:34.77]Remember nothing can hurt you oh[03:48.09]young life！~\n",
	},
	{
		"name":"念旧少女",
		"singer":"陈近南",
		"time":"3:03",
		"img":"http://p1.music.126.net/kDxiUFX_6c5jrQ2rlksMDA==/109951163275756751.jpg",
		"src":"https://public.sn.files.1drv.com/y4mq3XmGXdZJBZQRlumbpNglWMRmAoPVD8olH9syix98aw-TXyRInaGPHcoZpBOZNRVz6bryAUituu8ZvmOsxGlD4VlmshEHrNZjvbTC4c-bRe3Qkm1uPu5StayqoEbjZCC7kP8UF_89Ck5PCHk1AhS3RS25UWvAe0BBVJhIdTRkfQC-fd1VW4F8rb_hogEfZOS1hiij5PZFItQhe3fn0ReIlmlPhKGHcgdCWCFdjudC4w?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 陈近南[00:01.000] 作曲 : 陈近南[00:06.47]后期：张奕[00:10.10]你想的 我都想过[00:12.57]只不过事到如今不想多说[00:15.11]太阳东边起 西边落[00:17.46]天上星星那么多你是哪颗[00:20.21]你说我想的难以捉摸[00:23.46]怎么猜猜猜也猜不透[00:25.43]其实没那么复杂[00:27.49]也没那么繁琐[00:30.92]凌晨一点半July的思绪有点乱[00:33.44]小男孩打她电话说对她的爱减半[00:35.73]他说猜不透她[00:37.14]也不想去猜了[00:38.31]以为爬到爱情的至高点但最后却摔了[00:40.83]轻蔑的笑[00:41.95]（反正他不是她想要）[00:43.31]她让他挑[00:44.53]（离开或往反方向跑）[00:46.04]她不是高冷只是不想去暖他[00:48.57]在深夜哭醒第二天假装精神焕发[00:50.90]很久之前爱过的男孩又进入她的梦[00:53.72]她梦见那时候还是撕心裂肺的痛[00:56.09]他和这些小男孩从来都不一样[00:58.62]温润入骨早就已经变成了他习惯[01:01.21]July后来写歌不敢写情歌的形式[01:03.98]怕写来写去以后全部都是他的影子[01:06.63]去打探又打乱了July原本的计划[01:09.18]没打算真正的离开但时间不会停下[01:11.99]你想的 我都想过[01:14.29]只不过事到如今不想多说[01:16.82]太阳东边起 西边落[01:19.20]天上星星那么多你是哪颗[01:21.95]你说我想的难以捉摸[01:24.41]怎么猜猜猜也猜不透[01:26.98]其实没那么复杂[01:29.00]也没那么繁琐[01:31.99]月亮阴 晴 圆 缺[01:33.82]她依然拉风[01:34.80]所有人说不懂她是因为只想要他懂[01:37.29]他全都看得出但是绝对不会承认[01:39.99]他只说她的年纪不应该为情所困[01:42.49]他曾经笑[01:43.70]（在风里把她裹进外套）[01:45.08]她睡不着[01:46.20]（破碎的回忆总是来到）[01:47.66]云飘啊飘[01:49.27]（遮住了树下的猫）[01:50.20]她会明了[01:51.40]（自己才是最后的依靠）[01:52.88]她如今变得高挑体重也不再超标[01:55.36]起草过好多信件到最后都烧掉[01:58.05]她抵得过压力却抵不过命运的反复[02:00.58]她踌躇 到了嘴边的名字却无法喊出[02:03.33]她依然伪装脆弱 笑容挂在她的脸上[02:05.80]把所有的煎熬放在自己瘦弱的肩膀[02:08.34]时间滴答滴过去好久她再也不会盼望[02:10.82]她是不凋谢的花 没了他更能尽情绽放[02:13.63]你想的 我都想过[02:15.99]只不过事到如今不想多说[02:18.46]太阳东边起 西边落[02:20.90]天上星星那么多你是哪颗[02:23.59]你说我想的难以捉摸[02:26.19]怎么猜猜猜也猜不透[02:28.77]其实没那么复杂[02:30.75]也没那么繁琐[02:35.45][02:36.82]微博ID：陈近OK7[02:38.33]One More Tmie[02:39.10][02:39.46]你想的 我都想过[02:41.54]只不过事到如今不想多说[02:43.87]太阳东边起 西边落[02:46.43]天上星星那么多你是哪颗[02:49.17]你说我想的难以捉摸[02:51.80]怎么猜猜猜也猜不透[02:54.33]其实没那么复杂[02:56.45]也没那么繁琐\n",
	},
	{
		"name":"来自世界的恶意（Prod.by Simon）",
		"singer":"陈近南",
		"time":"3:09",
		"img":"http://p2.music.126.net/fA-EVhGe_vlVI4mFGZtVVA==/109951164368085723.jpg",
		"src":"https://public.sn.files.1drv.com/y4mjE2H1ATskRlEo6b6LOR394GKLqjXUAKOEoCIss2ktLY2fFChODTq8Cz0017mPJNlYRnNWIotAwOA53-LXFnRplY9ib1T5YtruDJKSbn1vo6uUSXZHartFSO2xy_HgUvIPtSIvxI3x5hnmiK8oIUhpEgpPOJlM5GqNoytit5sWDC4lvlnXV4mGDNDtBaskt2FYZUWLxnY2QtyojwQaNmg4edfJ7hjl2DRCusKDQsfVjo?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 陈近南[00:00.024] 作曲 : 陈近南[00:00.48]编曲：simon5[00:01.10]后期制作：江澈Fi9[00:01.61]这不是我的问题我要该向谁证明[00:06.30]我终于感到来自世界的恶意[00:11.97]还有多久 我还剩下多少的勇气[00:17.52]Don't be afraid 我会一直陪你[00:23.84]彩色的鞋带突然断裂那就买条新的[00:26.71]贫民窟的废墟里面也许就藏着金子[00:29.41]命运是主人 你我都是往来的宾客[00:32.23]如果你觉得不幸接下来请仔细听着[00:35.03]我和你一样曾遭受校园和网络暴力[00:37.84]也曾经写下日记 吐槽过敏的教育[00:40.60]只有音乐和游戏 才是我的兴奋剂[00:43.45]痛苦和泪水 填满了我整个青春期[00:46.26]我无法控制我自己脾气越来越差[00:49.06]所有的力气都用来跟爸爸妈妈吵架[00:51.82]学校里流传着关于我的各种争议[00:54.58]说我是问题少女没人关心我是否生病[00:57.39]以为我矫情 吐槽我天生敏感多疑[01:00.19]只能休学无法和他们去一一说明[01:02.95]当吃了药就算是白天也会浑噩睡去[01:05.75]在夜晚惊醒又开始漫长的哭泣[01:08.26]这不是我的问题我要该向谁证明[01:13.36]我终于感到来自世界的恶意[01:18.66]还有多久 我还剩下多少的勇气[01:24.23]Don't be afraid 我会一直陪你[01:30.81]我无法给你月亮 也不能送你星星[01:33.73]对你来讲 我只是播放器里的声音[01:36.49]我无法穿越屏幕在夜里把你紧紧拥抱[01:39.25]但我能听见你心里发出的求救信号[01:42.05]我知道你也想要变好，和从前一样[01:44.80]再陪妈妈散步你们曾经走过的地方[01:47.62]和朋友们嬉笑打闹着青春在激荡[01:50.38]夜里的蛙鸣合着伙伴们的浅声低唱[01:53.42]所以请你相信一切都会变好的[01:55.53]你会按时长大成人会慢慢变老的[01:58.29]生命的每一个过程都会充满乐趣[02:01.15]来自世界的恶意只不过是一场闹剧[02:03.92]已经坚持到了现在你看你有多棒[02:06.95]就让我陪你一起经历命运的波浪[02:09.60]你一定会长成 自己最喜欢的模样[02:12.42]当觉得累了就把这首歌循环播放[02:14.77]这不是你的问题你无需向谁证明[02:20.80]世界的恶意不过是一场闹剧[02:26.51]如果现在 你没剩下多少勇气[02:31.83]Don't be afraid 我会一直陪你[02:38.35][02:40.66]愿你历尽千帆，依然光芒万丈[02:43.07]如果世界的恶意太多，还有我陪在你身边\n",
	},*/
	{
		"name":"枕头里的梦（Prod.Furyl）",
		"singer":"陈近南",
		"time":"2:53",
		"img":"http://p2.music.126.net/XdVyYm8y5rsdRKCVIYzTwQ==/109951164320782183.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E9%99%88%E8%BF%91%E5%8D%97%20-%20%E6%9E%95%E5%A4%B4%E9%87%8C%E7%9A%84%E6%A2%A6%EF%BC%88Prod.Furyl%EF%BC%89.mp3",
		"lrc":"[00:00.000] 作词 : 陈近南[00:01.000] 作曲 : 陈近南/Furyl[00:11.87]编曲：Furyl[00:14.63]后期制作：程老师[00:19.73]如果你也觉得累[00:20.96]那就听妈妈的话每天早点睡[00:23.12]如果你也觉得累[00:24.15]那就抱自己一下[00:25.67]洗尽身上所有不该承受的疲惫[00:27.62]如果[00:28.70]你也厌倦了自己[00:30.20]爱还有恨看的都不够分明[00:33.58]那就听我的声音[00:34.75]至少我还能理解你的心情[00:38.24]你心里有故乡的篝火[00:42.19]♡若没有诗和远方 至少有故乡的篝火♡[00:47.46]你有属于自己的王国[00:51.54]♡他们有他们的领土 你也有自己的王国♡[00:56.76]你眼里有绽放的星河[01:00.79]♡一颦一笑都独特 你的眼睛里有星河♡[01:05.92]你的身边还有一个我[01:10.06]♡baby我会陪你入睡 你的身边还有我♡[01:13.94]你的枕头下藏了多少泪[01:17.41]也许还有好多没做完的梦境[01:18.34]大人的世界什么都很贵[01:20.75]只有热血的青春最便宜[01:24.03]虽然你鲜血淋漓[01:25.61]但是没有什么能够让你放弃[01:28.68]回头看一地风情[01:30.26]也许这是上帝的磨难和赐予[01:32.56]我不想溃烂在风里面[01:34.91]人间让我厌倦[01:37.11]逃不出这个圈[01:39.61]疯狂自我催眠[01:41.72]偏爱的都残缺[01:44.33]溃烂的全世界[01:46.33]离开不用告别[01:48.84]我爱这个夏天[01:51.55]至少我能理解你[01:53.74]心里所有的疑惑[01:56.15]就让我陪你看尽[01:58.40]世界的日出日落[02:00.83]等到天亮再出发[02:03.02]现在只听我唱歌[02:05.48]你枕头里的梦想[02:07.73]现在还剩下几个[02:10.59]你心里有故乡的篝火[02:17.59]♡若没有诗和远方 至少有故乡的篝火♡[02:19.65]你有属于自己的王国[02:23.81]♡他们有他们的领土 你也有自己的王国♡[02:29.02]你眼里有绽放的星河[02:33.09]♡一颦一笑都独特 你的眼睛里有星河♡[02:38.24]你的身边还有一个我[02:42.29]♡baby我会陪你入睡 你的身边还有我♡\n",
	},
	{
		"name":"范儿",
		"singer":"陈近南",
		"time":"2:59",
		"img":"http://p2.music.126.net/ir0tPfbXf1EkCJwT0d_iWQ==/79164837212645.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E9%99%88%E8%BF%91%E5%8D%97%20-%20%E8%8C%83%E5%84%BF.mp3",
		"lrc":"[00:00.000] 作词 : 大张伟[00:01.000] 作曲 : 大张伟[00:14.020]我要的就是范儿范儿范儿[00:16.870]范儿范儿范儿范儿范儿[00:18.950]这儿这儿那儿那儿嗨玩儿[00:21.490]我走哪儿都有样儿样儿样儿[00:24.230]样儿样儿样儿样儿样儿哦哦哦[00:29.160]我们谁也不给面儿不问价儿[00:33.020]我绝对不掉链儿哦哦哦[00:36.730]我天生就这样儿就这相儿[00:40.390]我甩得就是牌儿哦哦哦[00:59.470]我不管美的不管丑的我不管有的没有的[01:06.690]我不管新的不管旧的我管他谁的[01:12.230]我我我要的就是范儿范儿范儿[01:16.190]范儿范儿范儿范儿范儿[01:18.680]这儿这儿那儿那儿嗨玩儿[01:21.720]我走哪儿都有样儿样儿样儿[01:23.860]样儿样儿样儿样儿样儿哦哦哦[01:29.150]我要的就是范儿范儿范儿[01:31.790]范儿范儿范儿范儿范儿[01:33.460]见天儿蹦蹦颠儿颠儿[01:36.510]我鼓着小脸蛋儿蛋儿蛋儿[01:39.210]蛋儿蛋儿蛋儿蛋儿蛋儿哦哦哦[01:44.090]我们谁也不给面儿不问价儿[01:48.060]我绝对不掉链儿哦哦哦[01:51.770]我天生就这样儿就这相儿[01:55.430]我甩得就是牌儿哦哦哦[02:14.430]我不管嫩的不管熟的我不管有的没有的[02:21.750]我不管烈的不管柔的我管他谁的[02:27.290]我我我要的就是范儿范儿范儿[02:30.950]范儿范儿范儿范儿范儿[02:33.080]这儿这儿那儿那儿嗨玩儿[02:36.580]我走哪儿都有样儿样儿样儿[02:38.920]样儿样儿样儿样儿样儿哦哦哦[02:43.840]我要的就是范儿范儿范儿[02:47.240]范儿范儿范儿范儿范儿[02:49.780]见天儿蹦蹦颠儿颠儿[02:52.010]我鼓着小脸蛋儿蛋儿蛋儿[02:54.650]蛋儿蛋儿蛋儿蛋儿蛋儿哦哦哦[03:00.090]我们谁也不给面儿不问价儿[03:03.990]我绝对不掉链儿哦哦哦[03:07.700]我天生就这样儿就这相儿[03:11.460]我甩得就是牌儿哦哦哦。\n",
	},
	{
		"name":"贪",
		"singer":"陈近南,M.O.K.",
		"time":"3:38",
		"img":"http://p2.music.126.net/fA-EVhGe_vlVI4mFGZtVVA==/109951164368085723.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E8%AF%B4%E5%94%B1/%E9%99%88%E8%BF%91%E5%8D%97%2CM.O.K.%20-%20%E8%B4%AA.mp3",
		"lrc":"[00:00.000] 作词 : 陈近南[00:00.024] 作曲 : 陈近南[00:00.48]编曲：simon5[00:01.10]后期制作：江澈Fi9[00:01.61]这不是我的问题我要该向谁证明[00:06.30]我终于感到来自世界的恶意[00:11.97]还有多久 我还剩下多少的勇气[00:17.52]Don't be afraid 我会一直陪你[00:23.84]彩色的鞋带突然断裂那就买条新的[00:26.71]贫民窟的废墟里面也许就藏着金子[00:29.41]命运是主人 你我都是往来的宾客[00:32.23]如果你觉得不幸接下来请仔细听着[00:35.03]我和你一样曾遭受校园和网络暴力[00:37.84]也曾经写下日记 吐槽过敏的教育[00:40.60]只有音乐和游戏 才是我的兴奋剂[00:43.45]痛苦和泪水 填满了我整个青春期[00:46.26]我无法控制我自己脾气越来越差[00:49.06]所有的力气都用来跟爸爸妈妈吵架[00:51.82]学校里流传着关于我的各种争议[00:54.58]说我是问题少女没人关心我是否生病[00:57.39]以为我矫情 吐槽我天生敏感多疑[01:00.19]只能休学无法和他们去一一说明[01:02.95]当吃了药就算是白天也会浑噩睡去[01:05.75]在夜晚惊醒又开始漫长的哭泣[01:08.26]这不是我的问题我要该向谁证明[01:13.36]我终于感到来自世界的恶意[01:18.66]还有多久 我还剩下多少的勇气[01:24.23]Don't be afraid 我会一直陪你[01:30.81]我无法给你月亮 也不能送你星星[01:33.73]对你来讲 我只是播放器里的声音[01:36.49]我无法穿越屏幕在夜里把你紧紧拥抱[01:39.25]但我能听见你心里发出的求救信号[01:42.05]我知道你也想要变好，和从前一样[01:44.80]再陪妈妈散步你们曾经走过的地方[01:47.62]和朋友们嬉笑打闹着青春在激荡[01:50.38]夜里的蛙鸣合着伙伴们的浅声低唱[01:53.42]所以请你相信一切都会变好的[01:55.53]你会按时长大成人会慢慢变老的[01:58.29]生命的每一个过程都会充满乐趣[02:01.15]来自世界的恶意只不过是一场闹剧[02:03.92]已经坚持到了现在你看你有多棒[02:06.95]就让我陪你一起经历命运的波浪[02:09.60]你一定会长成 自己最喜欢的模样[02:12.42]当觉得累了就把这首歌循环播放[02:14.77]这不是你的问题你无需向谁证明[02:20.80]世界的恶意不过是一场闹剧[02:26.51]如果现在 你没剩下多少勇气[02:31.83]Don't be afraid 我会一直陪你[02:38.35][02:40.66]愿你历尽千帆，依然光芒万丈[02:43.07]如果世界的恶意太多，还有我陪在你身边\n",
	},
	/*{
		"name":"20岁",
		"singer":"陈近南,刘雅倩BAT",
		"time":"4:45",
		"img":"http://p1.music.126.net/C3b-JzA8IwHZYCDiuY7IIA==/109951163230080390.jpg",
		"src":"https://public.sn.files.1drv.com/y4m9SHdBZUKlGd8qEaY2v78aL7os5IaeG2L-ES0cNUQgIr8yb6u4b0uQ7BvmU3cnjjq3GQzN2e-MAugzIS8LR5FasaiiDwXCxKaD1egHY-ueHo6XPQYl1myVP1CwGz_C-mDq4Ro_WlyhYmaqE2LQYlcDlzCME0SRE7cLPJjdFDC9a1CS1yjmMEf-DPksjfwBdQntjFjxqPA1V4UL0wDflbIR29LALlx7ZrRgIFv2_eScIo?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 陈近南&刘雅倩Bat.[00:01.000] 作曲 : Gabriel D[00:15.42]后期：张奕[00:21.98]旋律：刘雅倩Bat.& 陈近南[00:27.31]刘雅倩Bat：[00:29.15]过了今年我就二十岁[00:32.71]Stealing放着我就会飙泪[00:36.32]夜晚喝醉缩在被窝又为了谁[00:40.79]Future mama 难道情话说了就作废[00:44.40]在黑暗中摸索 Ye iam[00:47.71]在光亮中失望 Ye iam[00:51.53]在黑暗中摸索 Ye iam[00:55.13]在光亮中失望 Ye iam[00:57.46]陈近南_范儿：[00:57.82]我想要午夜压着马路清晨再陪你做个梦[01:00.83]我想要为你缝合这个时空里面所有的裂缝[01:04.23]我想要和我自己仅存的理念生死与共[01:07.89]我想要你听到我声音身体和灵魂都触动[01:11.34]可是没有谁和谁能绝对天长地久[01:15.15]时间这趟列车从不停留[01:18.51]我无法做到你心中完美女友[01:22.12]所以放你走[01:24.98]千万别回头[01:26.00]我无法抑制这种贪念只能够任他发散伸展[01:29.31]在这个冰冷的世界我想索取更多的温暖[01:32.91]也许我矫情又小气[01:34.74]很自私而且难搞定[01:36.38]但如果你也喜欢我就请你千万别逃避[01:40.04]我没有更多办法[01:42.59]不能逼迫你[01:44.37]我后来遇到的每一个人[01:46.25]全部都像你[01:47.62]你的笑你的温柔你的拥抱你的眼睛[01:51.12]你的全部我都想占有该怎么去喊停[01:53.47]刘雅倩Bat：[01:54.64]过了今年我就二十岁[01:58.75]Stealing放着我就会飙泪[02:02.21]夜晚喝醉缩在被窝又为了谁[02:06.75]Future mama 难道情话说了就作废[02:09.84]呸~还分谁对[02:11.27]分手还要分个谁是谁非[02:12.95]诶难道敌对[02:14.79]两颗靠近的心被语言粉碎[02:16.55]互相折磨 彼此疲惫[02:18.91]你投放的烟雾弹我仍沉醉[02:20.17]没有长发[02:21.04]没有后妈[02:21.90]灰姑娘不需要沉睡[02:23.65]为了你不低迷[02:25.48]发誓成为Rap star[02:27.37]天不怕地不怕[02:29.14]就怕Rapeer说情话[02:30.93]你说过很多遍[02:32.49]去互联网借鉴[02:34.47]你离开好几天[02:36.11]是否电话已欠费[02:38.14]闷[02:38.96]我想要快乐但是闷[02:41.66]困[02:42.58]徘徊左右转还是困[02:44.81]为何你来了又去难道玩过就腻[02:46.79]这时间不会暂停[02:48.52]缺陷不会现行哪怕你好散又好聚[02:51.61]陈近南_范儿：[02:52.27]When i looking you[02:53.90]我能够猜出你的心事[02:55.63]When i loveing you[02:57.51]在心口刻上你的名字[02:59.31]When i touching you[03:01.09]你贴近我的耳边亲吻仿佛时间在此刻都静止[03:06.01]所以请你给我更多[03:07.89]好多问题不用去说[03:09.77]你已经够了解我可是你却难以捉摸[03:13.23]缄默的人大多数曾经历的情路坎坷[03:16.78]是谁说没心没肺的人爱的就不深刻[03:20.55]所以我宁愿放弃我的一切只想要再次和你重逢[03:23.81]我不是紫霞[03:25.30]但是我能确定你就是我的盖世英雄[03:27.58]希望你为我踏平山河[03:29.41]为我纵身一跃烈火[03:31.04]最后你一步一步踏着七彩祥云接我[03:34.46]刘雅倩Bat：[03:35.48]过了今年我就二十岁[03:38.94]Stealing放着我就会飙泪[03:42.55]夜晚喝醉缩在被窝又为了谁[03:47.02]Future mama 难道情话说了就作废[03:50.64]在黑暗中摸索 Ye iam[03:54.19]在光亮中失望 Ye iam[03:57.50]在黑暗中摸索 Ye iam[04:01.36]在光亮中失望 Ye iam[04:03.21][04:05.80]Young Life Forever~[04:11.44]陈近南Feat刘雅倩Bat.[04:17.53]后期制作From张奕\n",
	},
	{
		"name":"南得心动",
		"singer":"陈近南,杨明",
		"time":"3:09",
		"img":"http://p1.music.126.net/32eHnv5MabN6wUJS_-YRJA==/109951164767704910.jpg",
		"src":"https://public.sn.files.1drv.com/y4m6XKMsSJ_lLSLNpFwGp-XhSWnBe0ZxF7Qczjzxd0grsSY9lnCzSD5K9eh7fx_CxOaCoTPL4K6UqMw1Rjc7mE4R9sNkkm4v4vKBlHz_qLbwXQICjhZdTs5nFVl7-tVSJsVv7EbGi6W9JbgimIfmmPRmPB9fz44HcAojdOMY0GGiEHlsHYKAn-ynNwT0HD-ZjViba0ldTerNpIz4wW5GIpycKUFFU-df2RwscogrWrGrPQ?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAfNIqfBNSE8RFm%2bqAzU/gDwTTSn4y134bqTM5HARo703OmSGzIeEzo9vaIAdTSe1EMLV4D6cVTcjlBE0hqJXtFHorJftxTRkzt6mbfHcAq%2bLbOQyEWTQ9daFG6vt94YgE7hiAK8oMdqV90NNjkYPU8x93LxYHslP3siRwToeday3OLunuTs1Oyc9CcVpCCbRdBjA%2bNCh19Bd9nI%2b%2b0MOc6BQ%2b6rQQZS/mq9GhT606jd7Y1oVnjxSvTHdi1fAXZc0I1KSRHn26YLmCE1//6bjxtmAF12emiw5jdIpGQLKR%2b9tVtLQDwKlejvkuXuTZJAkBMUeh3wLGiqCnfsrOppWZ30DZgAACOJqeEslZh6k6AHydmpU8fMGblX%2bepJgLCD5mQwXLaZGdQ/Vj5INTWUbhbpW3xiD9C2Mva/Dguggwaw5xPsFNA6J2lnn%2b66g4AobFRhTE%2bW9qp1mfLMh2qQmytfDNO53BI9e482rqqkD3yt0hQbc1sRh8hTgGCtHv3NpuYhOh3YeaZklxm%2bgxQ2Xa2pXmcaAMan5tFcWwaSIAX8%2bPJb9Lg5J6RMMbuTKzhwiLr97AwVTUGfv1A9%2bMSKBIQsd/QjASySv9FcOG3cyrEk9H2AdRKKWSoHUAc2/DRAMFgYAxY1J2iM4oZjgGpI9zpfafA6uS...",
		"lrc":"[00:00.000] 作词 : 陈近南/杨明[00:01.000] 作曲 : 杨明[00:03.200]编曲：Fame-J[00:06.700]混音：李志强[00:08.950]杨明：[00:10.241]You are my candy girl[00:11.741]就牵着手[00:12.492]和你一起走[00:14.991]My only angel[00:16.491]与众不同[00:17.492]亲吻你额头[00:18.992]陈近南：[00:19.992]你像是雪夜里柔软的春天[00:22.242]温暖的细腻让我陷入疯癫[00:24.742]斑驳交织的光影在脸上明灭[00:27.242]我偏爱你令人窒息的疯狂热烈[00:29.493]我想成为你的草莓被你一口吃掉[00:32.243]收拾好你的过往从此做我的依靠[00:34.493]禁欲的药品都会因你而失效[00:36.993]我要你陪我胡闹也陪我整夜freestyle[00:39.492]吻痕当做棋子，你在我耳边呢喃[00:41.993]姹紫嫣红的颜色 身体当做棋盘[00:44.741]连早餐都要端到床上被你宠的娇纵[00:47.241]心也陪你占领 插上旗帜飘动[00:50.242]我要做你的迷妹 拼命爱你不疲惫[00:52.741]我的世界里只有你才是中间的席位[00:54.991]别的女孩没机会 困难也为你击退[00:57.742]我发誓只有你才是我的专属super boy[00:58.991]杨明:[01:00.242]我想和你去到森林里冒险[01:04.741]枕着白云入睡大海里长眠[01:10.742]抑制不住的爱在眼里镶嵌[01:14.993]无期限 一万亿光年[01:17.493]陈近南：[01:20.492]oh my pretty boy[01:21.493]你一定最棒的芭蕾舞演员才在我心尖上跳跃[01:24.493]我爱的很多你的眉眼你的微笑[01:26.993]你温柔的像天边的一轮皓月[01:29.742]有时候你并不懂 为什么我偷偷哭[01:31.992]却不问缘由的可以给我拥抱[01:34.493]以前你脾气差从不低头不服输[01:36.993]但却愿意道歉为我放弃荣耀[01:39.745]喜欢你逗我笑让我不要压抑[01:42.244]带我逃离一片荆棘的海域[01:44.494]你是吞噬我孤独的一条鲨鱼[01:47.244]我想贴近你身体亲吻你的花臂[01:49.494]也想把你变小揣进我的衣兜[01:52.245]甚至你的坏脾气我都要吸收[01:54.742]你的爱就像钻石一样晶莹剔透[01:56.741]所以我才愿意为你放弃了自由[01:57.991]杨明：[02:00.241]You are my candy girl[02:01.742]就牵着手[02:02.741]和你一起走[02:04.991]My only angel[02:06.242]与众不同[02:07.493]亲吻你额头[02:10.242]只要和你在一起[02:11.993]哪怕背叛整个宇宙[02:14.992]只要你喜欢[02:16.493]为你付出我所有[02:20.493]我想陪你走过春夏秋冬天[02:24.994]照顾你做饭洗碗收拾房间[02:30.493]足够庆幸你出现在我的面前[02:34.744]我爱你 你听不听的见[02:39.744]You are my candy girl[02:41.495]就牵着手[02:42.745]和你一起走[02:44.745]My only angel[02:46.495]与众不同[02:47.494]亲吻你额头[02:50.245]只要和你在一起[02:52.246]哪怕背叛整个宇宙[02:54.745]只要你喜欢[02:56.245]为你付出我所有[02:59.995]撒糖~~~\n",
	},*/
	{
		"name":"你要跳舞吗",
		"singer":"新裤子乐队",
		"time":"3:13",
		"img":"http://imge.kugou.com/stdmusic/150/20160407/20160407002744966139.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%91%87%E6%BB%9A/%E4%BD%A0%E8%A6%81%E8%B7%B3%E8%88%9E%E5%90%97.mp3",
		"lrc":"[id:$00000000][ti:你要跳舞吗][ar:新裤子][00:01.38]你要跳舞吗 - 新裤子[00:03.32]词：彭磊[00:04.13]曲：彭磊[00:04.97]编曲：新裤子乐队[00:17.05]每当浪潮来临的时候[00:20.26]你会不会也伤心[00:23.61]在拥挤孤独的房间里[00:26.47]我已经透不过气[00:29.35]在这冰冷无情的城市里[00:33.07]在摩登颓废的派对里[00:36.17]每当吉他噪音又响起[00:39.37]电流穿过我和你[00:42.88]你你你你要跳舞吗[00:46.14]你你你你要跳舞吗[00:49.33]你你你你要跳舞吗[00:52.56]你你你你要跳舞吗[01:08.47]每当浪潮来临的时候[01:11.31]我当然也会伤心[01:14.87]在拥挤孤独的房间里[01:17.64]我已经透不过气[01:20.61]在这冰冷无情的城市里[01:24.11]在摩登颓废的派对里[01:27.40]每当吉他噪音又响起[01:30.55]电流穿过我和你[01:33.98]你你你你要跳舞吗[01:37.29]你你你你要跳舞吗[01:40.55]你你你你要跳舞吗[01:43.78]你你你你要跳舞吗[01:47.06]你你你你要跳舞吗[01:50.08]你你你你要跳舞吗[01:53.27]你你你你要跳舞吗[01:56.44]你你你你要跳舞吗[02:24.45]你要跳舞吗[02:27.85]你要跳舞吗[02:31.04]你要跳舞吗[02:37.44]你要跳舞吗[02:40.67]你要跳舞吗[02:43.88]你要跳舞吗\n"
	},
	{
		"name":"没有理想的人不伤心",
		"singer":"新裤子乐队",
		"time":"5:41",
		"img":"http://imge.kugou.com/stdmusic/150/20160407/20160407002744966139.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%91%87%E6%BB%9A/%E6%B2%A1%E6%9C%89%E7%90%86%E6%83%B3%E7%9A%84%E4%BA%BA%E4%B8%8D%E4%BC%A4%E5%BF%83.mp3",
		"lrc":"[id:$00000000][ar:新裤子][ti:没有理想的人不伤心][by:][hash:4532bbdcb02348225611bbbd926a7832][al:][sign:][qq:][total:339864][offset:0][00:00.21]新裤子 - 没有理想的人不伤心[00:01.12]作词：彭磊[00:01.27]作曲：彭磊[00:29.94]我最爱去的唱片店[00:32.93]昨天是她的最后一天[00:36.57]曾经让我陶醉的碎片[00:40.25]全都散落在街边[00:44.41]我最爱去的书店[00:47.65]她也没撑过这个夏天[00:51.31]回忆文字流淌着怀念[00:55.00]可是已没什么好怀念[00:58.79]可是你曾经的那些梦[01:02.33]都已变得模糊看不见[01:06.02]那些为了理想的战斗[01:09.76]也不过为了钱[01:12.90]可是我最恨的那个人[01:17.11]他始终没死在我面前[01:20.79]还没年轻就变得苍老[01:24.67]这一生无解[01:27.46]没有我的空间[01:31.31]没有我的空间[01:34.75]没有我的空间[01:38.50]没有我的空间[01:43.51]你曾热爱的那个人[01:46.70]这一生也不会再见面[01:50.39]你等在这文化的废墟上[01:54.24]已没人觉得你狂野[01:57.80]那些让人敬仰的神殿[02:01.64]只在无知的人心中灵验[02:05.33]我住在属于我的猪圈[02:09.01]这一夜无眠[02:11.65]我不要在失败孤独中死去[02:15.74]我不要一直活在地下里[02:19.54]物质的骗局[02:21.86]匆匆的蚂蚁[02:23.63]没有文化的人不伤心[02:26.67]我不要在失败孤独中死去[02:30.35]我不要一直活在地下里[02:34.25]物质的骗局[02:36.68]匆匆的蚂蚁[02:38.40]没有文化的人不伤心[02:41.48]他不伤心[02:57.45]我最爱去的唱片店[03:00.55]昨天是她的最后一天[03:04.24]曾经让我陶醉的碎片[03:07.99]全都散落在街边[03:12.22]我最爱去的书店[03:15.35]她也没撑过这个夏天[03:19.04]回忆文字流淌着怀念[03:22.68]已不能怀念[03:25.57]我不要在失败孤独中死去[03:29.61]我不要一直活在地下里[03:33.30]物质的骗局[03:35.68]匆匆的蚂蚁[03:37.60]没有文化的人不伤心[03:40.44]我不要在失败孤独中死去[03:44.33]我不要一直活在地下里[03:48.07]物质的骗局[03:50.40]匆匆的蚂蚁[03:52.27]没有文化的人不伤心[03:55.31]他不伤心[04:24.90]我不要在失败孤独中死去[04:28.64]我不要一直活在地下里[04:32.53]物质的骗局[04:34.75]匆匆的蚂蚁[04:36.52]没有文化的人不伤心[04:39.51]我不要在失败孤独中死去[04:43.35]我不要一直活在地下里[04:47.20]物质的骗局[04:49.48]匆匆的蚂蚁[04:51.31]没有文化的人不伤心[04:54.39]他不会伤心[04:57.68]他不会伤心[05:01.50]他不会伤心[05:05.22]他不会伤心[05:09.22]他也会伤心[05:12.41]他也会伤心[05:16.30]他也会伤心[05:20.55]伤心\n"
	},
	{
		"name":"生活因你而火热",
		"singer":"新裤子乐队",
		"time":"4:51",
		"img":"http://imge.kugou.com/stdmusic/150/20160407/20160407002744966139.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%91%87%E6%BB%9A/%E7%94%9F%E6%B4%BB%E5%9B%A0%E4%BD%A0%E8%80%8C%E7%81%AB%E7%83%AD.mp3",
		"lrc":"[id:$00000000][ar:新裤子][ti:生活因你而火热][by:][hash:4d0fc0f2b60b3c8832afa5b8bc5e87f1][al:][sign:][qq:][total:0][offset:0][00:00.00]新裤子 - 生活因你而火热[00:01.67]词：彭磊[00:01.82]曲：彭磊[00:01.97]编曲：新裤子乐队[00:06.55]勇敢的你[00:08.26]站在这里[00:10.29]脸庞清瘦却骄傲[00:13.77]在这远方[00:15.67]没人陪伴[00:17.57]只有幻想和烦恼[00:21.31]无聊的 渺小的[00:25.00]反对不公平的世界[00:28.68]没能继续的革命[00:32.30]不欢而散的告别[00:35.96]我倒下后[00:37.83]不敢回头[00:39.77]不能再见的朋友[00:43.32]有人堕落[00:45.16]有人疯了[00:47.10]有人随着风去了[00:50.73]我难过[01:05.62]我不得不去工作[01:09.27]在大楼的一个角落[01:13.01]格子间的女孩[01:16.60]时间久了也很美[01:20.36]我会和她结婚[01:24.07]带我去小城过年[01:27.74]忘了吧那摇滚乐[01:31.40]奔腾不复的时代[01:35.01]我倒下后[01:36.85]不敢回头[01:38.85]被社会伤害的人们[01:42.36]有人堕落[01:44.26]有人疯了[01:46.17]有人随着风去了[01:49.86]那些昙花一现的灿烂[01:53.90]是爆炸的烟火[01:57.82]那一团耀眼的火焰[02:01.55]在燃烧着你和我[02:05.31]那刻骨铭心的恋爱[02:08.82]总带给我伤害[02:12.59]那平淡如水的生活[02:16.31]因为你而火热[02:48.96]勇敢的你[02:50.73]站在这里[02:52.74]脸庞清瘦却骄傲[02:56.24]在这远方[02:58.13]没人陪伴[03:00.16]只有幻想和烦恼[03:03.67]我倒下后[03:05.47]不敢回头[03:07.37]不能再见的朋友[03:11.00]有人堕落[03:12.77]有人疯了[03:14.69]有人随着风去了[03:18.44]那些昙花一现的灿烂[03:22.60]是爆炸的烟火[03:26.44]那一团耀眼的火焰[03:30.00]在燃烧着你和我[03:33.85]那刻骨铭心的恋爱[03:37.42]总带给我伤害[03:41.18]那平淡如水的生活[03:44.83]因为你而火热[04:10.32]那些昙花一现的灿烂[04:14.29]是爆炸的烟火[04:18.11]那一团耀眼的火焰[04:21.73]在燃烧着你和我[04:25.47]那刻骨铭心的恋爱[04:29.21]总带给我伤害[04:32.93]那平淡如水的生活[04:36.61]因为你而火热\n"
	},
	{
		"name":"别再问我什么是迪斯科",
		"singer":"新裤子乐队",
		"time":"3:22",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909115347785952.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%91%87%E6%BB%9A/%E5%88%AB%E5%86%8D%E9%97%AE%E6%88%91%E4%BB%80%E4%B9%88%E6%98%AF%E8%BF%AA%E6%96%AF%E7%A7%91.mp3",
		"lrc":"[id:$00000000][ar:新裤子][ti:别再问我什么是迪斯科(Live)][by:][hash:30e52b73217bdf0f8b60acb67d34030d][al:][sign:][qq:][total:202968][offset:0][00:00.46]新裤子 - 别再问我什么是迪斯科(Live)[00:01.42]作词：彭磊[00:01.57]作曲：彭磊[00:01.77]编曲：新裤子[00:01.97]主唱：彭磊[00:02.12]键盘：庞宽[00:02.28]贝司：赵梦[00:02.43]鼓：Hayato[00:40.21]打开录音机[00:41.73]打开唱片机[00:43.30]让音乐开始[00:44.86]让节奏不停[00:46.54]不要不理我[00:48.06]不要讨厌我[00:49.68]我不是电脑[00:51.26]我不是国王[00:52.89]每当迪斯科音乐又响起[00:56.03]假装我们还是在一起[00:59.17]你能听到我的心在咚咚跳[01:02.50]你却假装什么也不知道[01:18.62]打开录音机[01:20.15]打开唱片机[01:21.72]让音乐开始[01:23.24]让节奏不停[01:24.87]不要不理我[01:26.54]不要讨厌我[01:28.11]我不是电脑[01:29.73]我不是国王[01:31.26]每当迪斯科音乐又响起[01:34.46]假装我们还是在一起[01:37.66]你能听到我的心在咚咚跳[01:40.82]你却假装什么都不知道[01:43.35]迪斯科[01:46.02]怎么可能不知道[01:49.72]迪斯科[01:52.57]怎么可能都忘掉[02:21.82]迪斯科[02:24.89]迪斯科[02:28.08]迪斯科[02:31.32]迪斯科[02:34.52]迪斯科[02:37.66]迪斯科[02:40.91]迪斯科[02:44.20]迪斯科\n"
	},
	/*{
		"name":"热爱105°C的你",
		"singer":"新裤子乐队",
		"time":"4:20",
		"src":"https://public.sn.files.1drv.com/y4mnUmkoYn6d3alMZ3QtfqbSlIYAyuC7tSd3ribXMY5hF4aFPNoQ_Xe4t5PraevNqdj2lxR_-wHr5RYPixVlNgHGTKHdoCiGTEs1rasRY5sak3LIaqiGVMCHRBXc21UdIzUmr_YZj8J9yVwhussuTBzcmUnjj62DHo5D9XfggkJZzZoNunXHqZ8PVKalw3AW7XQWgyfwErbyuQ0JqyYCzgL-JsKbkpij8EBUokPTJoIBow?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAQ/p4hSINjOoT57DeN7uwf2/jIobX3JEY1wzye/uhFeEC0vGUK0v0AX%2bVsVvhQ5rSMqwofoFBuZn0b6ea1WJVxIPg96CRAfnz0/KwXz4LEszfwvOrl%2bVnJ40JPDZHYB0QyecR6pf1JvoO/ij3E6oPp1FPMsTKCH8nSUDcoJqE/42Bz0f8Sv4xl%2bPg8oRlxJuEt0FZGjinrFKGVoi12VcsSelw5sIu4FqOdWaBCdPnXMlR1kK3FvEPr7swt4iM0cbAAjsB/3ubpnfWBvB6c9hxdtJZhpBa9i2sTVix3Ry9qyFlV2XtuvDMlPRRTKhCDTThhcAGI5t/OFFFga5UhFXl1wDZgAACNKSOTGEs5RP6AHOjYvgRMKk9OYB4abVGa590tEZ5XXcWSm8vdAslqthNbNf98eNUmPOEFv6I9lPDcHyq4YT6a6R32kqKbmiWLVGaSgX/G6d8HbN29uj4CdNTRf0Uzdd8TRxH6A1Fd8i6JeyBH4DKmhezsb9KrT1GfKbYbdswlMo2sJKcLszwshn0wRxNxioMnxS0mpvOeSKqUabhO%2b6HEox6GAK%2bdK1sUBKkZxgvDs3X5BSOOkQYaVmYYyPJQafDyM7AuHum%2bwoqTGj3UIyPzT8EyTN%2bk30PU5L%2bwMKG85l5gFJWX/QhScFwNeOdMxvRkbYp97mTkb...",
		"lrc":"[id:$00000000][ar:新裤子、痛仰乐队、五条人、重塑雕像的权利、零乐队][ti:热爱105℃的你(Live)][by:][hash:e9aeba793954f845a42b06d41a46bb34][al:][sign:][qq:][total:260257][offset:0][00:00.31]新裤子、痛仰乐队、五条人、重塑雕像的权利、零乐队 - 热爱105℃的你(Live)[00:01.62]作词：阿肆[00:01.77]作曲：阿肆[00:23.75]Super Idol的笑容[00:25.22]都没你的甜[00:26.89]八月正午的阳光[00:28.66]都没你耀眼[00:30.28]热爱 105 °C的你[00:32.97]滴滴清纯的蒸馏水[00:59.75]Super Idol[01:03.08]Super Idol[01:06.49]正午的阳光[01:10.01]正午的阳光[01:13.59]105 °C的你[01:16.89]清纯蒸馏水[01:23.74]Super Idol[01:25.31]Super Idol[01:30.59]Super Idol[01:32.11]Super Idol[01:59.64]Super Idol的笑容[02:01.32]都没你的甜[02:02.89]八月正午的阳光[02:04.72]都没你耀眼[02:06.23]热爱 105 °C的你[02:09.01]滴滴清纯的蒸馏水[02:13.23]在这独一无二[02:14.59]属于我的时代[02:16.62]不怕失败来一场[02:18.40]痛快的热爱[02:20.02]热爱 105°C的你[02:22.72]滴滴清纯的蒸馏水[02:58.05]Super Idol的笑容[02:59.61]都没你的甜[03:01.35]Super Idol的笑容[03:02.92]都没你的甜[03:04.64]Super Idol的笑容[03:06.37]都没你的甜[03:08.13]都没你的甜[03:11.33]Super Idol的笑容[03:13.25]都没你的甜[03:14.93]Super Idol的笑容[03:16.66]都没你的甜[03:18.38]Super Idol的笑容[03:20.06]都没你的甜[03:21.83]都没你的甜\n"
	},
	{
		"name":"花火",
		"singer":"新裤子乐队",
		"time":"4:14",
		"img":"http://imge.kugou.com/stdmusic/150/20200909/20200909120813337462.jpg",
		"src":"https://public.sn.files.1drv.com/y4m3IkAI9Q3ZXGVrHONQ1X6A1aM7Zv3_7xVc-lqyosce0mNOySB659FUuw7XNN7LcaXNvmd4XpUu0tvY3Xtwqb01H_SthM_Ttj5I9fXFuad5tgGBJH0Unt2tx-ZurWoYZQNr-k2xYR-pg8xenSYeK73kAZ-cQpFTvochJpi8RQ5FcqSKlfsW_XURtz-P8HtaM9MtImvvUGUZKodn-9W6DOxeJ5khTq5DVrCcv2e-33Saj4?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAAQ/p4hSINjOoT57DeN7uwf2/jIobX3JEY1wzye/uhFeEC0vGUK0v0AX%2bVsVvhQ5rSMqwofoFBuZn0b6ea1WJVxIPg96CRAfnz0/KwXz4LEszfwvOrl%2bVnJ40JPDZHYB0QyecR6pf1JvoO/ij3E6oPp1FPMsTKCH8nSUDcoJqE/42Bz0f8Sv4xl%2bPg8oRlxJuEt0FZGjinrFKGVoi12VcsSelw5sIu4FqOdWaBCdPnXMlR1kK3FvEPr7swt4iM0cbAAjsB/3ubpnfWBvB6c9hxdtJZhpBa9i2sTVix3Ry9qyFlV2XtuvDMlPRRTKhCDTThhcAGI5t/OFFFga5UhFXl1wDZgAACNKSOTGEs5RP6AHOjYvgRMKk9OYB4abVGa590tEZ5XXcWSm8vdAslqthNbNf98eNUmPOEFv6I9lPDcHyq4YT6a6R32kqKbmiWLVGaSgX/G6d8HbN29uj4CdNTRf0Uzdd8TRxH6A1Fd8i6JeyBH4DKmhezsb9KrT1GfKbYbdswlMo2sJKcLszwshn0wRxNxioMnxS0mpvOeSKqUabhO%2b6HEox6GAK%2bdK1sUBKkZxgvDs3X5BSOOkQYaVmYYyPJQafDyM7AuHum%2bwoqTGj3UIyPzT8EyTN%2bk30PU5L%2bwMKG85l5gFJWX/QhScFwNeOdMxvRkbYp97mTkb...",
		"lrc":"[id:$00000000][ar:新裤子][ti:花火][by:v_yyccchen][00:00.00]新裤子 - 花火(Live)[00:02.82]原唱：汪峰[00:03.58]词：汪峰[00:04.21]曲：汪峰[00:04.85]OP/SP：亚洲华纳（北京）音乐娱乐咨询有限公司[00:08.32]编曲/制作人：新裤子[00:09.93]乐队：新裤子[00:10.87]主唱/吉他：彭磊[00:12.15]键盘：庞宽[00:12.95]贝斯：赵梦[00:13.78]鼓：Hayato[00:32.77]这是一场没有结局的表演[00:38.27]包含所有荒谬和疯狂[00:46.70]像个孩子一样满怀悲伤[00:52.59]静悄悄地睡在大地上[00:59.70]现在我 有些倦了[01:06.78]倦得像一朵被风折断的野花[01:13.91]所以我 开始变了[01:21.12]变得像一团滚动炽热的花火[01:43.86]看着眼前欢笑骄傲的人群[01:49.32]心中泛起汹涌浪花[01:57.78]跳着放荡的舞蹈穿行在旷野[02:03.59]感到狂野 破碎辉煌[02:10.84]现在我 有些醉了[02:17.99]醉得像一只找不到方向的野鸽[02:25.06]所以我 开始变了[02:32.23]变得像一团暴烈炽热的花火[03:22.13]现在我 有些醉了[03:29.12]醉得像一只找不到方向的野鸽[03:35.99]所以我 开始变了[03:43.26]变得像一团暴烈炽热的花火\n"
	},*/
	{
		"name":"你都忘了你有多美",
		"singer":"新裤子乐队",
		"time":"3:06",
		"img":"http://imge.kugou.com/stdmusic/150/20210315/20210315103002357555.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%91%87%E6%BB%9A/%E4%BD%A0%E9%83%BD%E5%BF%98%E4%BA%86%E4%BD%A0%E6%9C%89%E5%A4%9A%E7%BE%8E.mp3",
		"lrc":"[id:$00000000][ar:新裤子][ti:你都忘了你有多美][by:][hash:d9e8bca66a88755663de68b6a43a51b0][al:][sign:][qq:][total:186488][offset:0][00:00.06]新裤子 - 你都忘了你有多美[00:00.92]作词：彭磊[00:01.12]作曲：彭磊[00:01.53]编曲：新裤子[00:15.62]停留在空荡的车站里[00:19.54]看着外面的烟雨[00:23.08]陌生音乐又响起[00:26.62]你等的人他在哪里[00:30.41]旅客们匆匆的离去[00:33.95]下一站不知要去哪里[00:37.64]冷冷凄风迷住眼睛[00:41.38]你爱的人他已变心[00:45.09]亲爱的你不要伤心[00:48.76]回忆列车就要离去[00:52.40]就算是他又伤害你[00:56.40]你也可以把他抛弃[01:14.69]停留在空荡的车站里[01:18.48]看着外面的烟雨[01:22.13]陌生音乐又响起[01:25.66]你等的人他在哪里[01:29.34]旅客们匆匆的离去[01:33.03]下一站不知要去哪里[01:36.86]冷冷凄风迷住眼睛[01:40.50]你爱的人他已变心[01:44.14]亲爱的你不要伤心[01:47.87]回忆列车就要离去[01:51.46]就算是他又伤害你[01:55.40]你也可以把他抛弃[01:58.82]亲爱的你不要伤心[02:02.52]回忆列车就要离去[02:06.22]就算是他又欺骗你[02:09.98]也不过又是一场戏[02:13.81]啊你都忘了你有多美[02:18.60]冷冷风雨把眼泪吹[02:22.25]你都忘了你有多美[02:25.55]你这样哭泣为了谁\n"
	},
	{
		"name":"西湖",
		"singer":"痛仰乐队",
		"time":"4:14",
		"img":"http://p1.music.126.net/1f7NwezJUZ_Ewpd070oYaQ==/30786325592070.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%97%9B%E4%BB%B0%E4%B9%90%E9%98%9F%20-%20%E8%A5%BF%E6%B9%96.mp3",
		"lrc":"[00:22.88]行船入三潭[00:26.00]嬉戏着湖水[00:29.42]微风它划不过轻舟[00:34.19]时而又相远[00:37.59]时而又相连[00:40.45]断桥何曾踏过残雪[00:45.60]再也没有留恋的斜阳[00:50.40]再也没有倒映的月亮[00:56.49]再也没有醉人的暖风[01:02.07]转眼消散在云烟[01:30.10]单车过长堤[01:33.32]欢歌笑语[01:36.39]一路却错看了风景[01:41.44]望不到云河[01:44.10]也望不到天际[01:47.62]流星刹那已然掠过[01:52.35]再也没有留恋的斜阳[01:58.40]再也没有倒映的月亮[02:04.43]再也没有醉人的暖风[02:10.61]转眼消散在云烟[02:16.36]那一天那一夜[02:21.35]那一天[02:23.14]那一天那一夜[02:28.40][02:34.20]没有察觉竟已走远[03:24.80]那一天那一夜[03:29.68]那一天[03:34.07]那一天那一夜[03:41.28]没有察觉竟已走远[03:47.17]那一天那一夜[03:52.30]从我的故事里走远\n",
	},
	{
		"name":"假如生活欺骗了你",
		"singer":"新裤子乐队",
		"time":"3:06",
		"img":"http://imge.kugou.com/stdmusic/150/20210901/20210901190204467754.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E6%91%87%E6%BB%9A/%E5%81%87%E5%A6%82%E7%94%9F%E6%B4%BB%E6%AC%BA%E9%AA%97%E4%BA%86%E4%BD%A0.mp3",
		"lrc":"[id:$00000000][ar:新裤子][ti:假如生活欺骗了你][by:][hash:922f64cc3d5562ee41a5476ce989b49e][al:][sign:][qq:][total:232080][offset:0][00:00.47]新裤子 - 假如生活欺骗了你[00:01.43]作词：普希金、彭磊[00:01.74]作曲：彭磊[00:01.94]编曲：李满 、新裤子[00:02.24]主唱：彭磊[00:02.40]吉他：彭磊[00:02.60]键盘：庞宽[00:02.80]贝斯：赵梦[00:02.95]鼓：HAYATO[00:03.05]录音：张璐[00:03.26]混音：李满[00:03.46]母带工程：THE EXCHANGE London[00:03.83]音乐统筹：郭栋楠@青春光线[00:14.58]假如生活欺骗了你[00:17.83]不要悲伤的哭泣[00:21.42]孤独忧郁的日子里[00:24.95]相信这冬季会远去[00:28.68]心灵放逐的荒野[00:32.07]你的爱依然热烈[00:35.66]生活不过是玩笑[00:39.26]一切都将会过去[00:42.81]每次崩溃的时候[00:46.15]我们又分离[00:49.94]孤独狂欢的夜里[00:53.39]你又在哪里[00:57.15]假如这冷酷的生活[01:00.25]又欺骗了你[01:04.22]那些亲切的怀恋[01:07.50]在拥抱着你[01:25.64]假如生活欺骗了你[01:28.98]不要悲伤的哭泣[01:32.53]孤独忧郁的日子里[01:36.07]相信这冬季会远去[01:39.72]心灵放逐的荒野[01:43.21]你的爱依然热烈[01:46.81]生活不过是玩笑[01:50.25]一切都将会过去[01:53.85]每次崩溃的时候[01:57.34]我们又分离[02:01.08]孤独狂欢的夜里[02:04.47]你又在哪里[02:08.17]假如这冷酷的生活[02:11.40]又欺骗了你[02:15.29]那些亲切的怀恋[02:18.49]在拥抱着你[02:26.04]当记忆里的人都离去[02:29.88]我的世界里只剩下你[02:33.33]如果生活把我抛弃[02:36.42]你不要哭泣[02:40.11]当记忆里的人都离去[02:44.10]我的世界里只剩下你[02:47.75]如果生活把我抛弃[02:50.63]你不要哭泣\n"
	},
	{
		"name":"爱在夏天",
		"singer":"告五人",
		"time":"6:20",
		"img":"http://p2.music.126.net/PlRQ5L8bo8FAuoL5T8vWoA==/109951163304680451.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%91%8A%E4%BA%94%E4%BA%BA%20-%20%E7%88%B1%E5%9C%A8%E5%A4%8F%E5%A4%A9.mp3",
		"lrc":"[00:00.00] 作词 : 潘燕山[00:01.00] 作曲 : 潘燕山[00:03.34]他 就活在我心上[00:06.77][00:08.12]撑着一把伞[00:09.91][00:11.18]就站在我梦旁[00:13.89][00:15.45]我的头发[00:17.09][00:17.95]有月光的柔长[00:19.98][00:20.89]却圈不起[00:22.97][00:24.13]一朵云的形状[00:26.76][00:28.97]他 两颊发着光[00:32.29][00:33.66]眼神是迷茫[00:35.61][00:36.61]却留给我想象[00:39.44][00:40.89]怎样的美梦[00:42.56][00:43.31]才不会醒呢[00:45.14][00:46.41]如今的夏天[00:48.34][00:49.62]花都开好了[00:52.23][00:54.64]我们的爱在 萤火虫的夏天[01:00.75][01:01.71]时间 就像那盛开的睡莲[01:06.15][01:07.65]只是那一切就像蜻蜓点水[01:12.05][01:13.98]于是那阳光悄悄的[01:17.64][01:18.93]唤醒了黑夜[01:20.99][01:45.71]他 两颊发着光[01:49.20][01:50.43]眼神是迷茫[01:52.35][01:53.41]却留给我想象[01:56.27][01:57.60]怎样的美梦[01:59.41][02:00.01]才不会醒呢[02:02.06][02:03.27]如今的夏天[02:05.22][02:06.44]花都开好了[02:09.05][02:11.32]我们的爱在 萤火虫的夏天[02:17.58][02:18.44]时间 就像那盛开的睡莲[02:22.93][02:24.46]只是那一切就像蜻蜓点水[02:28.94][02:30.89]于是那阳光悄悄的[02:34.40][02:35.59]唤醒了黑夜[02:37.73][02:42.55]就在某年某月的某一天[02:45.58]我来到陌生的巷子口[02:48.51][02:49.06]我看到一个熟悉的背影降落[02:55.12]那是花开花落日升日落的悸动[03:00.92][03:02.18]蓦然回首 爱在耳后[03:08.11][03:37.86]我们的爱在 萤火虫的夏天[03:43.98][03:44.80]时间 就像那盛开的睡莲[03:49.23][03:50.85]只是那一切就像蜻蜓点水[03:55.22][03:57.19]于是那阳光悄悄的[04:00.80][04:02.03]唤醒了黑夜[04:04.29]我们的爱在 萤火虫的夏天[04:09.61][04:10.46]时间 就像那盛开的睡莲[04:14.89][04:16.54]只是那一切就像蜻蜓点水[04:20.74][04:22.98]于是那阳光[04:24.94][04:27.74]唤醒了黑夜\n"
	},
	{
		"name":"如风",
		"singer":"王菲",
		"time":"4:33",
		"img":"http://p2.music.126.net/HBYVyL--ayNYl8q3JJHWBw==/109951166225821654.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%8E%8B%E8%8F%B2-%E5%A6%82%E9%A3%8E.mp3",
		"lrc":"[00:00.00] 作词 : 林振强[00:01.00] 作曲 : 张宇[00:02.00] 编曲 : 卢东尼[00:19.50]有一个人[00:21.50]曾让我知道[00:26.50]寄生於世上[00:29.50]原是那么好[00:34.50]他的一双臂弯[00:37.50]令我没苦恼[00:41.50]他使我自豪[00:47.00]我跟那人[00:50.00]曾互勉倾诉[00:56.00]也跟他笑望[00:58.00]长夜变清早[01:04.00]可惜他必须要走[01:05.00]剩我共身影[01:09.00]长夜里拥抱[01:15.00]来又如风 离又如风[01:19.00]或世事通通不过是场梦[01:22.00]人在途中 人在时空[01:27.00]相识也许不过擦过梦中[01:30.00]来又如风 离又如风[01:35.00]或我亦不应再这般心痛[01:40.00]但我不过[01:42.00]是人非梦[01:43.99]总有些真笑[01:46.29]亦有真痛[02:23.30]来又如风 离又如风[02:27.30]或世事通通不过是场梦[02:31.30]人在途中 人在时空[02:35.30]相识也许不过擦过梦中[02:39.30]来又如风 离又如风[02:44.30]或我亦不应再这般心痛[02:48.30]但我不过[02:51.30]是人非梦[02:52.90]总有些真笑[02:55.50]亦有真痛[03:01.40]有一个人[03:03.00]曾让我知道[03:08.70]寄生於世上[03:11.70]原是那么好[03:17.20]可惜他必须要走[03:20.20]剩我共身影[03:23.20]长夜里拥抱[03:28.20]来又如风 离又如风[03:32.20]或世事通通不过是场梦[03:36.20]人在途中 人在时空[03:41.20]相识也许不过擦过梦中[03:44.20]来又如风 去亦匆匆[03:49.20]或我亦不应再这般心痛[03:53.20]但我不过[03:55.20]是人非梦[03:58.20]总有些真笑[03:59.20]亦有真痛[04:04.20]让我心痛[04:06.20]独迎空洞[04:08.20]今天暖风吹过亦有点冻\n"
	},
	{
		"name":"阿拉斯加海湾",
		"singer":"蓝心羽",
		"time":"3:57",
		"img":"http://p1.music.126.net/CbWwREaA22LmAv1oOtJt2w==/109951165518862422.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E8%93%9D%E5%BF%83%E7%BE%BD%20-%20%E9%98%BF%E6%8B%89%E6%96%AF%E5%8A%A0%E6%B5%B7%E6%B9%BE.mp3",
		"lrc":"[00:00.00] 作词 : 菲道尔/李康宁[00:00.29] 作曲 : 菲道尔[00:00.59]原唱：菲道尔[00:01.60]演唱：蓝心羽[00:02.60]编曲：于山川@Cstudio[00:03.60]贝斯：石间@Cstudio[00:04.60]吉他：丁兆尊龙[00:05.35]和声编写：田跃君[00:06.36]和声：蓝心羽[00:07.10]混音：王巍MOKA[00:08.11]制作人：杜叔叔[00:09.10]策划统筹：文氓苏[00:10.10]宣发：张婧、寂瞳、游文雅、杜钰雯[00:10.85]OP：Loolala Music M Sdn. Bhd.[00:11.77]SP：环球音乐版权管理集团(Universal Music Publishing CHINA)[00:13.19]音乐制作：极韵文化&BLUE STUDIO[00:14.44]音乐发行：极韵文化&BLUE STUDIO[00:15.44]出品：「极韵文化」×「BLUE STUDIO」×「造音行动」[00:16.69]【此版本为正式授权翻唱作品】[00:21.95]上天啊[00:24.99]难道你看不出我很爱她[00:29.11]怎么明明相爱的两个人[00:32.56]你要拆散他们啊[00:38.73]上天啊[00:41.63]你千万不要偷偷告诉她[00:45.94]在无数夜深人静的夜晚[00:49.55]有个人在想她[00:54.71]以后的日子你要好好照顾她[01:03.08]我不在她身旁你不能欺负她[01:11.20]别再让人走进她心里[01:15.67]最后却又离开她[01:20.53]因为我不愿再看她流泪啦[01:41.26]上天啊[01:44.25]你是不是在偷偷看笑话[01:48.34]明知我还没能力保护她[01:52.11]让我们相遇啊[01:58.14]上天啊[02:00.86]她最近是否不再失眠啦[02:05.10]愿世间温情化作一缕风[02:08.80]代替我拥抱她[02:14.06]以后的日子你要好好照顾她[02:22.28]我不在她身旁你不能欺负她[02:30.55]别再让人走进她心里[02:34.67]最后却又离开她[02:39.92]因为我不愿再看她流泪啦[02:47.49]希望我的努力能够赶上她[02:55.71]有天我能给她完整的一个家[03:04.11]可若你安排了别人给她[03:09.09]我会祝福她[03:12.93]上天你别管我先让她幸福吧[03:21.33]上天啊[03:24.39]这些晚上我对你说的话[03:28.61]你别不小心漏嘴告诉她[03:32.30]我怕会吵醒她[03:38.33]上天啊[03:41.42]你千万不要偷偷告诉她[03:45.58]在无数夜深人静的夜晚[03:49.24]我依旧在想她\n"
	},
	{
		"name":"如愿",
		"singer":"王菲",
		"time":"4:25",
		"img":"https://imgessl.kugou.com/stdmusic/20210924/20210924225802830393.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%8E%8B%E8%8F%B2-%E5%A6%82%E6%84%BF.mp3",
		"lrc":"[id:$00000000][ar:王菲][ti:如愿][by:][hash:0d19ac1d09d8df602b95b236d7dc02a3][al:][sign:][qq:][total:265430][offset:0][00:00.06]王菲 - 如愿 (电影《我和我的父辈》主题推广曲)[00:01.17]作词：唐恬[00:01.66]作曲：钱雷[00:02.18]编曲：钱雷[00:02.79]制作人：钱雷[00:03.44]配唱制作：窦颖、林灵[00:04.26]和音：窦颖、林灵[00:05.00]吉他：高飞[00:05.48]吉他录音：时俊峰@福达录音棚[00:07.15]Bass：李卓[00:07.76]小号：李博[00:08.20]弦乐编写、监制：胡静成[00:09.43]小提琴：张浩、侯宇虹[00:10.48]中提琴：毕芳[00:10.92]大提琴：郎莹[00:11.47]弦乐：国际首席爱乐乐团[00:12.64]弦乐录音：王小四@金田录音棚[00:14.32]人声录音师：钱雷、杨惠琳@Studio 21A[00:16.11]人声录音棚A：RMB Studio爆棚@奔跑怪物[00:18.19]人声录音棚B：Studio 21A Beijing[00:19.50]Vocal edite：汝文博@SBMS Beijing[00:20.52]混音、母带：赵靖BIG.J@SBMS Beijing[00:21.78]曲版权管理方：索尼音乐版权代理（北京）有限公司[00:31.40]你是 遥遥的路[00:34.65]山野大雾里的灯[00:39.62]我是孩童啊 走在你的眼眸[00:45.69]你是 明月清风[00:49.05]我是你照拂的梦[00:54.08]见与不见都一生 与你相拥[00:59.83]而我将 爱你所爱的人间[01:04.02]愿你所愿的笑颜[01:07.45]你的手我蹒跚在牵[01:11.10]请带我去明天[01:14.23]如果说 你曾苦过我的甜[01:18.51]我愿活成你的愿[01:21.90]愿不枉啊 愿勇往啊[01:25.44]这盛世每一天[01:59.77]你是 岁月长河[02:03.05]星火燃起的天空[02:08.11]我是仰望者 就把你唱成歌[02:14.19]你是 我之所来[02:17.52]也是我心之所归[02:22.54]世间所有路都将 与你相逢[02:28.24]而我将 爱你所爱的人间[02:32.38]愿你所愿的笑颜[02:35.83]你的手我蹒跚在牵[02:39.33]请带我去明天[02:42.67]如果说 你曾苦过我的甜[02:46.92]我愿活成你的愿[02:50.06]愿不枉啊 愿勇往啊[02:53.77]这盛世每一天[02:58.84]山河无恙 烟火寻常[03:02.59]可是你如愿的眺望[03:06.04]孩子们啊 安睡梦乡[03:09.94]像你深爱的那样[03:18.73]而我将 梦你所梦的团圆[03:22.88]愿你所愿的永远[03:26.57]走你所走的长路[03:30.01]这样的爱你啊[03:33.15]我也将 见你未见的世界[03:37.35]写你未写的诗篇[03:40.74]天边的月 心中的念[03:44.38]你永在我身边[03:49.75]与你相约 一生清澈[03:54.09]如你年轻的脸\n"
	},
	{
		"name":"匆匆那年",
		"singer":"王菲",
		"time":"4:01",
		"img":"http://p2.music.126.net/YCq17CaVbRTyFtJG6G5oDg==/7816428162584348.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%8E%8B%E8%8F%B2%20-%20%E5%8C%86%E5%8C%86%E9%82%A3%E5%B9%B4.mp3",
		"lrc":"[00:00.00] 作词 : 林夕[00:01.00] 作曲 : 梁翘柏[00:02.00] 编曲 : 梁翘柏[00:03.00] 制作人 : 梁翘柏[00:28.49]匆匆那年我们[00:29.74]究竟说了几遍[00:31.20]再见之后再拖延[00:34.05]可惜谁有没有[00:35.31]爱过不是一场[00:36.73]七情上面的雄辩[00:39.88]匆匆那年我们[00:41.04]一时匆忙撂下[00:42.40]难以承受的诺言[00:45.25]只有等别人兑现[00:51.12]不怪那吻痕还[00:53.67]没积累成茧[00:56.46]拥抱着冬眠也没能[00:59.81]羽化再成仙[01:02.09]不怪这一段情[01:04.88]没空反复再排练[01:07.67]是岁月宽容恩赐[01:11.92]反悔的时间[01:18.73]如果再见不能红着眼[01:21.77]是否还能红着脸[01:24.71]就像那年匆促[01:26.04]刻下永远一起[01:27.44]那样美丽的谣言[01:29.88]如果过去还值得眷恋[01:33.04]别太快冰释前嫌[01:35.88]谁甘心就这样[01:38.76]彼此无挂也无牵[01:41.59]我们要互相亏欠[01:47.17]要不然凭何怀缅[01:58.53]匆匆那年我们[01:59.74]见过太少世面[02:01.20]只爱看同一张脸[02:04.07]那么莫名其妙[02:05.37]那么讨人欢喜[02:06.79]闹起来又太讨厌[02:09.71]相爱那年活该[02:10.96]匆匆因为我们[02:12.41]不懂顽固的诺言[02:15.28]只是分手的前言[02:20.99]不怪那天太冷[02:23.67]泪滴水成冰[02:26.54]春风也一样没[02:29.33]吹进凝固的照片[02:32.18]不怪每一个人[02:34.93]没能完整爱一遍[02:37.82]是岁月善意落下[02:41.90]残缺的悬念[02:48.72]如果再见不能红着眼[02:51.81]是否还能红着脸[02:54.70]就像那年匆促[02:56.06]刻下永远一起[02:57.49]那样美丽的谣言[02:59.73]如果过去还值得眷恋[03:03.17]别太快冰释前嫌[03:05.90]谁甘心就这样[03:08.74]彼此无挂也无牵[03:10.99]如果再见不能红着眼[03:14.46]是否还能红着脸[03:17.24]就像那年匆促[03:18.51]刻下永远一起[03:19.98]那样美丽的谣言[03:22.31]如果过去还值得眷恋[03:25.68]别太快冰释前嫌[03:28.42]谁甘心就这样[03:31.20]彼此无挂也无牵[03:34.06]我们要互相亏欠[03:39.64]我们要藕断丝连[03:57.64]键盘 : 梁翘柏[03:58.04]钢琴 : 何秉舜[03:58.14]吉他 : 黄仲贤[03:58.24]贝斯 : 鲸仔[03:58.34]鼓手 : 郝稷伦[03:58.44]和声 : 窦颖[03:58.54]弦乐编写 : 何秉舜[03:58.64]弦乐 : 中国爱乐乐团[03:59.04]第一小提琴 : 陈允 / 吴阳 / 曾诚 / 刘睿[03:59.14]第二小提琴 : 简蓓 / 王欣 / 崔小蕾 / 佟婓 / 陈猷翔 / 刘媛元[03:59.24]中提琴 : 张安祥 / 毛新光 / 李纪泽 / 孙音音[03:59.34]大提琴 : 赵云鹏 / 吴瑕 / 刘宇东 / 杨长缨[03:59.44]大提琴独奏 : 朱亦兵[03:59.54]小提琴独奏 : 曾诚[03:59.64]录音棚 : 水瓶座 (北京) / Avon Studios (香港) / 狂喜 (北京) / 中国歌剧舞剧院录音棚 / 乐坊录音室 (北京)[04:00.24]录音师 : 林梦洋 / 阿铭 / 崔禄 / 李军[04:00.34]混音师 : Simon Li @nOiz[04:00.44]梁翘柏OP : OP of Kubert Leung Musichic LTD.[04:00.54]AlbertOP : OP of Lin Xi Denseline Co. Limited (Warner/Chappell Music H.K. Limited)[04:00.64]AlbertSP : SP of Lin Xi Warner/Chappell Music Publishing Agency (Beijing) Ltd.\n"
	},
	{
		"name":"百利甜",
		"singer":"魏晗（懋懋）",
		"time":"3:27",
		"img":"http://p1.music.126.net/6rdyULsXSI3_14yoY_ZU5w==/109951164080022322.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%99%BE%E5%88%A9%E7%94%9C-%E6%87%8B%E6%87%8B.mp3",
		"lrc":"[00:00.00] 作词 : 单色凌[00:00.18] 作曲 : 单色凌[00:00.37] 编曲 : keyi@单色凌工作室[00:00.56] 制作人 : 单色凌[00:00.75] Rap : 单色凌[00:00.94] 和声 : 单色凌 keyi[00:01.13] 录音 : 喃喃[00:01.32] 混音 : 廖国钺[00:01.51] 监制 : 单色凌[00:01.70] 制作公司 : Hikoon Music[00:01.89] OP : 嗨库文化[00:02.87]我可能是迷了路[00:07.29]反反复复地无助[00:11.86]我才发现 浪荡的态度[00:15.48]能放走 清醒时的拘束[00:20.96]喜怒哀乐 由不得我[00:25.47]还有温度 还似迷途[00:30.20]牵过的手 存放的礼物[00:33.80]并不会引起她的嫉妒[00:37.99]喝了一口 Baileys 像上瘾的毒[00:42.35]一点一点 将故事 画一个淡出[00:46.88]再来一口 视线模糊 心DOWN DOWN DOWN[00:52.13]迎合流星坠落的音符[00:56.13]再喝一口 Baileys 恍恍又惚惚[01:00.68]一字一句 无理取闹的舒服[01:05.16]把这烦恼 从太空抛下去 DOWN DOWN DOWN[01:10.44]原来清醒了才是幸福[01:15.69][01:33.95]它  还在飞  它 还在飞[01:36.01]失去的从来都不想去追[01:38.31]不属于我的 不纯粹[01:40.58]没关系我 自己去面对[01:42.91]第一天 第二天 第三天[01:44.67]一点一点 一天一天[01:47.63]总归是 要忘记 甜蜜的 难过的 所谓[01:52.14]我可能是迷了路[01:57.03]反反复复地无助[02:01.54]我才发现 浪荡的态度[02:05.21]能放走 清醒时的拘束[02:10.84]喜怒哀乐 由不得我[02:15.19]还有温度 还似迷途[02:19.78]牵过的手 存放的礼物[02:23.55]并不会引起她的嫉妒[02:27.54]喝了一口 Baileys 像上瘾的毒[02:32.07]一点一点 将故事 画一个淡出[02:36.63]再来一口 视线模糊 心DOWN DOWN DOWN[02:41.86]迎合流星坠落的音符[02:45.80]再喝一口 Baileys 恍恍又惚惚[02:50.34]一字一句 无理取闹的舒服[02:54.90]把这烦恼 从太空抛下去 DOWN DOWN DOWN[03:00.12]原来清醒了才是幸福[03:05.79]我可能是迷了路[03:10.16]反反复复地无助[03:14.62]我才发现 浪荡的态度[03:18.30]能放走 清醒时的拘束\n"
	},
	{
		"name":"Sealed With A Kiss(以吻封缄)",
		"singer":"Dana Winner",
		"time":"3:11",
		"img":"http://p1.music.126.net/NVosqd0wGUTq4vAilYzp3Q==/2465105069489195.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Sealed%20With%20A%20Kiss%28%E4%BB%A5%E5%90%BB%E5%B0%81%E7%BC%84%29.mp3",
		"lrc":"[00:25.84]Though we gotta say goodbye for the summer[00:32.71]Baby I promise you this[00:36.83]I'll send you all my love everyday in a letter[00:44.37]Sealed with a kiss[00:47.57]Yes it's gonna be a cold lonely summer[00:54.49]But I'll fill the emptiness[00:58.80]I'll send you all my dreams everyday in a letter[01:06.64]Sealed with a kiss[01:11.42]I'll see you in the sunlight[01:16.48]I'll hear your voice everywhere[01:21.92]I'll run to tenderly hold you[01:27.49]But baby you won't be there[01:30.89]I don't wanna say goodbye for the summer[01:38.71]Knowing the loneliness[01:42.65]So let us make a pledge to meet in September[01:50.91]Seal it with a kiss[02:07.41]I'll send you all my dreams everyday in a letter[02:14.83]Sealed with a kiss[02:17.68]Yes it's gonna be a cold lonely summer[02:24.42]But I'll fill the emptiness[02:28.81]I'll send you all my love everyday in a letter[02:37.08]Sealed with a kiss[02:39.43]So we gotta say goodbye[02:42.83]Sealed with a kiss[02:44.82]I don't want to say goodbye[02:48.35]Sealed with a kiss\n"
	},
	{
		"name":"Love Is The Answer",
		"singer":"Scorpions",
		"time":"4:30",
		"img":"http://p2.music.126.net/YSrGTxbh0AenxW1-DN-l4Q==/109951163444523321.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Scorpions%20-%20Love%20Is%20The%20Answer.mp3",
		"lrc":"[00:00.00] 作词 : Rudolf Schenker[00:01.00] 作曲 : Rudolf Schenker[00:54.18]All of my life[00:58.28]I asked what I have to try[01:02.34]To get out of darkness into the light[01:11.12]The world is a mess[01:15.58]Money it's a plague[01:19.72]Eats our soul[01:21.84]And leaves us alone[01:45.98]I wanna know[01:50.18]Somebody has to know[01:54.52]Where do we go from here[02:03.18]The world is a mess[02:07.52]Ego it's a waste[02:11.76]Steals our soul[02:14.10]And leaves us alone[02:19.86]Love, she said[02:23.80]Love, she said[02:28.15]Love it's the answer but I never would see you again[02:36.71]Love, she said[02:41.55]Love, she said[02:45.37]love it's the answer but you never would see me again[03:27.93]Love, she said[03:32.22]Love, she said[03:36.64]Love it's the answer but I never would see you again[03:44.82]Love, she said[03:48.88]Love, she said[03:53.13]love it's the answer but I never would see you again[04:02.59]Love it's the answer but, maybe, I see you again\n"
	},
	{
		"name":"21 Summer",
		"singer":"Brothers Osborne",
		"time":"3:34",
		"img":"http://p1.music.126.net/C0sUTW81CpyooguzfuAQwg==/109951166380354649.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Brothers%20Osborne%20-%2021%20Summer.mp3",
		"lrc":"[00:00.00] 作词 : John Osborne/TJ Osborne/Craig Wiseman[00:01.00] 作曲 : John Osborne/TJ Osborne/Craig Wiseman[00:23.66]Now and then I think about you now and then[00:31.24]When I see that Chevrolet[00:34.11]That certain shade, of blue[00:40.58]I hear that song, the one we sang all summer long[00:48.43]and even though its been so long it brings me back,[00:54.43]right back to you[00:56.03][00:56.73]I hope you find the storm that you were chasing,[01:01.18]hope your eyes are still as full of dreams[01:05.40]as they were that night when you slipped off those cut off jeans[01:14.03]when I hear the sound of high tide thunder,[01:18.35]I can see your hair blowing in the breeze[01:22.56]I think about how you and that 21 summer made a man of me,[01:30.24]yeah you made a man of me[01:32.67][01:49.35]How yah been I'd love to hear bout how you been[01:56.89]you're the only broken heart I've ever had and love to have again[02:05.10][02:05.49]I hope you find the storm that you were chasing,[02:09.76]hope your eyes are still as full of dreams[02:14.06]as they were that night when you slipped off those cut off jeans[02:22.61]when I hear the sound of high tide thunder,[02:26.93]I can see your hair blowing in the breeze[02:31.09]I think about how you and that 21 summer made a man of me,[02:38.41]yeah you made a man of me[02:55.29]yeah you made a man of me\n"
	},
	{
		"name":"类似爱情",
		"singer":"萧亚轩",
		"time":"4:41",
		"img":"http://p2.music.126.net/r7-Olcy0Pvfv_u7viE6VYg==/109951163858443507.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E8%90%A7%E4%BA%9A%E8%BD%A9%20-%20%E7%B1%BB%E4%BC%BC%E7%88%B1%E6%83%85.mp3",
		"lrc":"[00:00.00] 作词 : 易家扬[00:01.00] 作曲 : 小安[00:02.00] 编曲 : 钟成虎[00:03.00] 制作人 : 黄韵玲/是娟[00:27.05]我站在屋顶 黄昏的光影[00:32.94]我听见爱情光临的声音[00:39.03]微妙的反应 忽然想起你[00:45.61]这默契 感觉像是一个谜[00:51.62]心里有点急 也有点生气[00:59.80]你不要放弃行不行[01:05.47]我在过马路 你人在哪里[01:11.15]这条路希望跟你走下去[01:17.62]最近我和你 都有一样的心情[01:24.18]那是一种类似爱情的东西[01:29.51]在同一天发现爱在接近[01:36.40]那是爱 并不是也许[01:42.45]可不要忘记你要相信你自己[01:49.76]给我一些类似爱情的回应[01:55.01]这个世界很无情[01:59.79]谢谢你 说一声 爱你 我很想听[02:08.67][02:36.73]我们两个人 陌生又熟悉[02:41.82]爱似乎来的很小心翼翼[02:48.19]我想问问你 是不是相信[02:54.67]爱来了这种滋味很美丽[03:01.04]心里有点急 也有点生气[03:07.62]你不要放弃行不行[03:13.12]我在过马路 你人在哪里[03:20.14]这条路应该如何走下去[03:26.27]最近我和你 都有一样的心情[03:32.74]那是一种类似爱情的东西[03:38.92]在同一天发现爱在接近[03:45.30]那是爱 并不是也许[03:51.21]可不要忘记你要相信你自己[03:58.28]给我一些类似爱情的回应[04:03.81]这个世界很无情[04:08.46]谢谢你 说一声 爱你 我很想听[04:18.45]\n"
	},
	{
		"name":"慢慢喜欢你",
		"singer":"莫文蔚",
		"time":"3:41",
		"img":"http://p1.music.126.net/VYZejIv5M-K4RsHKkyXQFQ==/109951165958895028.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E8%8E%AB%E6%96%87%E8%94%9A%20-%20%E6%85%A2%E6%85%A2%E5%96%9C%E6%AC%A2%E4%BD%A0.mp3",
		"lrc":"[00:00.00] 作词 : 李荣浩[00:00.27] 作曲 : 李荣浩[00:00.54] 编曲 : 冯翰铭[00:00.81] 制作人 : 荒井十一[00:01.88]书里总爱写到喜出望外的傍晚[00:08.45]骑的单车还有他和她的对谈[00:15.42]女孩的白色衣裳男孩爱看她穿[00:23.28]好多桥段[00:25.05]好多都浪漫[00:26.92]好多人心酸[00:28.79]好聚好散[00:31.19]好多天都看不完[00:37.11]刚才吻了你一下你也喜欢对吗[00:45.12]不然怎么一直牵我的手不放[00:52.37]你说你好想带我回去你的家乡[01:00.14]绿瓦红砖[01:01.81]柳树和青苔[01:03.79]过去和现在[01:05.56]都一个样[01:07.89]你说你也会这样[01:14.17]慢慢喜欢你[01:16.71]慢慢的亲密[01:18.49]慢慢聊自己[01:20.32]慢慢和你走在一起[01:24.04]慢慢我想配合你[01:26.68]慢慢把我给你[01:29.11]慢慢喜欢你[01:31.35]慢慢的回忆[01:33.18]慢慢地陪你 慢慢地老去[01:39.41]因为慢慢是个最好的原因[02:01.91]晚餐后的甜点就点你喜欢的吧[02:10.13]今晚就换你去床的右边睡吧[02:17.28]这次旅行我还想去上次的沙滩[02:25.06]球鞋手表[02:26.74]袜子和衬衫都已经烫好[02:30.36]放行李箱[02:32.84]早上等着你起床[02:38.81]慢慢喜欢你[02:41.75]慢慢的亲密[02:43.38]慢慢聊自己[02:45.20]慢慢和你走在一起[02:49.00]慢慢我想配合你[02:51.34]慢慢把我给你[02:54.03]慢慢喜欢你[02:56.31]慢慢的回忆[02:58.12]慢慢地陪你 慢慢地老去[03:04.51]因为慢慢是个最好的原因[03:18.12]书里总爱写到喜出望外的傍晚[03:24.49]制作 : 荒井十一[03:25.12]鼓&打击乐 : 荒井十一[03:26.12]贝斯 : 陈兆基[03:27.12]吉他 : 胡洋[03:28.12]钢琴&计算机编程 : 冯翰铭[03:29.12]和声 : 莫文蔚[03:30.12]弦乐 : Violin - Leslie moonsun Ryang, Cello - Anna Kwan[03:31.12]主唱&和声录音 : 荒井十一，克昶 SanbistLin @白金录音室, 台北[03:32.12]所有乐器录音 : 倪涵文 @TweakToneLabs, Beijing[03:33.12]弦乐录音 : TheinvisibleMen Studio, HK[03:34.12]音乐编程 : 荒井十一，倪涵文[03:35.12]混音 : 赵靖 @BIGJStudio, Beijing[03:36.12]OP : 一样音乐工作室[03:37.12]SP : 酷亚音乐(深圳)有限公司 admin by One Asia Music Inc.\n"
	},
	{
		"name":"手心的蔷薇",
		"singer":"林俊杰,G.E.M.邓紫棋",
		"time":"4:40",
		"img":"http://p2.music.126.net/X0EDfXzxMQJiQ-71JFGdZw==/3238061746556733.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E6%9E%97%E4%BF%8A%E6%9D%B0%2CG.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E6%89%8B%E5%BF%83%E7%9A%84%E8%94%B7%E8%96%87.mp3",
		"lrc":"[00:00.00] 作词 : 林怡凤[00:01.00] 作曲 : 林俊杰[00:02.00] 编曲 : Terence Teo[00:03.00] 制作人 : 林俊杰[00:11.89]你眼眶超载的眼泪[00:14.89][00:17.20]乘客是绝望和心碎[00:20.31][00:20.99]我可以看见你忍住伤悲[00:25.73][00:26.87]那一双爱笑眼睛不适合皱眉[00:31.66][00:34.07]你目光独有的温暖[00:37.55][00:39.42]是不会熄灭的明天[00:42.68][00:43.35]我可以感觉[00:45.53][00:46.06]你没有说出口的安慰[00:49.24][00:49.84]远比我失去的更加珍贵[00:54.13][00:59.80]手心的蔷薇 刺伤而不自觉[01:05.05]你值得被疼爱 你懂我的期待[01:10.29][01:10.84]绚烂后枯萎 经过几个圆缺[01:15.76][01:16.48]有我（你）在[01:20.49][01:21.54]你埋藏的蔷薇 你动人的香味[01:26.40][01:27.09]是最好的你陪我[01:29.46]盼我接受世界[01:32.36][01:33.68]不完美另一面多美[01:41.70][01:48.70]指纹写下所有遇见[01:51.98][01:54.15]你留着心碎那一页[01:57.93]骄傲的展现你真无所谓[02:02.54]无所谓[02:03.77]偶尔放纵的泪像汹涌的海水[02:08.71][02:10.71]我学着一个人存在[02:14.62]I'm here[02:15.47][02:16.28]关上灯比较不孤单（不让你孤单）[02:19.92]你给的力量[02:22.22][02:22.73]让我在夜里安心入睡（别怕黑夜）[02:26.01][02:26.59]就算没有人心疼我（你）的泪[02:32.19][02:33.78]手心的蔷薇 刺伤而不自觉[02:38.98]你值得被疼爱 你懂我的期待（My love）[02:44.25][02:44.86]绚烂后枯萎经过几个圆缺[02:49.75][02:50.36]有我（你）在 Oh[02:55.56]你埋藏的蔷薇 你动人的香味[03:01.06]是最好的你陪我[03:03.46]盼我接受世界[03:06.42][03:07.57]不完美另一面多美[03:16.06][03:18.04]手心的蔷薇 Oh[03:22.31][03:23.11]是带刺的纪念 Oh Yeah[03:28.33][03:28.97]整理好眼泪[03:31.20][03:31.88]I am here[03:37.84][03:38.37]陪我（你）盼我[03:39.47]盼你接受世界[03:41.00]太虚伪 太善变 不完美[03:45.78][03:46.56]天会黑 心会累 Yeah[03:51.07][03:51.78]有我（你）在 什么都无畏[04:00.28][04:02.90]别害怕 握太紧 放手[04:06.39][04:06.93]蔷薇 伤痕累累[04:12.08][04:13.83]这世界有你无畏[04:24.83]配唱制作人 : 林俊杰/Dr. Moon[04:25.83]制作协力 : 周信廷[04:26.83]吉他 : Jamie Wilson[04:27.83]贝斯 : Gary Leo[04:28.83]鼓 : Brendan Buckley[04:29.89]弦乐 : City of Prague Philharmonic Orchestra[04:30.89]弦乐指挥 : Adam Klemens[04:31.83]首席小提琴手 : Lucie Svehlova[04:32.83]录音室 : The JFJ Lab(Taipei)/Q2 Studio(HK)/Bosh Studio(Malaysia)/LayerCake Studio(LA/Smecky Music Studio(Prague)[04:33.83]录音师 : Dr. Moon/Kai/Billy Ong/Brendan Buckley/Vitek Kral[04:34.83]弦乐录音助理 : Michael Hradlsky[04:35.83]弦乐翻译 : Stanja Vomackova[04:36.83]弦乐线上录音系统及弦乐档案编辑 : Leonard Fong[04:37.83]混音室 : 白金录音室(Taipei)[04:38.83]混音师 : 林正忠\n"
	},
	{
		"name":"小手拉大手",
		"singer":"梁静茹",
		"time":"4:06",
		"img":"http://imge.kugou.com/stdmusic/150/20160907/20160907235557677437.jpg",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%B0%8F%E6%89%8B%E6%8B%89%E5%A4%A7%E6%89%8B-%E6%A2%81%E9%9D%99%E8%8C%B9.mp3",
		"lrc":"[id:$00000000][ar:梁静茹][ti:小手拉大手][by:][hash:d43b40d3886bfeedb933ee22bf1eb396][al:][sign:][qq:][total:246648][offset:0][00:00.71]梁静茹 - 小手拉大手[00:02.48]作词：陈绮贞[00:03.70]作曲：过亚弥乃[00:05.11]编曲：陈建骐[00:08.50]还记得那场音乐会的烟火[00:12.24]还记得那个凉凉的深秋[00:15.63]还记得人潮把你推向了我[00:19.31]游乐园拥挤的正是时候[00:22.99]一个夜晚坚持不睡的等候[00:26.73]一起泡温泉奢侈的享受[00:30.41]有一次日记里愚蠢的困惑[00:34.10]因为你的微笑幻化成风[00:37.79]你大大的勇敢保护着我[00:41.52]我小小的关怀喋喋不休[00:45.21]感谢我们一起走了那么久[00:48.90]又再一次回到凉凉深秋[00:52.66]给你我的手[00:54.37]像温柔野兽[00:56.14]把自由交给草原的辽阔[01:00.38]我们小手拉大手[01:02.80]一起郊游[01:04.63]今天别想太多[01:07.36]你是我的梦[01:09.18]像北方的风[01:11.05]吹着南方暖洋洋的哀愁[01:15.24]我们小手拉大手[01:17.67]今天加油向昨天挥挥手[01:24.11]还记得那场音乐会的烟火[01:27.60]还记得那个凉凉的深秋[01:31.29]还记得人潮把你推向了我[01:34.99]游乐园拥挤的正是时候[01:38.72]一个夜晚坚持不睡的等候[01:42.36]一起泡温泉奢侈的享受[01:46.10]有一次日记里愚蠢的困惑[01:49.76]因为你的微笑幻化成风[01:53.44]你大大的勇敢保护着我[01:57.19]我小小的关怀喋喋不休[02:00.83]感谢我们一起走了那么久[02:04.52]又再一次回到凉凉深秋[02:08.31]给你我的手[02:10.02]像温柔野兽[02:11.79]我们一直就这样向前走[02:16.04]我们小手拉大手[02:18.59]一起郊游[02:20.31]今天别想太多[02:23.04]你是我的梦[02:24.81]像北方的风[02:26.68]吹着南方暖洋洋的哀愁[02:30.87]我们小手拉大手[02:33.25]今天加油向昨天挥挥手[02:45.93]LALALA[02:58.26]给你我的手[02:59.92]像温柔野兽[03:01.79]我们一直就这样向前走[03:05.94]我们小手拉大手[03:08.26]一起郊游[03:10.08]今天别想太多[03:13.02]LALALALALA[03:14.98]像北方的风[03:16.55]吹着南方暖洋洋的哀愁[03:20.65]我们小手拉大手[03:23.02]今天加油向昨天挥挥手[03:28.08]我们小手拉大手[03:30.40]今天为我加油[03:32.32]舍不得挥挥手\n"
	},
	{
		"name":"夏天的风",
		"singer":"火羊瞌睡了",
		"time":"3:41",
		"img":"http://p1.music.126.net/rFUKVdOjqxgwAT6Zi6qv7A==/109951164906689206.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E7%81%AB%E7%BE%8A%E7%9E%8C%E7%9D%A1%E4%BA%86%20-%20%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E.mp3",
		"lrc":"[00:00.00] 作词 : 天天[00:00.10] 作曲 : 周杰伦[00:00.20] 编曲 : 陈书伟[00:00.30]原唱：温岚[00:00.36]本作品经过词曲著作权利方授权[00:00.61]为什么你不在[00:02.54]问山风你会回来[00:07.46]夏天的风 我永远记得[00:11.54]清清楚楚的说你爱我[00:15.60]我看见你酷酷的笑容[00:19.31]也有腼腆的时候[00:23.39]夏天的风 正暖暖吹过[00:27.46]穿过头发穿过耳朵[00:31.43]你和我的夏天[00:33.94]风轻轻说着[00:39.25]七月的风懒懒的[00:43.39]连云都变热热的[00:47.22]不久后天闷闷的[00:50.11]一阵云后雨下过[00:56.74]气温 爬升到无法再忍受[01:03.24]索性闭上了双眼[01:05.87]让想象任意改变[01:10.79]场景 两个人一起散着步[01:15.27]我的脸也轻轻贴着你胸口[01:19.40]听到心跳[01:21.59]在乎我 和天气一样温度[01:27.40]夏天的风 我永远记得[01:31.40]清清楚楚的说你爱我[01:35.43]我看见你酷酷的笑容[01:39.37]也有腼腆的时候[01:43.51]夏天的风 正暖暖吹过[01:47.36]穿过头发穿过耳朵[01:51.26]你和我的夏天[01:53.84]风轻轻说着[02:00.85]温柔懒懒的海风[02:02.73]吹到高高的山峰[02:04.55]温的风 山的风[02:06.52]吹成了山风[02:08.48]温柔懒懒的海风[02:10.47]吹到高高的山峰[02:12.45]温的风 山的风[02:14.92]吹成了山风[02:17.11]温柔懒懒的海风[02:19.05]吹到高高的山峰[02:20.86]温的风 山的风[02:22.72]吹成了山风[02:24.80]为什么你不在[02:26.79]问山风你会回来[02:30.85]场景 两个人一起散着步[02:35.59]我的脸也轻轻贴着你胸口[02:39.77]听到心跳 Wo[02:42.14]在乎我 和天气一样温度[02:47.69]夏天的风 我永远记得[02:51.62]清清楚楚的说你爱我[02:55.66]我看见你酷酷的笑容[02:59.37]也有腼腆的时候[03:03.32]夏天的风 正暖暖吹过[03:07.37]穿过头发穿过耳朵[03:11.44]你和我的夏天[03:14.03]风轻轻说着[03:24.69][03:26.69]制作：红龙制乐[03:27.69]统筹：赵越/黄鲲/潘俊/杨黄成[03:29.69]企划：小粉[03:30.69]宣传：沈峻峻[03:31.69]合声：郁采真[03:34.69]混音/母带：陈书伟[03:36.69]OP:Shen Qi Lu Guan Multimedia Ltd. /JVR Music Int. Ltd.[03:38.69]SP:美希亚音乐版权代理（北京）有限公司\n"
	},
	{
		"name":"世间美好与你环环相扣",
		"singer":"柏松",
		"time":"3:12",
		"img":"http://p1.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E6%9F%8F%E6%9D%BE%20-%20%E4%B8%96%E9%97%B4%E7%BE%8E%E5%A5%BD%E4%B8%8E%E4%BD%A0%E7%8E%AF%E7%8E%AF%E7%9B%B8%E6%89%A3.mp3",
		"lrc":"[00:00.00] 作词 : 尹初七[00:01.00] 作曲 : 柏松[00:02.00] 编曲 : 彭圣杰[00:15.55][00:28.05]偏偏秉烛夜游[00:31.05]午夜星辰 似奔走之友[00:34.55]爱你每个结痂伤口[00:37.55]酿成的陈年烈酒[00:40.80][00:41.80]入喉尚算可口[00:44.80]怎么泪水 还偶尔失守[00:48.55]邀你细看心中缺口[00:51.05]裂缝中留存 温柔[00:55.80][00:57.55]此时已莺飞草长 爱的人正在路上[01:01.80]我知他风雨兼程 途经日暮不赏[01:05.55]穿越人海 只为与你相拥[01:11.55]此刻已皓月当空 爱的人手捧星光[01:15.30]我知他乘风破浪 去了黑暗一趟[01:19.05]感同身受 给你救赎热望[01:25.30][01:26.05]知道你不能 还要你感受[01:29.80]让星光加了一点彩虹[01:32.80]让樱花偷偷 吻你额头[01:36.55]让世间美好 与你环环相扣[01:41.30][01:42.05]此时已莺飞草长 爱的人正在路上[01:46.30]我知他风雨兼程 途经日暮不赏[01:50.30]穿越人海 只为与你相拥[01:55.80]此刻已皓月当空 爱的人手捧星光[01:59.80]我知他乘风破浪 去了黑暗一趟[02:04.05]感同身受 给你救赎热望[02:09.05][02:09.55]此时已莺飞草长 爱的人正在路上[02:13.55]我知他风雨兼程 途经日暮不赏[02:17.80]穿越人海 只为与你相拥[02:23.30]此刻已皓月当空 爱的人手捧星光[02:27.55]我知他乘风破浪 去了黑暗一趟[02:31.55]感同身受 给你救赎热望[02:37.05][02:38.30]知道你不能 还要你感受[02:41.30]让星光加了一点彩虹[02:44.80]当樱花开的纷纷扬扬[02:48.30]当世间美好 与你环环相扣[02:58.30]特别鸣谢：槿葵，我们的海报制作妹妹。[03:05.55]原唱：柏松[03:06.05]吉他：柏松[03:07.05]和声：柏松[03:07.80]录音：柏松[03:08.80]混音：张强\n"
	},
	{
		"name":"When a Man Loves a Woman",
		"singer":"Michael Bolton",
		"time":"3:51",
		"img":"http://p2.music.126.net/u6KoqRGy5IjhVl1GvTHZUQ==/109951164624339242.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Michael%20Bolton%20-%20When%20a%20Man%20Loves%20a%20Woman.mp3",
		"lrc":"[00:00.00] 作词 : Lewis, Wright[00:17.77]When a man loves a woman[00:22.38]Can't keep his mind on nothin' else[00:28.48]He'd trade the world[00:31.16]For a good thing he's found[00:36.15]If she is bad, he can't see it[00:40.49]She can do no wrong[00:44.80]Turn his back on his best friend[00:49.02]If he puts her down[00:50.86][00:53.08]When a man loves a woman[00:57.27]Spend his very last dime[01:02.39]Trying to hold on to what he needs[01:10.23]He'd give up all his comforts[01:15.01]Sleep out in the rain[01:19.82]If she said that's the way[01:23.37]It ought to be[01:26.12][01:29.26]When a man loves a woman[01:36.82]I give you everything I've got (yeah)[01:44.17]Trying to hold on[01:50.37]To your precious love[01:53.62]Baby baby please don't treat me bad[02:00.70][02:02.95]When a man loves a woman[02:08.84]Deep down in his soul[02:11.92]She can bring him such misery[02:18.35]If she is playing him for a fool[02:24.53]He's the last one to know[02:31.22]Loving eyes can never see[02:37.43][02:37.82]Yes when a man loves a woman[02:42.49]I know exactly how he feels[02:48.66]'Cause baby, baby, baby[02:55.26][03:00.01]When a man loves a woman[03:39.51]\n"
	},
	{
		"name":"I Do",
		"singer":"911",
		"time":"3:27",
		"img":"http://p2.music.126.net/ZNnDcq2-b_An3_ag3H5XhQ==/5980243743520718.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/911%20-%20I%20Do.mp3",
		"lrc":"[00:00.00][00:07.42][00:12.17]My whole world changed[00:14.68]from the moment I met you[00:18.33]and it would never be the same[00:22.71]felt like I knew that I'd always loved you[00:28.10]from the moment I heard your name[00:32.39]everything was perfect[00:35.08]I knew this love was worth it[00:37.48]our own miracle in the making[00:42.69]until this world stops turning[00:45.02]I'll still be here waiting and waiting[00:48.53]to make that vow that I'll[00:52.07]I'll be by your side till the day I die[00:57.21]I'll be waiting till I hear you say I do[01:01.97]something old, something new[01:04.41]something borrowed, something blue[01:07.05]I'll be waiting till I hear you say I do[01:12.65]smiles by the thousands[01:15.16]ya tears have all dried out[01:18.07]cause I won't see you cry again[01:21.93]throw pennies in a fountain[01:25.04]look at what comes out[01:28.03]sometimes wishes do come true[01:32.59]now everything is perfect[01:35.05]I know this love is worth it[01:37.50]our own miracle in the making[01:42.61]until this world stops turning[01:45.05]I'll still be here waiting and waiting[01:48.47]to make that vow that I'll[01:52.22]I'll be by your side till the day I die[01:57.20]I'll be waiting till I hear you say I do[02:01.92]something old, something new[02:04.41]something borrowed, something blue[02:07.04]I'll be waiting till I hear you say I do[02:12.34]always better than worse[02:14.55]protect you from the hurt[02:17.01]I'll be waiting till I hear you say I do[02:22.26]I do love you, yes I do love you[02:26.94]I'll be waiting till I hear you say I do[02:33.18]cause I love you, love you[02:42.24]I'll be by your side till the day I die[02:47.07]I'll be waiting till I hear you say I do[02:51.87]something old, something new[02:54.41]something borrowed, something blue[02:56.98]I'll be waiting till I hear you say I do[03:02.63]we're shining like a diamond[03:05.00]just look at us now[03:08.03]I wanna hear you say I do[03:11.97][03:13.92][03:19.19][03:24.55]\n"
	},
	{
		"name":"Whatever It Is",
		"singer":"Zac Brown Band",
		"time":"3:29",
		"img":"http://p2.music.126.net/xtbXU40h3by6IrcC--xong==/3235862721030917.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Zac%20Brown%20Band%20-%20Whatever%20It%20Is.mp3",
		"lrc":"[00:04.00][00:07.00][00:10.00][00:11.65]She's got eyes that cut you like a knife[00:15.35]and lips that taste like sweet red wine[00:18.36]And pretty legs go to heaven every time[00:23.20]She got a gentle way that puts me at ease[00:26.50]When she walks in the room I can hardly breathe[00:29.41]Got a devastating smile knock a grown man to his knees[00:34.01][00:34.99]She's got whatever it is[00:37.59]It blows me away[00:40.23]She's everything I wanted to say to a woman[00:43.12]but couldn't find the words to say[00:46.03]She's got whatever it is[00:48.75]I don't know what to do[00:51.53]Because every time I try and tell her how I feel[00:54.75]it comes out 'I love you'[00:57.59]You got whatever it is[01:00.59][01:09.13]You know I've never been the type[01:11.04]that would ever want to stay[01:12.56]Bring 'em home at night and they're gone the next day[01:15.61]But that all changed when she walked into my life[01:20.80]People ask me what it is[01:22.70]I tell them I don't know[01:24.00]Just something about the woman makes my heart go haywire[01:28.08]She's gonna be my wife[01:30.91][01:31.94]She's got whatever it is[01:34.60]It blows me away[01:37.34]She's everything I wanted to say to a woman[01:40.43]but couldn't find the words to say[01:43.05]She's got whatever it is[01:45.89]I don't know what to do[01:48.50]Because every time I try and tell her how I feel[01:51.84]it comes out 'I love you'[01:54.99]You got whatever it is[01:58.04][02:17.30]When she loves me[02:20.48]Girl that's how I feel[02:23.48]When she loves me[02:26.44]I'm on top of the world[02:29.26]Because when she loves me[02:32.00]I can live forever[02:35.22]When she loves me[02:37.78]I am untouchable[02:40.99][02:41.86]She's got whatever it is[02:44.75]It blows me away[02:47.51]She's everything I wanted to say to a woman[02:50.21]but couldn't find the words to say[02:53.21]She's got whatever it is[02:55.91]I don't know what to do[02:58.71]Because every time I try and tell her how I feel[03:01.74]it comes out 'I love you'[03:04.57]You got whatever it is[03:08.25]\n"
	},
	{
		"name":"Fuerteventura",
		"singer":"Russian Red",
		"time":"2:15",
		"img":"http://p2.music.126.net/ZC_W8V_KBNC1XH3yRndPFQ==/109951165966203012.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Russian%20Red%20-%20Fuerteventura.mp3",
		"lrc":"[00:00.00] 作曲 : LOURDES (AKA RUSSIAN RED) HERNANDEZ GONZALEZ/CARLOS MIGUEL[00:00.30]You're always such a fool[00:03.92]And in your eyes so blue[00:06.54]I see the life I never had before[00:12.53]Do you remember when[00:15.25]We used to live things separate[00:18.27]We hadn't met or thought[00:21.20]That could be possible[00:24.27]I'm glad you had your life[00:27.35]So good to listen to your past[00:30.46]All of those things brought you[00:33.38]With me and now we're two[00:36.34]You're always such a fool[00:40.32]And in your eyes so blue[00:42.95]I see the life I never had before[00:49.38]You always talk so smooth[00:52.33]And in your voice, so true[00:54.81]I hear the dream[00:57.33]I never had before[01:28.45]But if I try to think Of something better than this[01:34.75]Heaven comes down[01:36.62]And reminds the luck we live[01:40.49]You're always such a fool[01:44.10]And in your eyes so blue[01:46.46]I see the life I never had before[01:53.12]You always talk so smooth[01:56.13]And in your voice, so true[01:58.59]I hear the dream[02:01.01] never had before\n"
	},
	{
		"name":"Way Back Into Love (Demo)",
		"singer":"Hugh Grant,Drew Barrymore",
		"time":"4:12",
		"img":"http://p1.music.126.net/_WLFR2EDo0UN1jJE6UxOTg==/6659741930159840.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Hugh%20Grant%2CDrew%20Barrymore%20-%20Way%20Back%20Into%20Love%20%28Demo%29.mp3",
		"lrc":"[00:20.06]I've been living with a shadow overhead[00:24.53]I've been sleeping with a cloud above my bed[00:29.72]I've been lonely for so long[00:33.76]Trapped in the past[00:35.78]I just can't seem to move on[00:39.21]I've been hiding all my hopes and dreams away[00:44.02]Just in case I ever need them again someday[00:48.81]I've been setting aside time[00:52.80]To clear a little space in the corners of my mind[00:58.98]All I wanna do is find a way back into love[01:08.58]I can't make it through without a way back into love[01:16.17]Oh oh oh[01:21.15][01:22.26]I've been watching but the stars refuse to shine[01:26.97]I've been searching but I just don't see the signs[01:32.23]I know that it`s out there[01:35.97]There is gotta be something for my soul somewhere[01:41.63]I've  been looking for someone to shed some lights[01:46.25]Not somebody just to get me through the night[01:51.79]I could use some direction[01:56.51]And I'm open to your suggestions[02:01.74]All I wanna do is find a way back into love[02:11.36]I can't make it through without a way back into love[02:18.87]And if I open my heart again[02:23.97]I guess I am hoping you'll be there for me in the end[02:32.99]Ho~[02:40.46]Hu yeah~ ng~~[02:49.18]There are moments when I don't know if it's real[02:53.89]Or if anybody feels the way I feel[02:59.08]I need inspiration[03:02.90]Not just another negotiation[03:08.40][03:10.23]All I wanna do is find a way back into love[03:19.82]I can't make it through without a way back into love[03:27.37]And if I open my heart to you[03:31.92]I'm hoping you'll show me what to do[03:36.94]And if you help me to start again[03:42.89]You know that I'll be there for you in the end[03:53.97]Ho~[03:55.52]Da da la ta la~[04:05.63]Ho~[04:08.95][04:12.49][04:12.89][04:15.72]\n"
	},
	{
		"name":"Your Man",
		"singer":"Josh Turner",
		"time":"3:33",
		"img":"http://p1.music.126.net/-k1mPTXMKzIDrVVabkuJ6g==/109951166027066588.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Josh%20Turner%20-%20Your%20Man.mp3",
		"lrc":"[00:00.00] 作词 : DUBOIS, CHRIS/EVERETT, JACE/STAPLETON, CHRIS[00:19.34]Baby lock the door and turn the lights down low[00:23.45][00:24.08]Put some music got soft and slow[00:28.88]Baby we ain't got no place to go[00:33.50]I hope you understand[00:36.12]I've been thinking 'bout this all day long[00:40.80]Never felt a feeling quite this strong[00:45.48]I can't believe how much it turns me on[00:50.35]Just to be your man[00:53.10][00:57.65]There's no hurry[00:59.84]Don't you worry we can take our time[01:06.13][01:07.01]Come a little closer[01:09.51]Let's go over what I had in mind[01:14.18]Baby lock the door and turn the lights down low[01:18.18][01:18.98]Put some music on that's soft and slow[01:22.92][01:23.79]Baby we ain't got no place to go[01:27.59][01:28.42]I hope you understand[01:30.98]I've been thinking 'bout this all day long[01:35.15][01:35.78]Never felt a feeling quite this strong[01:40.32]I can't believe how much it turns me on[01:44.45][01:45.20]Just to be your man[01:47.76][02:09.01]Ain't nobody ever love nobody[02:13.37][02:14.75]The way that I love you[02:17.73][02:18.60]We're alone now[02:20.85]You don't know how long I've wanted to[02:25.91]Lock the door and turn the lights down low[02:30.53]Put some music on that's soft and slow[02:34.70][02:35.39]Baby we ain't got no place to go[02:39.32][02:40.07]I hope you understand[02:42.75]I've been thinking 'bout this all day long[02:47.19]Never felt a feeling that was quite this strong[02:51.31][02:51.87]I can't believe how much it turns me on[02:55.79][02:56.87]Just to be your man[02:58.86][03:01.42]I can't believe how much it turns me on[03:05.40][03:06.40]Just to be your man\n"
	},
	{
		"name":"(You're The) Love Of My Life",
		"singer":"George Benson,Roberta Flack",
		"time":"2:53",
		"img":"http://p2.music.126.net/ubDxk0BM93CcD8rtEptK5Q==/1729531790501591.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/George%20Benson%2CRoberta%20Flack%20-%20%28You%27re%20The%29%20Love%20Of%20My%20Life.mp3",
		"lrc":"[00:15.60]You are the love of my life[00:19.60]I knew it right from the start[00:23.60]The moment I looked at you you[00:27.60]you found a place in my heart[00:31.60]You are the love of my life[00:34.60]you give me reason to live[00:38.60]You taught me how to be strong[00:42.60]With you is where I belong[00:46.60]No one's ever touched me[00:50.60]quite the way you've touched me[00:54.60]People search a lifetime[00:57.60]to find what we have[01:00.60]You are the love of my life[01:05.60]one thing that's good in this life[01:08.60]I'll spend the rest of my days[01:12.60]just loving you[01:14.60]You are the love of my life[01:18.60]the heart and soul of my life[01:22.60]Once I was lost and alone[01:25.60]with you at last I am home[01:36.60]You give me so much of you[01:40.60]and leave me room to be free[01:45.50]No one's ever touched me[01:49.80]quite the way you’ve touched me[01:53.10]People search a lifetime[01:57.10]to find what we have[02:01.00]You are the love of my life[02:04.60]one thing that's good in this life[02:09.60]And in a world full of change[02:12.90]one thing I'm sure of[02:16.90]You are the love of my life.[02:20.90]one thing that makes sense in this life[02:24.20]I'll spend the rest of my days[02:28.20]just loving you[02:30.50]You are the love of my life[02:34.50]and I thank God I'm alive[02:38.50]To spend my lifetime with you[02:41.50]You are the love of my life[02:41.50]ou are the love of my life\n"
	},
	{
		"name":"Perfect",
		"singer":"Ed Sheeran",
		"time":"4:23",
		"img":"http://p1.music.126.net/2hT9CHRveToPOwMqZBAiCA==/109951163844867602.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Ed%20Sheeran%20-%20Perfect.mp3",
		"lrc":"[00:00.00] 作词 : Ed Sheeran[00:01.00] 作曲 : Ed Sheeran[00:02.65]I found a love for me[00:10.65]Darling just dive right in and follow my lead[00:18.23]Well I found a girl beautiful and sweet[00:25.75]OhI never knew you were the someone waiting for me[00:32.66]Cause we were just kids when we fell in love[00:36.96]Not knowing what it was I will not give you up this time[00:48.34]But darling just kiss me slow your heart is all I own[00:55.91]And in your eyes you're holding mine[01:02.74]Baby I'm dancing in the dark with you between my arms[01:14.14]Barefoot on the grass listening to our favourite song[01:21.20]When you said you looked a mess I whispered underneath my breath[01:28.40]But you heard it darling you look perfect tonight[01:41.77]Well I found a woman stronger than anyone I know[01:49.05]She shares my dreams I hope that someday I'll share her home[01:56.79]I found a love to carry more than just my secrets[02:04.81]To carry love to carry children of our own[02:11.23]We are still kids but we're so in love fighting against all odds[02:19.31]I know we'll be alright this time[02:27.08]Darling just hold my hand be my girl I'll be your man[02:34.39]I see my future in your eyes[02:41.27]Baby I'm dancing in the dark with you between my arms[02:52.64]Barefoot on the grass listening to our favourite song[02:59.46]When I saw you in that dress looking so beautiful[03:05.34]I don't deserve this darling you look perfect tonight[03:26.85]Baby I'm dancing in the dark with you between my arms[03:37.94]Barefoot on the grass listening to our favourite song[03:44.98]I have faith in what I see[03:48.37]Now I know I have met an angel in person[03:54.74]And she looks perfect I don't deserve this[04:02.46]You look perfect tonight\n"
	},
	{
		"name":"温蒂公主的侍卫",
		"singer":"告五人",
		"time":"4:17",
		"img":"http://p1.music.126.net/5URIeP6GjMFg_hKhGloNTA==/109951165585701063.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%91%8A%E4%BA%94%E4%BA%BA%20-%20%E6%B8%A9%E8%92%82%E5%85%AC%E4%B8%BB%E7%9A%84%E4%BE%8D%E5%8D%AB.mp3",
		"lrc":"[00:00.00] 作词 : 潘云安[00:01.00] 作曲 : 潘云安[00:34.0,00]亲爱的[00:36.0,00]我现在要对你 告白[00:40.0,00]但或许不是 那么简单[00:45.0,00]请亮着双眼 听我说[00:51.0,00]亲爱的[00:54.,00]或许我们 不会永远[00:58.8,00]永远陪伴 在彼此身边[01:02.1,00]意外和明天或谁[01:07.4,00]比我更耀眼[01:09.2,00]但你[01:11.4,00]像蓝天般的你[01:16.00]全存在我心底[01:20.4,00]久而久之 变成唯一[01:26.3,00]亲爱的[01:29.,00]眼泪 别轻易地掉[01:33.4,00]珍贵的要守护好[01:37.4,00]如果不小心我突然离你而去[01:44.3,00]亲爱的[01:46.3,00]你会不会还记得[01:50.3,00]曾有人为你唱歌[01:55.,00]一夜又一夜地唱[02:01.2,00]但你[02:03.3,00]像蓝天般的你[02:08.6,00]全存在我心底[02:12.4,00]久而久之变成唯一[02:19.5,00]而妳[02:21.3,00]圆圈夕阳的你[02:25.4,00]全存在我心里[02:30.5,00]眼睛看着晕黄散去[02:36.6,00][03:11.4,00]但你[03:13.3,00]像蓝天般的你[03:18.3,00]全存在我心底[03:22.3,00]久而久之变成唯一[03:29.3,00]而妳[03:31.6,00]圆圈夕阳的你[03:35.3,00]全存在我心里[03:40.5,00]眼睛看着晕黄散去[03:46.4,00]亲爱的[03:48.5,00]你会不会还记得[03:52.4,00]曾有人为你唱歌[03:57.3,00]一夜又一夜地[03:59.4,00]唱[04:01.,00]\n"
	},
	{
		"name":"披星戴月地想你",
		"singer":"告五人",
		"time":"5:49",
		"img":"http://p2.music.126.net/NHOypDpCMWUSmGGdA2lXGQ==/109951163608032298.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E5%91%8A%E4%BA%94%E4%BA%BA%20-%20%E6%8A%AB%E6%98%9F%E6%88%B4%E6%9C%88%E7%9A%84%E6%83%B3%E4%BD%A0.mp3",
		"lrc":"[00:00.00] 作词 : 潘燕山[00:01.00] 作曲 : 潘云安[00:10.78][00:19.73]突如其来的美梦[00:23.06]是你离去时卷起的泡沫[00:29.34]踢着石头 默默的走[00:34.03]公车从旁擦身而过[00:38.94]突如其来的念头[00:42.46]幻想化成流星的你我[00:48.52]明亮的夜 漆黑的宇宙[00:53.23]通通来自夜空[00:57.33]我会披星戴月地想你[01:02.15]我会奋不顾身地前进[01:07.05]远方烟火越来越唏嘘[01:11.93]凝视前方身后的距离[01:16.69]我会披星戴月地想你[01:21.42]我会奋不顾身地前进[01:26.25]远方烟火越来越唏嘘[01:31.16]凝视前方身后的距离[01:36.96][02:34.02]顺其自然的借口[02:37.75]像森林般围绕着你我[02:43.68]消极的笑着 痛快的哭[02:48.35]生命真的很难形容[02:53.13]顺其自然地回答[02:57.09]你要喝咖啡还是泡茶[03:02.69]下班后你快乐的上哪[03:07.59]我是真的不想回答[03:11.97]我会披星戴月地想你[03:16.55]我会奋不顾身地前进[03:21.33]远方烟火越来越唏嘘[03:26.23]凝视前方身后的距离[03:30.92]我会披星戴月地想你[03:35.74]我会奋不顾身地前进[03:40.44]远方烟火越来越唏嘘[03:45.40]凝视前方身后的距离[03:50.65][04:47.86]我会披星戴月地想你[04:52.53]我会奋不顾身地前进[04:57.42]远方烟火越来越唏嘘[05:02.15]凝视前方身后的距离[05:06.92]我会披星戴月地想你[05:11.89]我会奋不顾身地前进[05:16.60]远方烟火越来越唏嘘[05:21.39]凝视前方身后的距离[05:26.50]\n"
	},
	{
		"name":"关键词",
		"singer":"林俊杰",
		"time":"3:32",
		"img":"http://p2.music.126.net/CKcTyKux_UTt0sO_5VWR9w==/16561943649388272.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/%E6%9E%97%E4%BF%8A%E6%9D%B0%20-%20%E5%85%B3%E9%94%AE%E8%AF%8D.mp3",
		"lrc":"[00:00.00] 作词 : 林怡凤[00:01.00] 作曲 : 林俊杰[00:02.00] 编曲 : 吴庆隆[00:03.00] 制作人 : 林俊杰[00:14.12]好好爱自己 就有人会爱你[00:17.43]这乐观的说词[00:21.05]幸福的样子 我感觉好真实[00:24.31]找不到形容词[00:27.72]沉默在掩饰 快泛滥的激情[00:31.43]只剩下语助词[00:35.05]有一种踏实 当你口中喊我名字[00:40.49]落叶的位置 谱出一首诗[00:47.67]时间在消逝 我们的故事开始[00:54.34]这是第一次[00:58.13]让我见识爱情 可以慷慨又自私[01:04.67]你是我的关键词[01:10.22][01:21.26]我不太确定 爱最好的方式[01:24.45]是动词或名词[01:28.09]很想告诉你 最赤裸的感情[01:31.46]却又忘词[01:35.35]聚散总有时 而哭笑也有时[01:38.49]我不怕潜台词[01:41.55]有一种踏实 是你心中有我名字[01:47.63]落叶的位置 谱出一首诗[01:54.41]时间在消逝 我们的故事开始[02:01.62]这是第一次[02:05.35]让我见识爱情 可以慷慨又自私[02:11.86]你是我的关键词[02:17.66]你藏在歌词[02:20.94]代表的意思[02:24.50]是专有名词[02:30.18]落叶的位置[02:33.55]谱出一首诗[02:37.05]我们的故事[02:40.51]才正要开始[02:44.35]这是第一次[02:47.33]爱一个人爱得如此慷慨又自私[02:54.33]你是我的关键词[03:03.12]配唱制作 : 林俊杰[03:04.12]制作协力 : 周信廷[03:05.12]制作协调 : Gary Leo[03:06.12]弦乐指挥 : Adrian Chiang[03:07.12]第一小提琴 : Liuyi Rerallick/Micheal Kayan/Askar Salimdjanov/Oleksandr Korniev/Li Ruoyao/Hsieh Yu Ling/Ping Hsiang Chang/Shi Xiaoxuan/Loh Wei Ken/Tsai I-Yun[03:08.12]第二小提琴 : Victor Martin/Cao Can/Qian Hui Ho/Kim Kyu Ri/Lim Hao Wei/Placida Ho/Aziel Verner/Sayfiddinov Mukhriddin[03:09.12]中提琴 : Sunatilla Saydikarimov/Mukhammadyor Tulaganov/Lin I-Chien/Wei Jun Ting/Lin Hung-Yu/Martin Peh[03:10.12]大提琴 : Xu Xuena/Alexander Williams/Jamshid Saydikarimov/Shin Minji/Chen Pin Jyun/Trinh Ha Linh[03:11.12]低音大提琴 : Zhang Jianze/Sanche Jagatheesan/Sun Chenguang[03:12.12]木吉他 : Jamie Wilson/Joshua Tan[03:13.12]低音吉他 : Shaun Seow[03:14.12]鼓 : Lerod Cailao[03:15.12]和声编写 : 简爱 Christine Chien[03:16.12]和声 : 简爱 Christine Chien/Carrie Yeo/陈迪雅/洪俊扬[03:17.12]录音环境 : 新加坡滨海艺术中心音乐厅/The JFJ Lab（台北）[03:18.12]录音师 : 林俊杰/周信廷/Leonard Fong[03:19.12]前台及舞台音响 : Frank Lee[03:20.12]录音软件操作 : Edwin Wijaya[03:21.12]混音室 : mixHaus (Encino, CA)[03:22.12]混音师 : Richard Furch[03:23.12]OP : 龙言展工作室 Heartbeats Music Production[03:24.12]SP : 大潮音乐经纪有限公司[03:25.12]OP : JFJ Productions Corp[03:26.12]SP : Universal Music Publishing Ltd Taiwan[03:27.12]ISRC TW-A53-15-76504\n"
	},
	{
		"name":"Nothing's Gonna Change My Love For You",
		"singer":"Westlife",
		"time":"3:47",
		"img":"http://p2.music.126.net/mU-cKIp8HvqVUSA0gzY2Dg==/903798558076025.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Westlife%20-%20Nothing%27s%20Gonna%20Change%20My%20Love%20For%20You.mp3",
		"lrc":"[00:12.7,00]If I had to live my life without you near me[00:18.9,00]The days would all be empty[00:23.9,00]The nights would seem so long[00:26.8,00]With you I see forever oh so clearly[00:31.9,00]I might have been in love before[00:35.9,00]But it never felt this strong[00:40.0,00]Our dreams are young and we both know[00:43.,00]They'll take us where we want to go[00:46.9,00]Hold me now touch me now[00:49.9,00]I don't wanna live without you[00:54.9,00]Nothing's gonna change my love for you[00:57.9,00]You ought to know by now how much I love you[01:01.9,00]One thing you can be sure of[01:04.9,00]I never ask for more than your love[01:08.9,00]Nothing's gonna change my love for you[01:12.0,00]You oughta know by now how much I love you[01:14.9,00]The world may change my whole life through but[01:17.9,00]Nothing's gonna change my love for you[01:24.9,00]If the road ahead is not so easy[01:29.9,00]Our love will lead a way for us[01:34.9,00]Like a guiding star[01:37.9,00]I'll be there for you if you should need me[01:42.9,00]You don't have to change a thing[01:47.9,00]I love you just the way you are[01:50.9,00]Shane:So come with me and share the view[01:54.9,00]I'll help you see forever too[01:57.9,00]Hold me now touch me now[02:00.9,00]I don't want to live without you[02:05.8,00]Nothing's gonna change my love  for you[02:10.9,00]You oughta know by now how much I love you[02:13.7,00]One thing you can be sure of[02:16.7,00]I never ask for more than your love[02:19.7,00]Nothing's gonna change my love for you[02:22.7,00]You oughta know by now how much I love you[02:26.7,00]The world may change my whole life through but[02:30.00]Nothing's gonna change my love for you[02:33.7,00]Nothing's gonna change my love for you[02:36.7,00]You oughta know by now how much I love you[02:39.7,00]The world may change my whole life through but[02:42.7,00]Nothing's gonna change my love for you[02:59.7,00]Nothing's gonna change my love for you[03:02.7,00]You oughta know by now how much I love you[03:06.7,00]One thing you can be sure of[03:09.7,00]I never ask for more than your love[03:12.7,00]Nothing's gonna change my love for you[03:15.7,00]You oughta know by now how much I love you[03:19.7,00]The world may change my whole life through but[03:22.7,00]Nothing's gonna change my love for you[03:25.7,00]Nothing's gonna change my love for you[03:28.7,00]You oughta know by now how much I love you[03:32.7,00]One thing you can be sure of[03:36.7,00]I never ask for more than your love[03:39.7,00]Nothing's gonna change my love for you[40:39.7,00]\n"
	},
	{
		"name":"Beautiful In White (Demo)",
		"singer":"Westlife",
		"time":"3:46",
		"img":"http://p1.music.126.net/jp5ggn-2y5b1cCsOoFpaHQ==/6635552674545050.jpg?param=130y130",
		"src":"https://mp3link-1307315539.cos.eu-frankfurt.myqcloud.com/%E5%BF%83%E6%82%A6%E5%8D%BF%E5%85%AE/Westlife%20-%20Beautiful%20In%20White%20%28Demo%29.mp3",
		"lrc":"[00:14.0,00]Not sure if you know this[00:17.0,00]But when we first met[00:20.0,00]I got so nervous I couldn't speak[00:26.0,00]In that very moment[00:29.0,00]I found the one and[00:33.,00]My life had found its missing piece[00:39.0,00][00:39.0,00]So as long as I live I love you[00:43.0,00]Will have and hold you[00:47.0,00]You look so beautiful in white[00:52.0,00]And from now to my very last breath[00:56.0,00]This day I'll cherish[00:59.0,00]You look so beautiful in white[01:05.0,00]Tonight[01:09.0,00][01:11.0,00]What we have is timeless[01:15.0,00]My love is endless[01:18.0,00]And with this  ring I[01:21.0,00]Say to the world[01:24.,00]You're my every reason you're all that I believe in[01:30.0,00]With all my heart I mean every word[01:37.0,00][01:37.0,00]So as long as I live I love you[01:41.0,00]Will have and hold you[01:44.0,00]You look so beautiful in white[01:49.0,00]And from now to my very last breath[01:54.0,00]This day I'll cherish[01:57.0,00]You look so beautiful in white[02:02.0,00]Tonight[02:07.0,00][02:07.0,00]oooh oh[02:09.0,00]You look so beautiful in white[02:14.0,00][02:20.0,00]Na na na na[02:22.00][02:23.,00]So beautiful in white[02:27.0,00]Tonight[02:29.0,00][02:30.0,00]And if our daughter is what our future holds[02:34.0,00]I hope she has your eyes[02:37.0,00]Finds love like you and I did[02:42.0,00]Yeah, if she falls in love ,I will let her go[02:47.0,00]I'll walk her down the aisle[02:50.0,00]She looks so beautiful in white[02:58.0,00][02:59.0,00]You look so beautiful in white[03:04.0,00][03:04.0,00]So as long as I live I love you[03:08.0,00]Will have and hold you[03:12.,00]You look so beautiful in white[03:17.0,00]And from now to my very last breath[03:21.0,00]This day I'll cherish[03:24.0,00]You look so beautiful in white[03:29.0,00]Tonight[03:33.0,00][03:37.0,00]You look so beautiful in white[03:42.0,00]Tonight\n"
	},
],
]
