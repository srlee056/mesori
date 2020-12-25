// 마이메이플에서 긁어와서 내 모든 캐릭터의 이름을 리스트로 저장

const { builtinModules } = require("module");



//parseCharacterAttributes();

module.exports.parseCharacter = function(){
    var parse_str =`크리스마스
    메뉴
    메이플스토리
    PC방OFF
    쪽지99+
    로그아웃
    서솔렘

    본문 바로가기
    주 메뉴 바로가기

    뉴스가이드랭킹커뮤니티미디어고객지원
    마이메이플잉서림루나아크마이메이플내가 쓴 글
    내정보 관리아이템 이용내역테스트월드회원탈퇴
    내정보 관리대표캐릭터 변경메이플스토리 홈페이지 이용 시 사용할 대표캐릭터를 설정해주세요.01메이플ID 선택
    webbi056
    tjffpdla58888888
    02월드/캐릭터 선택루나
    루나
잉서림루나잉서림아무거나쩨알루나아무거나쩨알곽땋구리루나곽땋구리우리컨루나우리컨섶갈루나섶갈섶용루나섶용섶흰루나섶흰섶뎁루나섶뎁섶킷루나섶킷섶윰루나섶윰섶덴루나섶덴섶앵루나섶앵섶릭루나섶릭섶커루나섶커섶젠루나섶젠섶없루나섶없섶신루나섶신섶맛루나섶맛섶캣루나섶캣섶혀루나섶혀섶캉루나섶캉섶듀루나섶듀섦빗루나섦빗섦댈루나섦댈암인트루나암인트포니위자드루나포니위자드섦윈루나섦윈섦콜l루나섦콜l섶팔루나섶팔섦낭루나섦낭잉섦루나잉섦와헌섦루나와헌섦섀도어섦루나섀도어섦서솔렘루나서솔렘메카섦루나메카섦미하일섦루나미하일섦불독섦루나불독섦나로섦루나나로섦루미너스섦루나루미너스섦배메섦루나배메섦블래섦루나블래섦보마섦루나보마섦프린승균루나프린승균튜브윔루나튜브윔덴섦루나덴섦
대표캐릭터는 10레벨 이상이어야 지정할 수 있습니다.대표 캐릭터 저장
    마이메이플 메인
    내정보 관리
    대표캐릭터 변경비활성ID 전환/해제제한 내역캐릭터정보 공개설정
    Family Site회사소개채용안내이용약관게임이용등급안내개인정보처리방침청소년보호정책운영정책넥슨PC방사이트맵(주)넥슨코리아 대표이사 이정헌 경기도 성남시 분당구판교로 256번길 7 전화: 1588-7701 팩스:0502-258-7322
    E-mail:contact-us@nexon.co.kr 사업자등록번호 : 220-87-17483호 통신판매업 신고번호 : 제2013-경기성남-1659호 사업자정보확인ⓒ NEXON Korea Corporation All Rights Reserved.TOP
    `;
    var parsed_str = parse_str.split("월드/캐릭터 선택")[1].split('대표캐릭터는')[0]
    var server = parsed_str.split('\n')[0];
    var characters = parsed_str.split('\n')[2];

    var sl = server.length;
    var char_list = new Array();
    while(characters.length>0){
        index_ = characters.indexOf(server);
        name_ = characters.substring(0, index_);
        char_list.push(name_);
        characters = characters.substring(index_+name_.length+sl);
    }
    //console.log(char_list);
    //console.log(char_list.length);
    return char_list.slice(0,2);
};


