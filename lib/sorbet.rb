# typed: true
# frozen_string_literal: true

require "sorbet-runtime"

if ENV['RAILS_ENV'] == 'production'
  T::Configuration.default_checked_level = :never

  # TODO: Switch to Bugsnag when supported
  #
  #       Bugsnag.notify(error)
  suppress_to_rails_logger = lambda do |error, *_|
    Rails.logger.error(error)
  end

  # Suppresses errors caused by T.cast, T.let, T.must, etc.
  T::Configuration.inline_type_error_handler = suppress_to_rails_logger
  # Suppresses errors caused by incorrect parameter ordering
  T::Configuration.sig_validation_error_handler = suppress_to_rails_logger
end
