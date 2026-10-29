import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        certification: resolve(__dirname, 'certification.html'),
        contact: resolve(__dirname, 'contact.html'),
        coaching: resolve(__dirname, 'coaching.html'),
        insights: resolve(__dirname, 'insights.html'),
        growthRoadmap: resolve(__dirname, 'growth-roadmap.html'),
        growthRoadmapAssessment: resolve(__dirname, 'growth-roadmap-assessment.html'),
        articleCourts: resolve(__dirname, 'article-courts.html'),
        articleProgramming: resolve(__dirname, 'article-programming.html'),
        articleZigZag: resolve(__dirname, 'article-zig-zag.html'),
        articleTeam: resolve(__dirname, 'article-team.html'),
        articleAiOperations: resolve(__dirname, 'article-ai-operations.html'),
        articleBuildIt: resolve(__dirname, 'article-build-it.html'),
        articleCoachsEye: resolve(__dirname, 'article-coachs-eye.html'),
        articleDiagnosis: resolve(__dirname, 'article-diagnosis.html'),
        articlePractice: resolve(__dirname, 'article-practice.html'),
        articleLesson: resolve(__dirname, 'article-lesson.html'),
        articleJuniors: resolve(__dirname, 'article-juniors.html'),
        articleCommunity: resolve(__dirname, 'article-community.html'),
        articleRevenue: resolve(__dirname, 'article-revenue.html'),
        articleGm: resolve(__dirname, 'article-gm.html'),
        articlePps: resolve(__dirname, 'article-pps.html'),
        articleScaling: resolve(__dirname, 'article-scaling.html'),
        article52Shots: resolve(__dirname, 'article-52-shots.html'),
        articlePstvMillion: resolve(__dirname, 'article-pstv-million.html'),
        articleAmericaPadel: resolve(__dirname, 'article-america-padel.html'),
        articleCoachShortage: resolve(__dirname, 'article-coach-shortage.html'),
        articleClubsWin: resolve(__dirname, 'article-clubs-win.html'),
        articleIcon100Rule: resolve(__dirname, 'article-icon-100-rule.html'),
        articleTenSecondWelcome: resolve(__dirname, 'article-ten-second-welcome.html'),
        articleAnticipationService: resolve(__dirname, 'article-anticipation-service.html'),
        articleFiveSenseStandard: resolve(__dirname, 'article-five-sense-standard.html'),
        articleServiceRecovery: resolve(__dirname, 'article-service-recovery.html'),
        articleBelongingDesign: resolve(__dirname, 'article-belonging-design.html'),
        articleFrontDeskHeart: resolve(__dirname, 'article-front-desk-heart.html'),
        articleFiveStarTeam: resolve(__dirname, 'article-five-star-team.html'),
      },
    },
  },
});
