# typed: false
# frozen_string_literal: true

Shopify::Tracing.enable_rails_tracing if Rails.env.production?
