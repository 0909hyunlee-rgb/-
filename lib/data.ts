
import { CompanyInfo, Service, GalleryItem, Booking } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: "조이스토리 (Joy Story)",
  tagline: "당신의 아름다운 이야기를 디자인합니다",
  address: "서울특별시 강남구 테헤란로 123, 럭셔리 빌딩 5층",
  phone: "010-1234-5678",
  kakaoId: "joystory_makeup",
  instagram: "@joystory_official",
  businessHours: "월-금 10:00 - 20:00 / 토 10:00 - 18:00 (일요일 휴무)"
};

export const SERVICES: Service[] = [
  {
    id: "eb-01",
    name: "자연스러운 엠보 눈썹",
    description: "본인의 눈썹결을 살려 한올 한올 정교하게 채워넣는 가장 인기 있는 시술입니다.",
    price: "250,000원",
    duration: "90분",
    imageUrl: "https://picsum.photos/seed/brows1/600/400"
  },
  {
    id: "eb-02",
    name: "쉐도우 수지 눈썹",
    description: "마치 메이크업을 한 듯 은은한 그라데이션으로 화장 시간을 단축시켜줍니다.",
    price: "300,000원",
    duration: "120분",
    imageUrl: "https://picsum.photos/seed/brows2/600/400"
  },
  {
    id: "lp-01",
    name: "생기 가득 틴트 입술",
    description: "칙칙한 입술색을 교정하고 생기 있는 컬러를 입혀 풀 메이크업 효과를 줍니다.",
    price: "350,000원",
    duration: "150분",
    imageUrl: "https://picsum.photos/seed/lips1/600/400"
  },
  {
    id: "el-01",
    name: "점막 아이라인",
    description: "속눈썹 사이사이를 촘촘하게 채워 또렷하고 깊은 눈매를 연출합니다.",
    price: "200,000원",
    duration: "60분",
    imageUrl: "https://picsum.photos/seed/eyeliner1/600/400"
  }
];

export const GALLERY: GalleryItem[] = [
  { id: "g1", category: "눈썹", beforeUrl: "https://picsum.photos/seed/gb1/400/400", afterUrl: "https://picsum.photos/seed/ga1/400/400" },
  { id: "g2", category: "눈썹", beforeUrl: "https://picsum.photos/seed/gb2/400/400", afterUrl: "https://picsum.photos/seed/ga2/400/400" },
  { id: "g3", category: "입술", beforeUrl: "https://picsum.photos/seed/gb3/400/400", afterUrl: "https://picsum.photos/seed/ga3/400/400" },
  { id: "g4", category: "아이라인", beforeUrl: "https://picsum.photos/seed/gb4/400/400", afterUrl: "https://picsum.photos/seed/ga4/400/400" },
];

export const MOCK_BOOKINGS: Booking[] = [
  { id: "b1", customerName: "김민지", phone: "010-8888-9999", serviceId: "eb-01", date: "2024-05-20", time: "14:00", status: "confirmed" },
  { id: "b2", customerName: "이서윤", phone: "010-7777-6666", serviceId: "lp-01", date: "2024-05-21", time: "11:00", status: "pending" },
  { id: "b3", customerName: "박지성", phone: "010-5555-4444", serviceId: "el-01", date: "2024-05-22", time: "16:30", status: "confirmed" },
];
