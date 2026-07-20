import { Controller, Get } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('/health')
export class HealthController {
  // Liveness only, on purpose. This exists to catch the backend being alive
  // but never bound to :3000 (which reads as "online" to pm2), so it must not
  // touch Postgres or Redis — a transient dependency blip would otherwise
  // report the app as down while it is still serving traffic fine.
  //
  // Unauthenticated: registered outside `authenticatedController` in
  // api.module.ts, so AuthMiddleware never runs for it.
  @SkipThrottle()
  @Get('/')
  health() {
    return {
      status: 'ok',
      uptime: Math.floor(process.uptime()),
    };
  }
}
