// Data
const testimonialsData = [
    { content: "Là một giáo sư tại Đại học Lorraine (Pháp), tôi đặc biệt tự hào khi thấy Ngô Lê Huy Hiền viết nên một cuốn sách rất rõ ràng và dễ tiếp cận, không chỉ giúp người đọc hiểu đúng về AI mà còn truyền cảm hứng để họ tự tin và sáng tạo hơn. Sự chuẩn xác trong phân tích và tính thiết thực của các công cụ được giới thiệu đã làm cho cuốn sách này trở thành một đóng góp nổi bật cho việc hiểu và làm chủ trước những thách thức công nghệ ngày nay.", author: "Giáo sư, Tiến sĩ Eric Rondeau", title: "khoa Khoa học và Công nghệ, Đại học Lorraine, Pháp", image: "img/Person 1.jpg" },
    { content: "Thạc sĩ Ngô Lê Huy Hiền đã là sinh viên tiêu biểu của chúng tôi và cũng là một trong những người đạt thành tích xuất sắc nhất. Chúng tôi rất tự hào khi có Hiền trong chương trình EMJMD GENIAL do EU tài trợ. 'Đi học thời AI' ra mắt rất đúng thời điểm, giúp người học khai thác AI một cách có trách nhiệm để tiếp thu tri thức mới, rèn luyện kỹ năng và phát triển năng lực hiệu quả với tốc độ đang chuyển đổi không ngừng của thế giới.", author: "Giáo sư, Tiến sĩ Ah-Lian Kor", title: "khoa Môi trường Kiến tạo, Kỹ thuật và Máy tính, Đại học Leeds Beckett, Anh", image: "img/Person 2.jpg" },
    { content: "Tôi cũng học được nhiều cái mới sau khi đọc cuốn sách. Các tác giả đã đầu tư nhiều công sức, đưa ra những chỉ dẫn thiết thực, có nhiều ví dụ cụ thể, kinh nghiệm thực tế của các tác giả và lời khuyên bổ ích giúp bạn tự tin vận hành các trợ lý AI trong mọi tình huống. Cuốn sách truyền cảm hứng để bạn khám phá năng lực sáng tạo của bản thân, giúp thành công trong học tập hôm nay và trong cuộc sống mai sau.", author: "Phó Giáo sư, Tiến sĩ Nguyễn Đình Hóa", title: "Đại học Quốc gia Hà Nội, Đồng tác giả sách giáo khoa Tin học, bộ sách Cánh Diều", image: "img/Person 3.jpg" },
    { content: "Cuốn sách mang đến cách tiếp cận AI cực kỳ gần gũi, dễ hiểu, với cách trình bày sinh động và nhiều ví dụ thực tế giúp bất kỳ người đọc nào cũng có thể hiểu và ứng dụng vào học tập một cách tự tin.", author: "Tiến sĩ Trần Thế Vũ", title: "Phó viện trưởng, Viện Nghiên cứu và Đào tạo Việt – Anh, Đại học Đà Nẵng", image: "img/Person 4.jpg" }
];

const tocData = [
    { title: "PHẦN I: HIỂU VỀ AI VÀ CƠ HỘI CỦA BẠN", chapters: [{ title: "CHƯƠNG 1: Hiểu về AI" }, { title: "CHƯƠNG 2: Thời đại AI và cơ hội của bạn" }] },
    { title: "PHẦN II: ĐẠO ĐỨC AI VÀ NĂNG LỰC TỰ CHỦ KHI SỬ DỤNG", chapters: [{ title: "CHƯƠNG 3: Hiểu về ảo giác và thiên kiến trong AI" }, { title: "CHƯƠNG 4: Xây dựng năng lực tự chủ khi sử dụng AI" }] },
    { title: "PHẦN III: KỸ NĂNG VIẾT PROMPT VÀ CÁ NHÂN HÓA AI", chapters: [{ title: "CHƯƠNG 5: Nghệ thuật viết prompt hiệu quả" }, { title: "CHƯƠNG 6: Tùy chỉnh và cá nhân hóa AI" }] },
    { title: "PHẦN IV: ĐẶT MỤC TIÊU VÀ LÊN CHIẾN LƯỢC HỌC TẬP CÙNG AI", chapters: [{ title: "CHƯƠNG 7: Hiểu bản thân và phong cách học tập" }, { title: "CHƯƠNG 8: Đặt mục tiêu và kế hoạch phát triển bản thân" }] },
    { title: "PHẦN V: ỨNG DỤNG AI VÀO HỌC TẬP VÀ RÈN LUYỆN", chapters: [{ title: "CHƯƠNG 9: Sự tự học và gia sư AI" }, { title: "CHƯƠNG 10: Những phương pháp học tập hiệu quả cùng AI" }] },
    { title: "PHẦN VI: BỘ CÔNG CỤ AI HỮU ÍCH DÀNH CHO NGƯỜI HỌC", chapters: [{ title: "CHƯƠNG 11: Bộ công cụ AI trọng tâm" }, { title: "CHƯƠNG 12: Bộ công cụ AI hỗ trợ nghiên cứu" }, { title: "CHƯƠNG 13: Bộ công cụ AI sáng tạo đa phương tiện" }, { title: "CHƯƠNG 14: Tác nhân AI (AI Agent)" }] }
];

const alphaBooksLocations = [
    { id: 1, name: 'Gian Hàng Alpha Books HN', address: 'Đường sách 19/12, Trần Hưng Đạo, Hoàn Kiếm', city: 'Hà Nội', phone: '(02) 432668036' },
    { id: 2, name: 'Nhà sách Vinh', address: '211 Lê Duẩn, Tp Vinh', city: 'Nghệ An', phone: '(02) 383 555 468' },
    { id: 3, name: 'Gian Hàng Alpha Books HCM', address: 'Đường sách Nguyễn Văn Bình, Q.1', city: 'HCM', phone: '(08) 38 251 789' },
    { id: 4, name: 'Alpha Books Online SG', address: '252/18D Phan Anh, Hiệp Tân, Tân Phú', city: 'HCM', phone: '0886319009' },
    { id: 5, name: 'Alpha Books Online HN', address: '44 P. Ba La, Phú Lương, Hà Đông', city: 'Hà Nội', phone: '0932329959' }
];

const fahasaLocations = [
    { name: 'Nhà sách Fahasa Xã Đàn', address: '338 Xã Đàn – Đống Đa – Hà Nội' },
    { name: 'Nhà sách Fahasa Hà Đông', address: 'Tầng 3 – Siêu thị Sài Gòn Co.op Mart – Km10 Nguyễn Trãi – Hà Đông – Hà Nội' },
    { name: 'Nhà sách Fahasa Long Biên', address: 'Tầng 2 TTTM MiPec Số 2, Long Biên II, Ngọc Lâm, Long Biên, Hà Nội' }
];

// State
let currentTestimonial = 0;
let testimonialInterval;
let isPaused = false;

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    menu.classList.toggle('open');
    menuIcon.style.display = menu.classList.contains('open') ? 'none' : 'block';
    closeIcon.style.display = menu.classList.contains('open') ? 'block' : 'none';
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.remove('open');
        document.getElementById('menu-icon').style.display = 'block';
        document.getElementById('close-icon').style.display = 'none';
    }
}

// Testimonials Slider (for home page)
function updateTestimonial() {
    const textEl = document.getElementById('testimonial-text');
    const authorEl = document.getElementById('testimonial-author');
    const titleEl = document.getElementById('testimonial-title');
    
    if (!textEl || !authorEl || !titleEl) return;
    
    const data = testimonialsData[currentTestimonial];
    textEl.textContent = '"' + data.content + '"';
    authorEl.textContent = data.author;
    titleEl.textContent = data.title;
    document.querySelectorAll('.testimonial-indicator').forEach((ind, i) => {
        ind.classList.toggle('active', i === currentTestimonial);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
    updateTestimonial();
    stopAutoSlide();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialsData.length) % testimonialsData.length;
    updateTestimonial();
    stopAutoSlide();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial();
    stopAutoSlide();
}

function stopAutoSlide() {
    isPaused = true;
    clearInterval(testimonialInterval);
}

function pauseAutoSlide() {
    isPaused = true;
    clearInterval(testimonialInterval);
    setTimeout(() => {
        isPaused = false;
        startAutoSlide();
    }, 8000);
}

function startAutoSlide() {
    if (isPaused) return;
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
        updateTestimonial();
    }, 5000);
}

function initTestimonials() {
    const indicators = document.getElementById('testimonial-indicators');
    if (!indicators) return;
    
    testimonialsData.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'testimonial-indicator' + (i === 0 ? ' active' : '');
        btn.onclick = () => goToTestimonial(i);
        indicators.appendChild(btn);
    });
    updateTestimonial();
    startAutoSlide();
}

// TOC
function initTOC() {
    const timeline = document.getElementById('toc-timeline');
    if (!timeline) return;
    
    tocData.forEach((part, index) => {
        const [partNum, partTitle] = part.title.split(':');
        const item = document.createElement('div');
        item.className = 'toc-item';
        item.innerHTML = `
            <div class="toc-dot"></div>
            <div class="toc-card">
                <button class="toc-header" onclick="toggleTOC(${index})">
                    <div class="toc-header-content">
                        <span class="toc-part-num">${partNum}</span>
                        <span class="toc-divider">|</span>
                        <span class="toc-part-title">${partTitle || ''}</span>
                    </div>
                    <div class="toc-chevron">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </button>
                <div class="toc-body">
                    <div class="toc-body-inner">
                        <h4 class="toc-mobile-title">${partTitle || ''}</h4>
                        <div class="toc-chapters">
                            ${part.chapters.map(ch => `
                                <div class="toc-chapter">
                                    <svg class="toc-chapter-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    <span>${ch.title}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        timeline.appendChild(item);
    });
}

function toggleTOC(index) {
    const item = document.querySelectorAll('.toc-item')[index];
    item.classList.toggle('expanded');
    updateExpandAllButton();
}

function expandAllTOC() {
    const items = document.querySelectorAll('.toc-item');
    const allExpanded = Array.from(items).every(item => item.classList.contains('expanded'));
    
    if (allExpanded) {
        items.forEach(item => item.classList.remove('expanded'));
    } else {
        items.forEach(item => item.classList.add('expanded'));
    }
    updateExpandAllButton();
}

function updateExpandAllButton() {
    const items = document.querySelectorAll('.toc-item');
    const allExpanded = Array.from(items).every(item => item.classList.contains('expanded'));
    const btn = document.getElementById('btn-expand-all');
    
    if (!btn) return;
    
    if (allExpanded) {
        btn.classList.add('expanded');
        btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg><span>Thu gọn</span>';
    } else {
        btn.classList.remove('expanded');
        btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg><span>Xem toàn bộ</span>';
    }
}

// Order Page
function initOrderPage() {
    // Alpha Books Table
    const tableBody = document.getElementById('alpha-table-body');
    if (tableBody) {
        alphaBooksLocations.forEach(loc => {
            tableBody.innerHTML += `<tr><td>${loc.id}</td><td class="store-name">${loc.name}</td><td>${loc.address}</td><td>${loc.city}</td><td class="phone">${loc.phone}</td></tr>`;
        });
    }

    // Alpha Books Mobile Cards
    const mobileCards = document.getElementById('alpha-mobile-cards');
    if (mobileCards) {
        alphaBooksLocations.forEach(loc => {
            mobileCards.innerHTML += `
                <div class="order-mobile-card">
                    <div class="order-mobile-card-header">
                        <h5>${loc.name}</h5>
                        <span class="city-tag">${loc.city}</span>
                    </div>
                    <div class="order-mobile-card-details">
                        <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${loc.address}</span></div>
                        <div><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span class="phone">${loc.phone}</span></div>
                    </div>
                </div>
            `;
        });
    }

    // Fahasa Grid
    const fahasaGrid = document.getElementById('fahasa-grid');
    if (fahasaGrid) {
        fahasaLocations.forEach(loc => {
            fahasaGrid.innerHTML += `
                <div class="order-fahasa-card">
                    <h5>${loc.name}</h5>
                    <div class="address"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><span>${loc.address}</span></div>
                </div>
            `;
        });
    }
}

// Testimonials Page
function initTestimonialsPage() {
    const grid = document.getElementById('testimonials-page-grid');
    if (!grid) return;
    
    testimonialsData.forEach(item => {
        grid.innerHTML += `
            <div class="testimonial-page-card">
                <div class="testimonial-page-author-section">
                    ${item.image ? `<img src="${item.image}" alt="${item.author}" class="testimonial-page-avatar">` : '<div class="testimonial-page-avatar" style="background: var(--gray-200);"></div>'}
                    <div class="testimonial-page-author">
                        <h4>${item.author}</h4>
                        <p>${item.title}</p>
                    </div>
                </div>
                <div class="testimonial-page-content">
                    <div class="testimonial-page-quote-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>
                    <p class="testimonial-page-text">"${item.content}"</p>
                    <div class="testimonial-page-quote-icon-end"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style="transform: rotate(180deg);"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>
                </div>
            </div>
        `;
    });
}

// Init on page load
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
    
    // Initialize components based on what's on the page
    initTestimonials();
    initTOC();
    initOrderPage();
    initTestimonialsPage();
});
