<template>
  <html class="dark">
    <div class="common-layout">
    <el-container>
      <el-container direction='horizontal'>
        <el-container direction='vertical' style="min-width:390px; max-width:390px; height: calc(100vh - 72px - 9px - 16px); min-height: 447px;" >
          <el-aside class="kuai"  style="
            width: 100%;
            height:112px;
            min-height:112px;
            max-height:112px;
            border-radius: 10px;
          ">
            <NavbarTop/>
          </el-aside>
          <!-- 左上角的分割线 -->
          <el-aside class="line" style="width: 100%; height:9px; "></el-aside>
          <el-aside class="kuai" style="
            width: 100%;
            height: calc(100% - 112px - 9px);
            min-height: 344px;

            border-radius: 10px;
          ">
            <MusicKu/>
          </el-aside>
        </el-container>
        <!-- 竖着的分割线 -->
        <el-container class="line" direction='vertical' style="min-width:9px; max-width:9px;"></el-container>
        <el-container direction='vertical' style="min-width:460px; height: calc(100vh - 72px - 9px - 16px); min-height: 465px;">
          <el-main class="kuai" style="
              max-width:100%;
              height: 100%;
              min-height: 465px;
              padding: 0px;
              border-radius: 10px;
            ">
            <MainWindow :currentMusic="currentMusic" :currentTime="currentTime"/>
          </el-main>
        </el-container>
      </el-container>
      <!-- 横着的分割线 -->
      <el-container class="line" direction='vertical' style="height: 9px; width: 100%;"></el-container>

      <el-footer style="
              width: 100%;
              height: 72px;
              border-radius: 10px;
              min-width:859px
            ">
            <BottonBar @music-change="updateCurrentMusic" @progress-change="updateCurrentTime"/>
      </el-footer>
    </el-container>

  </div>
  </html>
  
</template>

<script setup>
import { ref,onMounted  } from 'vue';
import NavbarTop from './components/NavbarTop.vue'
import MusicKu from './components/MusicKu.vue';
import MainWindow from './components/MainWindow.vue'
import BottonBar from './components/BottonBar.vue'
import {musicQueue} from "@/tools/music"

//处理歌曲时间
const currentTime = ref(0);
const currentMusic = ref(null);

const updateCurrentTime = (newProgress) => {
  currentTime.value = newProgress;
};

onMounted(() => {
//默认获取歌曲
currentMusic.value = musicQueue.getCurrentMusic()
});

//当前歌曲发生改变，需要更新最新歌曲。
const  updateCurrentMusic = () => {
  currentMusic.value = musicQueue.getCurrentMusic()
  console.log(currentMusic.value);
}
// 写入测试数据
const musicPlaylist = [
    {
      "id": "1",
      "title": "プルシュカ",
      "artist": "indigo la End",
      "duration": "3:45",
      "lyrics": "[00:00.000] 作词 : Enon Kawatani\n[00:01.000] 作曲 : Enon Kawatani\n[00:12.714] あなたに見せたくって\n[00:14.750] 綺麗になりかけた隙をついた\n[00:18.421] ありのままで束の間の\n[00:20.443] 幸せが浮かび上がった\n[00:24.164] 光の汗を拭いて\n[00:26.305] 急いで暗がりで涼んだ\n[00:29.800] 何かを思い出したように\n[00:32.040] 見る夢で汗をかく\n[00:35.820] 惜しみない愛を向けたら\n[00:38.343] 見返りに傷をつけられた\n[00:41.518] 涙に混じった裏側\n[00:44.095] それでもあなたしかいない\n[00:46.558] 願っても\n[00:48.009] 痛いだけ\n[00:49.442] わかったよ\n[00:50.805] 夜明けを見ずに生きるから\n[00:53.737] 私だけ見て溢れさせてよ\n[00:58.131] わかってて\n[00:59.583] 想ってて\n[01:01.007] 繋いでて\n[01:02.765] 幻みたいな幸せ\n[01:05.340] 感じさせて\n[01:07.392] ぼんやり悲しいまま\n[01:22.052] 思い出は鼻につく\n[01:24.111] これからに息を吹きかけた\n[01:27.573] 色が変わることはなく\n[01:29.834] 不思議に思っていた\n[01:33.642] 夜明けの花は昼には枯れて落ちるんだ\n[01:38.646] わかってたって\n[01:40.193] 命が貰った役割に期待はしちゃうから\n[01:45.157] 歯止めが効かない\n[01:47.057] 優しさと欲が弧を描く\n[01:50.984] 暗闇に落としちゃった\n[01:53.146] 身体と心が入れ替わる\n[01:55.927] どうして\n[01:57.399] 私だけ悲しくて\n[02:00.096] 何も知らずに愛を砕いても\n[02:03.666] まだ夜のまま深いの\n[02:07.526] どうする？\n[02:08.907] わかってる？\n[02:10.397] 想ってる？\n[02:11.887] 幻のような優しさで\n[02:14.567] 構ってよ\n[02:16.196] 本音が建前を超えて\n[02:31.661] 気持ちをひとつかみ\n[02:34.389] まともじゃない\n[02:37.306] それだけわかった\n[02:42.329] 願っても\n[02:43.626] 痛いだけ\n[02:45.089] わかったよ\n[02:46.459] 夜明けを見ずに生きるから\n[02:49.227] 私だけ見て溢れさせてよ\n[02:53.792] わかってて\n[02:55.133] 想ってて\n[02:56.602] 繋いでて\n[02:57.949] 幻みたいな幸せ\n[03:00.811] 感じさせて\n[03:03.037] あの眼差しで\n[03:05.326] 似合ってるって言ってよ\n[03:08.065] 溢れても\n[03:09.552] 大事なままでいて欲しい\n[03:12.361] 狂ってる\n[03:13.948] そう言われてもいい\n[03:17.820] 花が降ってきた\n[03:19.762] 私は今どこにいるのだろうか\n[03:24.472] 切ない花模様\n[03:26.155] あなたに押し付けた\n[03:29.394] 花が降ってきた\n[03:31.395] あなたは今どこにいるのだろうか\n[03:36.094] 私もそこにいれば\n[03:38.233] 幸せだってことにしてね\n",
      "album": "专辑名称1",
      "url": "https://music-1251788949.cos.ap-chongqing.myqcloud.com/indigo%20la%20End%20-%20%E3%83%97%E3%83%AB%E3%82%B7%E3%83%A5%E3%82%AB.mp3",
      "image": "http://p2.music.126.net/utWXBh4kARe3sGxX0mhTnw==/109951169001450014.jpg?param=130y130",
      "islike": false
    },
    {
      "id": "2",
      "title": "离别开出花",
      "artist": "就是南方凯",
      "duration": "4:20",
      "lyrics": "[00:00.00] 作词 : 李浩瑞\n[00:00.31] 作曲 : 李浩瑞\n[00:00.63]当离别开出花\n[00:02.13]伸出新长的枝桠\n[00:04.26]像冬去春又来\n[00:05.91]等待心雪融化\n[00:07.98]你每次离开家\n[00:09.54]带着远方的牵挂\n[00:11.73]那城市的繁华\n[00:13.23]盖住了月牙\n[00:15.36]当离别开出花\n[00:17.22]它生长在悬崖\n[00:19.02]在最高的山顶\n[00:20.64]才听得见回答\n[00:22.74]没什么好害怕\n[00:24.27]孩子放心去飞吧\n[00:26.61]在你的身后\n[00:28.02]有个等你的家\n[00:46.53]坐上那朵离家的云霞\n[00:50.19]飘去无人知晓的天涯\n[00:53.88]背着妈妈说的那句话\n[00:57.57]孩子人生其实不复杂\n[01:00.21]喔～眼泪轻轻地擦\n[01:02.82]别管那多嘴乌鸦\n[01:04.56]咽下那些风沙\n[01:06.57]你才能慢慢长大\n[01:08.25]要错过几个她\n[01:10.20]用你最好的年华\n[01:12.12]这是青春的代价\n[01:14.49]当离别开出花\n[01:15.96]伸出新长的枝桠\n[01:18.09]像冬去春又来\n[01:19.68]等待心雪融化\n[01:21.78]你每次离开家\n[01:23.37]带着远方的牵挂\n[01:25.53]那城市的繁华\n[01:27.09]盖住了月牙\n[01:29.25]当离别开出花\n[01:30.96]它生长在悬崖\n[01:32.85]在最高的山顶\n[01:34.47]才听得见回答\n[01:36.60]没什么好害怕\n[01:38.13]孩子放心去飞吧\n[01:40.47]在你的身后\n[01:41.85]有个等你的家\n[02:02.19]坐上那朵离家的云霞\n[02:05.91]飘去无人知晓的天涯\n[02:09.63]背着妈妈说的那句话\n[02:13.29]孩子人生其实不复杂\n[02:15.90]喔～眼泪轻轻地擦\n[02:18.51]别忘那童年梦话\n[02:20.25]散在远方的花\n[02:22.20]也随风慢慢长大\n[02:23.91]要错过几个她\n[02:25.89]用你最真的年华\n[02:27.78]这是青春的回答\n[02:30.18]当离别开出花\n[02:31.65]伸出新长的枝桠\n[02:33.81]像冬去春又来\n[02:35.37]等待心雪融化\n[02:37.50]你每次离开家\n[02:39.09]带着远方的牵挂\n[02:41.25]那城市的繁华\n[02:42.78]盖住了月牙\n[02:44.94]当离别开出花\n[02:46.80]它生长在悬崖\n[02:48.54]在最高的山顶\n[02:50.16]才听得见回答\n[02:52.26]没什么好害怕\n[02:53.94]孩子放心去飞吧\n[02:56.22]在你的身后\n[02:57.54]有个等你的家\n[02:59.79]当离别开出花\n[03:01.20]伸出新长的枝桠\n[03:03.30]像冬去春又来\n[03:04.92]等待心雪融化\n[03:07.05]你每次离开家\n[03:08.61]带着远方的牵挂\n[03:10.80]那城市的繁华\n[03:12.33]盖住了月牙\n[03:14.49]当离别开出花\n[03:16.32]它生长在悬崖\n[03:18.09]在最高的山顶\n[03:19.71]才听得见回答\n[03:21.78]没什么好害怕\n[03:23.37]孩子放心去飞吧\n[03:25.71]在你的身后\n[03:27.09]有个等你的家\n",
      "album": "专辑名称2",
      "url": "https://music-1251788949.cos.ap-chongqing.myqcloud.com/%E5%B0%B1%E6%98%AF%E5%8D%97%E6%96%B9%E5%87%AF%20-%20%E7%A6%BB%E5%88%AB%E5%BC%80%E5%87%BA%E8%8A%B1.mp3",
      "image": "http://p1.music.126.net/MgrERz_auwIi5Km64TxwjQ==/109951169154658797.jpg?param=130y130",
      "islike": true
    },
    {
      "id": "3",
      "title": "苦茶子",
      "artist": "Starling8,MoreLearn 27,FIVESTAR",
      "duration": "4:20",
      "lyrics": "[00:00.00] 作词 : Starling8/FIVESTAR/MoreLearn 27\n[00:00.01] 作曲 : Starling8/FIVESTAR/MoreLearn 27\n[00:00.03]出品：网易青云 LAB\n[00:01.62]Starling8:\n[00:14.79]怎样才能满足你的野心\n[00:17.37]主动掉进陷阱还是往你脸上贴金\n[00:20.82]嘴上说着 I don‘t care心里泛起涟漪\n[00:24.33]告别请你在冬天这是我的建议\n[00:28.05]MoreLearn27:\n[00:28.35]曾经我可以一整天什么都不用做\n[00:30.36]和你待在房间里面\n[00:31.83]你走后我过得也没多糟\n[00:33.48]不过是手机经常没有电\n[00:35.31]她就像你修过的照片\n[00:36.72]一次又一次骗了我好几遍\n[00:38.91]你那么爱拍照\n[00:39.84]应该要考虑相机有天也会用光底片\n[00:42.75]再说几句\n[00:44.04]我们可能没有以后\n[00:46.47]怒气把我们撕开不用彼此忍受\n[00:49.80] B to the D\n[00:51.06]是我交往过的女友\n[00:53.49]我应该开心怎么感觉有些 emo\n[00:56.19] Hook\n[00:56.88]花花的世界蝴蝶多\n[00:58.41]你是主角是主角\n[01:00.30]对她的爱是不灭火\n[01:01.92]它熄不灭熄不灭X2\n[01:08.28] FIVESTARBABY：\n[01:08.70] one two three\n[01:12.15]还要吵几百个回合\n[01:14.37]爱真的好麻烦\n[01:16.08]非要争个对错\n[01:17.85]你的出现是因果\n[01:19.47]就像夏娃手心的苹果\n[01:21.36]给了我致命的诱惑\n[01:23.04]无法逃脱\n[01:24.45]MoreLearn27:\n[01:24.48]你怪我走的太快\n[01:26.04]我怪你需要时不在\n[01:27.75]所以我站在你家楼下你却没有走下来\n[01:31.44]唯一超过了期待\n[01:33.00]是离别前给的伤害\n[01:35.16]我什么都做不到\n[01:36.72]除非忘掉你的所有\n[01:38.79]Starling8:\n[01:38.88]你像天使般伫立在山顶\n[01:41.16]在半坡我看到一丝残影\n[01:43.11]不想睁眼半梦半醒\n[01:44.64]为了找到你我绕千尺弯\n[01:47.01]翻千指山闯廉耻关闻胭脂酸\n[01:50.28]在坚持攀没时间反省\n[01:52.62] FIVESTARBABY：\n[01:52.95] you break my heart babe\n[01:54.69]流了太多眼泪\n[01:56.31] I wonder why you're angry\n[01:58.14]面色变的憔悴\n[01:59.88]微醺的眼妆你像是魔鬼\n[02:01.59]我绝对不是倒霉孩子不是傀儡\n[02:03.42]儿女情长扔一边儿我无法颓废\n[02:05.07]纸醉金迷玩世不恭 fivestarbaby\n[02:06.93]Starling8:\n[02:07.05]多久没见了我是否变得强大\n[02:08.73]可以大胆说我愿意听你想法\n[02:10.47]焦虑症使我被迫放了长假\n[02:12.27]不用怕我破防我心脏安置装甲\n[02:13.98]MoreLearn27:\n[02:14.01]有天晚上我好像见到了上帝\n[02:15.87]对着他的脸放了个响屁\n[02:17.61]你要拥抱我伸出了双臂\n[02:19.26]一个人在房间里\n[02:20.13]狠狠地奖励\n[02:20.88] Hook\n[02:21.00]花花的世界蝴蝶多\n[02:22.47]你是主角是主角\n[02:24.36]对她的爱是不灭火\n[02:25.98]它熄不灭熄不灭\n[02:27.90]花花的世界蝴蝶多\n[02:29.49]你是主角是主角\n[02:31.38]对她的爱是不灭火\n[02:33.00]它熄不灭熄不灭\n",
      "album": "专辑名称2",
      "url": "https://music-1251788949.cos.ap-chongqing.myqcloud.com/%E8%8B%A6%E8%8C%B6%E5%AD%90.mp3",
      "image": "http://p1.music.126.net/VjXYNoGC3lXajZDs0r35XQ==/109951167852652412.jpg?param=130y130",
      "islike": true
    },
    {
      "id": "4",
      "title": "Checkmate",
      "artist": "Rod Wave",
      "duration": "4:20",
      "lyrics": "[00:00.000] 作曲 : Rodarius Green\n[00:02.926] Lost in my feelings, running out of love\n[00:05.338] Sometimes I get in my feelings\n[00:12.885]\n[00:31.338] Sometimes I'm in my feelings, yeah\n[00:35.211] Like, this shit really like, War Dogs\n[00:38.704] You know? Just through that lens\n[00:40.022] You know? [?] cut some [?] scar\n[00:41.862] [?] with this shit, you know?\n[00:44.650]\n[00:45.911] Okay, lost in my feelings, running out of love\n[00:49.374] Sometimes I get in my feelings with c*****e in my blood\n[00:52.046] Most times I be trippin' reminiscin' 'bout us\n[00:54.958] Why'd I gotta stand on business? Ten toes no matter what\n[00:57.790] You know life is like a chess game\n[01:00.096] Gotta think it through (Yeah-yeah)\n[01:01.545] Gotta make your next move your best move\n[01:03.378] And what's happenin' Uncle D?\n[01:04.974] I probably never could repay ya\n[01:06.358] Helped me chase my dream\n[01:07.881] Found my dream and went major\n[01:09.745] Any niggas hate us\n[01:10.992] Shot my whole truck up\n[01:12.441] Beef we ain't squashing\n[01:13.887] Never gettin' ****ed up\n[01:15.410] Man, I really **** with bro\n[01:16.880] Hope he got the mentions I sent\n[01:18.654] It's on the floor, stay out the car with them jits\n[01:20.628]\n[01:20.792] So many war rooms\n[01:22.203] So many nights all alone\n[01:24.369] God blessed the child that could hold his own\n[01:26.799] And you can wave your white flag all you want (You want)\n[01:30.364] I want you to know\n[01:32.333] I'ma pay you back for that one\n[01:34.615] I'ma pay you back for that one (Yeah, yeah)\n[01:38.216] I gotta pay you back for that one\n[01:40.753] I'ma pay you back for that one (That one)\n[01:44.404] Pay you back for that one (Yeah)\n[01:46.357] I'ma pay you back for that one\n[01:49.972] I gotta pay you back for that one (Yeah)\n[01:52.414] I'ma get you back for that one, uh\n[01:55.646]\n[01:55.810] Okay, now tell me how this b***h found it in her heart to cross me\n[01:58.935] I had your back since we was little, can't forget ya or forgive ya\n[02:01.716] Since we first got out the ghetto\n[02:03.212] Know we had some stormy weather\n[02:04.622] But you ain't make this shit no better\n[02:05.893] Now it's up and stuck forever (Forever)\n[02:07.543] And I'm on that dope so bad right now that I can't feel a thing\n[02:10.608] C*****e cups to the brain, smilin' through my pain\n[02:13.331] Like dancin' in the rain, yeah\n[02:16.204] When you smiling through your pain it feel like dancing in the rain\n[02:18.799]\n[02:18.967] So many war rooms\n[02:20.442] So many nights all alone (Yeah)\n[02:22.371] God blessed the child that could hold his own\n[02:24.898] And you can wave your white flag all you want (You want)\n[02:28.516] I want you to know\n[02:30.610] I'ma pay you back for that one (I'ma pay you back for that one)\n[02:32.891] I'ma pay you back for that one (I'ma pay you back for that one)\n[02:36.427] I gotta pay you back for that one\n[02:38.844] I'ma pay you back for that one (I'ma get you back for that one, I'ma)\n[02:42.569] Pay you back for that one (Yeah)\n[02:44.782] I'ma pay you back for that one (Yeah, yeah)\n[02:48.129] I gotta pay you back for that one\n[02:50.293] I'm gon' get you back for that one, yeah\n[02:54.284]\n[02:54.469] The [?] **** [?], bet you knew\n[02:56.919] Swear to God, swear to God, ****, you hear me?\n[03:01.434] One—, a year ago, you know what I'm sayin'?\n[03:04.418] They—, ten years ago, **** nigga, you know?\n[03:09.170] I'ma get ya, um\n[03:10.019] I'ma get you the grrah\n",
      "album": "专辑名称2",
      "url": "https://music-1251788949.cos.ap-chongqing.myqcloud.com/Rod%20Wave%20-%20Checkmate.mp3",
      "image": "http://p1.music.126.net/rzOIXFPqrfMivm_cvzLtYQ==/109951168914035596.jpg?param=130y130",
      "islike": true
    }
    // 更多歌曲...
  ];
localStorage.setItem('musicPlaylist', JSON.stringify(musicPlaylist));
localStorage.setItem('currentMusicIndex', 0);

</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'AlibabaPuHuiTi-Medium';
}
body{
    margin: 0;
    padding: 0;
}

html.dark{
  padding: 8px 8px 8px 8px;
}
</style>

