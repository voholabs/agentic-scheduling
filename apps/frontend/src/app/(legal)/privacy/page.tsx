import { Metadata } from 'next';
import { LegalPage, LegalSection, LegalList } from '../legal.layout';

export const metadata: Metadata = {
  title: 'Voholabs Studio Privacy Policy',
  description:
    'How Voholabs Studio collects, uses, shares, stores and deletes personal data, including data obtained from connected social media platforms such as TikTok.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Voholabs Studio Privacy Policy"
      updated="19 July 2026"
      intro={
        <>
          Voholabs Studio is a social media scheduling and publishing tool
          operated by Voholabs Ltd. This policy explains what personal data
          Voholabs Studio collects, why we collect it, who we share it with, how
          long we keep it, and the rights you have over it. It applies to
          everything at studio.voholabs.com and to the data we obtain from
          social media platforms you choose to connect, including TikTok.
        </>
      }
    >
      <LegalSection id="controller" title="1. Who we are">
        <p>
          The data controller is Voholabs Ltd, a company incorporated in England
          and Wales, operating the Voholabs Studio service at
          studio.voholabs.com. You can reach us about anything in this policy at{' '}
          <a className="underline" href="mailto:hello@voholabs.com">
            hello@voholabs.com
          </a>
          .
        </p>
        <p>
          We act as a data controller for your Voholabs Studio account data, and
          as a processor acting on your instructions for the content you
          schedule and publish to your connected channels.
        </p>
      </LegalSection>

      <LegalSection id="data" title="2. Data we collect">
        <p>We collect the following categories of personal data:</p>
        <LegalList
          items={[
            <>
              <strong>Account data</strong> — your name, email address, hashed
              password or third-party sign-in identifier, organisation name, and
              team membership.
            </>,
            <>
              <strong>Content data</strong> — the posts, captions, images,
              videos and schedules you create in Voholabs Studio, along with any
              media you upload to the media library.
            </>,
            <>
              <strong>Connected channel data</strong> — access tokens, refresh
              tokens, channel identifiers, profile names, avatars and analytics
              returned by the social media platforms you connect.
            </>,
            <>
              <strong>Billing data</strong> — subscription tier and payment
              status. Card details are handled directly by Stripe and are never
              stored on our servers.
            </>,
            <>
              <strong>Technical data</strong> — IP address, browser and device
              information, and error and usage logs generated when you use the
              service.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection
        id="tiktok"
        title="3. TikTok data — what we access and why"
      >
        <p>
          When you connect a TikTok account to Voholabs Studio, you are taken to
          TikTok&apos;s own login and consent screen. TikTok, not Voholabs
          Studio, authenticates you; we never see or store your TikTok password.
          TikTok then returns an access token that we use strictly within the
          scopes you approved:
        </p>
        <LegalList
          items={[
            <>
              <strong>user.info.basic</strong> — your TikTok open ID, display
              name and avatar, so we can show you which account a post will be
              published to.
            </>,
            <>
              <strong>user.info.profile</strong> — your profile handle,
              biography and profile link, shown in the channel settings and post
              preview.
            </>,
            <>
              <strong>user.info.stats</strong> — aggregate follower, following,
              like and video counts, shown on the analytics screen.
            </>,
            <>
              <strong>video.list</strong> — metadata for videos already
              published on your account (title, cover image, view, like, comment
              and share counts), used to populate your analytics.
            </>,
            <>
              <strong>video.upload</strong> and <strong>video.publish</strong> —
              used only to upload and publish the specific videos you have
              created and scheduled inside Voholabs Studio, at the time you
              scheduled them.
            </>,
          ]}
        />
        <p>
          We do not use TikTok data for advertising, profiling, credit or
          insurance decisions, training machine learning models, or building
          audience segments. We do not sell TikTok data, and we do not share it
          with any third party other than the infrastructure providers listed in
          section 6 that host the service on our behalf.
        </p>
        <p>
          You can disconnect a TikTok channel at any time from the launches
          screen in Voholabs Studio, or revoke access from within the TikTok app
          under Settings and privacy. Disconnecting deletes the stored tokens
          and cached TikTok profile and analytics data within 30 days. Content
          already published to TikTok remains on TikTok and is governed by
          TikTok&apos;s own policies.
        </p>
        <p>
          Your use of TikTok through Voholabs Studio is also subject to
          TikTok&apos;s Privacy Policy and Terms of Service.
        </p>
      </LegalSection>

      <LegalSection id="other-platforms" title="4. Other connected platforms">
        <p>
          The same principles apply to every other channel Voholabs Studio
          supports — including X, LinkedIn, Facebook, Instagram, Threads,
          YouTube, Pinterest, Reddit, Mastodon, Bluesky, Discord, Slack and
          Telegram. In each case we request the narrowest set of permissions
          needed to publish the content you schedule and to read back the
          analytics for the posts you published, we store only the tokens and
          identifiers required to do so, and we delete them when you disconnect
          the channel.
        </p>
      </LegalSection>

      <LegalSection id="purposes" title="5. Why we use your data">
        <LegalList
          items={[
            <>
              To provide the service — publishing your scheduled posts,
              rendering your calendar, and reporting analytics. This is
              necessary to perform our contract with you.
            </>,
            <>
              To operate and secure the platform — authentication, abuse
              prevention, backups, and diagnosing errors. This is in our
              legitimate interest in running a reliable service.
            </>,
            <>
              To take payment and manage subscriptions, which is necessary to
              perform our contract with you.
            </>,
            <>
              To send service and account notifications. Marketing email is sent
              only with your consent and can be withdrawn at any time.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="recipients" title="6. Who we share data with">
        <p>
          We do not sell personal data. We share it only with providers that
          process it on our instructions under contract:
        </p>
        <LegalList
          items={[
            <>The social media platforms you explicitly connect, in order to publish your content and retrieve its analytics.</>,
            <>Cloud hosting, database, object storage and queue providers that run the service.</>,
            <>Stripe, for subscription payments.</>,
            <>Error monitoring and product analytics providers, used to keep the service working.</>,
            <>Professional advisers, or authorities where we are legally required to disclose.</>,
          ]}
        />
      </LegalSection>

      <LegalSection id="retention" title="7. How long we keep data">
        <LegalList
          items={[
            <>Account and content data: for as long as your account is active.</>,
            <>Connected channel tokens and cached platform data: until you disconnect the channel or delete your account, then deleted within 30 days.</>,
            <>Billing records: six years, as required by UK tax law.</>,
            <>Technical and error logs: up to 90 days.</>,
          ]}
        />
      </LegalSection>

      <LegalSection id="security" title="8. Security">
        <p>
          Access tokens are encrypted at rest. Traffic to and from the service
          is encrypted in transit with TLS. Access to production systems is
          restricted to the personnel who need it. No system is perfectly
          secure, but we take reasonable and appropriate technical and
          organisational measures to protect your data, and we will notify you
          and the relevant regulator of a qualifying breach without undue delay.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="9. International transfers">
        <p>
          Some of our providers are located outside the UK and the EEA. Where
          data is transferred, we rely on UK adequacy regulations or on the
          International Data Transfer Agreement or the UK Addendum to the EU
          Standard Contractual Clauses.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="10. Your rights">
        <p>
          Subject to the conditions in applicable data protection law, you have
          the right to access, correct, delete, restrict, port and object to our
          processing of your personal data, and to withdraw consent where
          processing is based on consent.
        </p>
        <p>
          You can delete your account and all associated data from the settings
          screen, or by emailing{' '}
          <a className="underline" href="mailto:hello@voholabs.com">
            hello@voholabs.com
          </a>
          . We respond to requests within one month. If you are unhappy with how
          we handled your data you can complain to the UK Information
          Commissioner&apos;s Office at ico.org.uk.
        </p>
      </LegalSection>

      <LegalSection id="children" title="11. Children">
        <p>
          Voholabs Studio is not directed at children. You must be at least 18
          years old, or the minimum age required by the platforms you connect,
          whichever is higher, to use the service.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to this policy">
        <p>
          We may update this policy from time to time. The date at the top of
          this page shows when it last changed, and we will notify account
          holders by email of any material change before it takes effect.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
